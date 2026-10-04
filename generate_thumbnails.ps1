Add-Type -AssemblyName System.Drawing

function Create-Thumbnail {
    param (
        [string]$OutputFile,
        [string]$BadgeText,
        [string]$Line1Text,
        [string]$Line2Text,
        [string]$PillText,
        [System.Drawing.Color]$AccentColor,
        [System.Drawing.Color]$GlowColor
    )

    $width = 1920
    $height = 1080

    $bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # 1. Fill base dark graphite background
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 8, 10, 15))
    $g.FillRectangle($bgBrush, 0, 0, $width, $height)
    $bgBrush.Dispose()

    # 2. Draw subtle tech grid lines on left half
    $gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(18, 255, 255, 255), 1)
    for ($x = 40; $x -lt 1100; $x += 60) {
        $g.DrawLine($gridPen, $x, 0, $x, $height)
    }
    for ($y = 40; $y -lt $height; $y += 60) {
        $g.DrawLine($gridPen, 0, $y, 1100, $y)
    }
    $gridPen.Dispose()

    # 3. Draw ambient lighting glow behind the person & center
    $glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $glowPath.AddEllipse(1000, 100, 900, 900)
    $pgh = New-Object System.Drawing.Drawing2D.PathGradientBrush($glowPath)
    $pgh.CenterColor = $GlowColor
    $pgh.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    $g.FillPath($pgh, $glowPath)
    $pgh.Dispose()
    $glowPath.Dispose()

    # 4. Load and position Oğuz's portrait
    $portraitPath = (Resolve-Path "oguz_portrait.jpg").Path
    $portrait = [System.Drawing.Image]::FromFile($portraitPath)

    # Scale portrait to fill height dramatically (from y=20 to y=1080)
    $targetHeight = 1120
    $targetWidth = 1120
    $targetX = 860
    $targetY = -20

    $g.DrawImage($portrait, $targetX, $targetY, $targetWidth, $targetHeight)
    $portrait.Dispose()

    # 5. Blend left edge of portrait smoothly into background (Vignette / soft shadow gradient)
    $fadeRect = New-Object System.Drawing.Rectangle(750, 0, 320, $height)
    $fadeBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $fadeRect,
        [System.Drawing.Color]::FromArgb(255, 8, 10, 15),
        [System.Drawing.Color]::FromArgb(0, 8, 10, 15),
        [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
    )
    $g.FillRectangle($fadeBrush, $fadeRect)
    $fadeBrush.Dispose()

    # Also bottom subtle gradient fade
    $bottomRect = New-Object System.Drawing.Rectangle(0, 900, $width, 180)
    $bottomFade = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $bottomRect,
        [System.Drawing.Color]::FromArgb(0, 8, 10, 15),
        [System.Drawing.Color]::FromArgb(230, 8, 10, 15),
        [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
    )
    $g.FillRectangle($bottomFade, $bottomRect)
    $bottomFade.Dispose()

    # 6. High-CTR Typography & Graphic Elements (Left Side)
    # Available standard system fonts on Windows: Impact, Arial Black, Trebuchet MS, Segoe UI
    $badgeFont = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold)
    $hugeFont1 = New-Object System.Drawing.Font("Impact", 108, [System.Drawing.FontStyle]::Regular)
    $hugeFont2 = New-Object System.Drawing.Font("Impact", 108, [System.Drawing.FontStyle]::Regular)
    $pillFont = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Bold)
    $footerFont = New-Object System.Drawing.Font("Consolas", 18, [System.Drawing.FontStyle]::Bold)

    # A) BADGE PILL (e.g. "// YAPAY ZEKA MÜHENDİSLİĞİ")
    $badgeX = 100
    $badgeY = 120
    $badgeSize = $g.MeasureString($BadgeText, $badgeFont)
    $badgeBgRect = New-Object System.Drawing.Rectangle($badgeX, $badgeY, [int]($badgeSize.Width + 40), [int]($badgeSize.Height + 14))
    
    $badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 18, 22, 32))
    $badgeBorderPen = New-Object System.Drawing.Pen($AccentColor, 2)
    $g.FillRectangle($badgeBgBrush, $badgeBgRect)
    $g.DrawRectangle($badgeBorderPen, $badgeBgRect)
    $badgeBgBrush.Dispose()
    $badgeBorderPen.Dispose()

    $badgeTextBrush = New-Object System.Drawing.SolidBrush($AccentColor)
    $g.DrawString($BadgeText, $badgeFont, $badgeTextBrush, ($badgeX + 20), ($badgeY + 7))
    $badgeTextBrush.Dispose()

    # B) MAIN HEADLINE LINE 1 (e.g. "20 YAŞINDA")
    $line1Y = 230
    # Drop shadow
    $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 0, 0, 0))
    $g.DrawString($Line1Text, $hugeFont1, $shadowBrush, 104, ($line1Y + 4))
    $shadowBrush.Dispose()
    # White main text
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 248, 250, 255))
    $g.DrawString($Line1Text, $hugeFont1, $whiteBrush, 100, $line1Y)
    $whiteBrush.Dispose()

    # C) MAIN HEADLINE LINE 2 (e.g. "HER ŞEYİ DEĞİŞTİRDİM.")
    $line2Y = 385
    # Shadow
    $shadowBrush2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 0, 0, 0))
    $g.DrawString($Line2Text, $hugeFont2, $shadowBrush2, 106, ($line2Y + 6))
    $shadowBrush2.Dispose()
    # Accent color main text
    $accentBrush = New-Object System.Drawing.SolidBrush($AccentColor)
    $g.DrawString($Line2Text, $hugeFont2, $accentBrush, 100, $line2Y)
    $accentBrush.Dispose()

    # D) PILL / SUB-HOOK (e.g. "BENİ SADECE ÖĞRENCİ SANMAYIN")
    $pillY = 570
    $pillSize = $g.MeasureString($PillText, $pillFont)
    $pillRect = New-Object System.Drawing.Rectangle(100, $pillY, [int]($pillSize.Width + 48), [int]($pillSize.Height + 16))
    
    $pillBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 24, 28, 40))
    $pillBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(100, 255, 255, 255), 2)
    $g.FillRectangle($pillBgBrush, $pillRect)
    $g.DrawRectangle($pillBorderPen, $pillRect)
    $pillBgBrush.Dispose()
    $pillBorderPen.Dispose()

    $pillTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 230, 235, 245))
    $g.DrawString($PillText, $pillFont, $pillTextBrush, 124, ($pillY + 8))
    $pillTextBrush.Dispose()

    # E) BOTTOM TECHNICAL SIGNATURE BAR
    $footY = 960
    $footText = "MARRY45 // GITHUB &bull; WORKFLOW-AGENT &bull; ATÜ AI ENGINEERING"
    $footBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 140, 160, 190))
    $g.DrawString($footText, $footerFont, $footBrush, 100, $footY)
    $footBrush.Dispose()

    # Clean up fonts & graphics
    $badgeFont.Dispose()
    $hugeFont1.Dispose()
    $hugeFont2.Dispose()
    $pillFont.Dispose()
    $footerFont.Dispose()
    $g.Dispose()

    $bmp.Save($OutputFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Generated thumbnail: $OutputFile"
}

