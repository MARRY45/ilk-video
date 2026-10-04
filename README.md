# Oğuz Alşan — Kişisel Marka / İlk Video Canlı Sunum Deneyimi

Bu proje, Oğuz Alşan'ın YouTube kanalındaki ilk videosu için özel olarak tasarlanmış, **"Live Personal Brand Experience"** web sunumudur. Klasik statik slaytların aksine, video kaydı sırasında konuşma ritmine göre (`Speech -> Visual Response`) adım adım tetiklenen, Apple Keynote sadeliğinde ve mühendislik disiplininde hazırlanmıştır.

---

## 💎 Temel Tasarım ve İçerik Prensipleri (Anti-AI Slop Garantisi)

1. **Sıfır AI Slop:** Robot kafaları, neon mor gradient'ler, jenerik circuit çizimleri, sahte dashboard metrikleri veya yapay zeka klişeleri kesinlikle kullanılmamıştır.
2. **Gerçek GitHub Verileri (MARRY45):** Uydurma başarılar veya takipçi sayıları yerine profildeki gerçek repolar (`Workflow-Agent`, `ai-resume-analyzer`, `FinAjan`) somut teknik dille görselleştirilmiştir.
3. **Webcam Safe Area:** Ekranın sağ üst köşesinde `%22` genişliğinde özel güvenli alan bırakılmıştır. Tasarım bu bölgeyi hiçbir zaman örtmez; tersine estetik bir koordinat ızgarasıyla arka planın doğal bir parçası gibi entegre eder.
4. **Canlı Akış & Konuşma Senkronu:** Space veya Sağ Ok tuşuna her bastığınızda konuşmanızın bir sonraki cümlesine karşılık gelen görsel beat ekrana yumuşak bir sinematik blur/translate animasyonuyla gelir.

---

## 🚀 Hızlı Başlangıç

Sunumu çalıştırmak için herhangi bir paket yüklemenize veya build almanıza gerek yoktur.

1. `index.html` dosyasını Google Chrome, Brave veya Edge tarayıcınızda çift tıklayarak açın.
2. Klavyenizden **`F`** tuşuna basarak **Tam Ekran (Fullscreen)** moduna geçin.
3. Kameranızı test etmek isterseniz **`W`** tuşuna basın veya sağ alttaki **`CAM TEST`** butonuna tıklayın (Tarayıcı kameranızı sağ üstteki ayrılmış alanda canlı gösterir).
4. Ne konuşacağınızı hatırlamak isterseniz **`T`** tuşuna basarak **Konuşmacı İpuçları (Teleprompter Hints)** panelini açıp kapatabilirsiniz.
5. OBS ile kayıt alırken sağ üstteki teknik çerçeveyi tamamen görünmez yapmak isterseniz **`G`** tuşuna basarak **Hayalet Modu (Ghost Mode)** aktif edebilirsiniz.

---

## ⌨️ Klavye Kısayolları

| Tuş | İşlev |
| :--- | :--- |
| **`Space`** / **`→`** / **`Enter`** | Bir sonraki konuşma adımına geç (Next Beat / Step) |
| **`←`** / **`Backspace`** | Bir önceki adıma geri dön (Previous Beat) |
| **`1` – `9`, `0`** | Doğrudan ilgili sahneye atla (`0` = Sahne 10) |
| **`F`** | Tam ekranı aç / kapat (Fullscreen) |
| **`T`** | Canlı konuşmacı rehberini / metin ipuçlarını aç / kapat (Teleprompter cues) |
| **`W`** | Webcam donanım test önizlemesini aç / kapat |
| **`G`** | Webcam çerçevesini gizle / göster (Ghost mode) |
| **`Home` / `End`** | Sunumun başına / sonuna git |

---

## 🎥 OBS Studio & Webcam Yerleşimi

Sunumun sağ üst köşesi standart 16:9 webcam formatı için ayrılmıştır:

- **Varsayılan Boyut:** Ekran genişliğinin `%22`si (`--webcam-width: 22vw`).
- **Ayarlama:** Boyutu değiştirmek isterseniz `style.css` dosyasının en başındaki `:root` bölümünden `--webcam-width` değerini (örneğin `20vw` veya `24vw`) kolayca güncelleyebilirsiniz.
- **OBS Yerleşimi:**
  1. OBS'te bir **Browser Source** veya **Window Capture** ile bu sunumu yakalayın.
  2. Kamera kaynağınızı (Video Capture Device) sunumun sağ üst köşesindeki referans kutusunun üzerine yerleştirin.
  3. İsterseniz **`G`** tuşuna basarak referans çizgilerini kaldırabilir, kameranızı tertemiz şekilde sunumun üzerine oturtabilirsiniz.

---

## 🎬 Sahne Yapısı & Konuşma Rehberi (4 – 7 Dakika)