# --- GENERATE 3 KILLER THUMBNAIL VARIATIONS ---

# Variation 1: Electric Cyan & Tech Focus (Primary Concept)
Create-Thumbnail `
    -OutputFile "youtube_thumbnail_1.png" `
    -BadgeText "YAPAY ZEKA MÜHENDİSLİĞİ" `
    -Line1Text "20 YAŞINDA" `
    -Line2Text "HER ŞEYİ DEĞİŞTİRDİM." `
    -PillText "BENİ SADECE ÖĞRENCİ SANMAYIN" `
    -AccentColor ([System.Drawing.Color]::FromArgb(255, 56, 189, 248)) `
    -GlowColor ([System.Drawing.Color]::FromArgb(60, 56, 189, 248))

# Variation 2: Bold Amber / Warning Aesthetic (High Curiosity / Challenge)
Create-Thumbnail `
    -OutputFile "youtube_thumbnail_2.png" `
    -BadgeText "İLK BÜYÜK VİDEO" `
    -Line1Text "HERKES YANLIŞ" `
    -Line2Text "ÖĞRENİYOR." `
    -PillText "TEORİ DEĞİL, GERÇEK PROJELER" `
    -AccentColor ([System.Drawing.Color]::FromArgb(255, 251, 191, 36)) `
    -GlowColor ([System.Drawing.Color]::FromArgb(60, 245, 158, 11))

# Variation 3: Electric Emerald / Builder Aesthetic (Growth & Journey)
Create-Thumbnail `
    -OutputFile "youtube_thumbnail_3.png" `
    -BadgeText "BUILD IN PUBLIC" `
    -Line1Text "SIFIRDAN" `
    -Line2Text "AI MÜHENDİSİ." `
    -PillText "BİRLİKTE BÜYÜYORUZ" `
    -AccentColor ([System.Drawing.Color]::FromArgb(255, 52, 211, 153)) `
    -GlowColor ([System.Drawing.Color]::FromArgb(50, 16, 185, 129))

Remove-Item "check_img.ps1" -ErrorAction SilentlyContinue