### **Sahne 01 — THE HOOK (00:00 - 00:30)**
* **Görsel:** Ortada devasa ve net: `OĞUZ ALŞAN` &rarr; *"Henüz yolun başındayım. Ama durmuyorum."*
* **Konuşma Özeti:** "Merhaba, ben Oğuz. Size klasik bir başarı masalı anlatmayacağım. Çünkü henüz hikayenin başındayım. Yapay zeka mühendisliği okuyan 20 yaşında bir öğrencinin sıfırdan nasıl ürettiğini, hata yaptığını ve öğrendiğini açıkça paylaşmak için buradayım."

### **Sahne 02 — BEN KİMİM?**
* **Görsel Ritim:** 20 YAŞ &rarr; AI ENGINEERING &rarr; ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ 2. SINIF.
* **Konuşma Özeti:** "20 yaşındayım. Yapay zeka mühendisliği 2. sınıf öğrencisiyim. Teoriyi sınıfta bırakmak yerine, aynı gün terminalde kodlayıp çalıştırmayı tercih ediyorum."

### **Sahne 03 — AMA BENİ SADECE ÖĞRENCİ OLARAK GÖRME**
* **Görsel:** `ÖĞRENCİ` kelimesi konuşmayla birlikte &rarr; `ÜRETİCİ` &rarr; `ÖĞRENEN` &rarr; `PAYLAŞAN` &rarr; `GELİŞEN` kelimelerine ve kartlarına dönüşür.
* **Konuşma Özeti:** "Öğrenci olmak pasif bir dinleyici olmak demek değildir. Ben üretiyorum, her gün yeni bir mimari öğreniyorum, öğrendiklerimi paylaşıyorum ve gelişiyorum."

### **Sahne 04 — GITHUB KANIT ALANI (MARRY45)**
* **Görsel:** Gerçek repolar:
  1. `tutanak` (Yerel Toplantı Hafızası: Faster-Whisper, Local LLM/Ollama, Windows WASAPI, OCR, SQLite FTS5)
  2. `Workflow-Agent` (Python 3.11+, AsyncIO, LiteLLM, Otonom Tool-Calling ve Kanıt Doğrulama)
  3. `ai-resume-analyzer` (FastAPI, Gemini API, RAG, Halüsinasyonsuz CV Skorlama)
  4. `FinAjan` (Yerel Gizlilik, Harcama Anomali Tespiti ve AI Asistanı)
* **Konuşma Özeti:** "Ben ne üretiyorum? Cevabı profilimde açıkça duruyor. Sözde kalan slaytlar değil, test edilmiş ve çalışan repolar."

### **Sahne 05 — NEDEN BU KANAL? (MİSYON)**
* **Görsel:** *"Çünkü öğrendiklerimi kendime saklamak istemiyorum."* &rarr; `ÖĞREN` &rarr; `ÜRET` &rarr; `PAYLAŞ`.
* **Konuşma Özeti:** "Tek başıma bir odada büyümek yerine, birlikte büyümek istiyorum. Bilgi paylaşıldıkça berraklaşır."

### **Sahne 06 — KANALDA NE OLACAK? (YOL HARİTASI)**
* **Görsel:** A) Gerçek AI Teknolojileri, B) Sıfırdan Projeler, C) Build in Public & Hatalar, D) Deneyler & Kariyer.
* **Mühendislik Döngüsü:** `FİKİR → KOD → HATA (FAIL) → ÖĞREN → İNŞA ET → PAYLAŞ`.

### **Sahne 07 — BEN SİZE HOCALIK YAPMAYACAĞIM**
* **Görsel:** *"Ben size öğretmenlik yapmaya gelmedim. Ben de öğreniyorum."* &rarr; Yol arkadaşlığı kartı.
* **Konuşma Özeti:** "Kürsüden ders anlatan biri değil; sizinle aynı masada kod yazan, aynı terminal hatalarıyla boğuşan bir yol arkadaşı."

### **Sahne 08 — VİZYON**
* **Görsel:** *"BİR GÜN GERİYE DÖNÜP BU YOLCULUĞA BAKMAK. ve bunu tek başıma yapmamış olmak."*
* **Konuşma Özeti:** "Geleceğe bırakılan ilk dijital imza."

### **Sahne 09 — DOĞAL ÇAĞRI (CALL TO ACTION)**
* **Görsel:** *"Eğer sen de öğreniyorsan, burada kal."* &rarr; GitHub bağlantısı (`github.com/MARRY45`).
* **Konuşma Özeti:** "Klişe abone ol çağrıları değil; birlikte üretmek isteyen herkesi buraya davet ediyorum."

### **Sahne 10 — END SCREEN**
* **Görsel:** `OA` Monogram &rarr; `BUILD. LEARN. SHARE.` &rarr; `OĞUZ ALŞAN // Session 001 Completed.`

---

*Tüm dosyalar doğrudan yerel klasörünüzdedir (`index.html`, `style.css`, `app.js`). Herhangi bir bağımlılık olmadan tarayıcınızda anında çalışır.*
