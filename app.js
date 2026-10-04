/**
 * OĞUZ ALŞAN — PERSONAL BRAND LIVE PRESENTATION ENGINE
 * Interactive state engine supporting speech-to-visual response,
 * multi-step animation timelines, webcam test integration, and speaker cues.
 */

(function () {
  'use strict';

  // --- PRESENTATION DATA & SPEAKER CUES ---
  const SCENE_CUES = {
    1: [
      {
        step: 1,
        title: "Giriş ve Selamlama",
        speech: "Merhaba arkadaşlar, ben Oğuz. Bu videoda size klasik bir başarı hikayesi anlatmayacağım. Çünkü henüz hikayenin tam başındayım."
      },
      {
        step: 2,
        title: "The Hook — Kırılma Cümlesi",
        speech: "Henüz yolun başındayım. Ama durmuyorum. Her şeyi bildiğim için değil; saklayacak hiçbir şeyim olmadığı için buradayım."
      },
      {
        step: 3,
        title: "Giriş Özeti & Merak",
        speech: "Yapay zeka mühendisliği okuyan 20 yaşında bir öğrencinin sıfırdan nasıl ürettiğini, düştüğünü ve öğrendiğini açıkça paylaşmak için buradayım."
      }
    ],
    2: [
      {
        step: 1,
        title: "Kimlik Tanıtımı",
        speech: "Önce temel bilgileri netleştirelim. Ben kimim ve şu anda nerede duruyorum?"
      },
      {
        step: 2,
        title: "Yaş (20)",
        speech: "20 yaşındayım. Zihnimin en çok merak ettiği, en çok denemek istediği dönemdeyim."
      },
      {
        step: 3,
        title: "Bölüm (AI Engineering)",
        speech: "Yapay Zeka Mühendisliği öğrencisiyim. Yapay zekayı sadece son kullanıcı olarak değil, mühendislik perspektifiyle kodlayarak anlamaya çalışıyorum."
      },
      {
        step: 4,
        title: "Üniversite (ATÜ 2. Sınıf)",
        speech: "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi'nde 2. sınıfım."
      },
      {
        step: 5,
        title: "Çalışma Tarzı",
        speech: "Derslerde anlatılan teorileri sınav kağıdında bırakmak yerine, aynı gün terminalde kodlayıp çalıştırmayı tercih ediyorum."
      }
    ],
    3: [
      {
        step: 1,
        title: "Perspektif Değişimi",
        speech: "Ama beni sadece okula gidip gelen sıradan bir öğrenci olarak görmenizi istemiyorum."
      },
      {
        step: 2,
        title: "Öğrenci Tanımı",
        speech: "Öğrenci kelimesi çoğu zaman pasif bir dinleyiciyi çağrıştırır. Oysa ben sürecin tam ortasındayım."
      },
      {
        step: 3,
        title: "Üretici",
        speech: "Birincisi: Ben bir üreticiyim. Fikri olan değil, çalışan reposu, testi ve mimarisi olan sistemler kuruyorum."
      },
      {
        step: 4,
        title: "Öğrenen",
        speech: "İkincisi: Sürekli öğrenen biriyim. Her gün çıkan yeni bir makale, yeni bir model, yeni bir LLM aracı masamda."
      },
      {
        step: 5,
        title: "Paylaşan",
        speech: "Üçüncüsü: Paylaşan biriyim. Kodumu gizlemiyorum; nasıl çalıştığını ve nerede patladığını açıkça anlatıyorum."
      },
      {
        step: 6,
        title: "Gelişen",
        speech: "Ve en önemlisi: Gelişen biriyim. Dünden bir satır daha tecrübeli, yarından bir adım daha meraklı."
      }
    ],
    4: [
      {
        step: 1,
        title: "GitHub Kanıt Alanı",
        speech: "Sözde kalan vaatleri sevmem. 'Ben ne yapıyorum?' sorusunun cevabı profilimde, GitHub'da açıkça duruyor: MARRY45."
      },
      {
        step: 2,
        title: "tutanak — Yerel Toplantı Hafızası",
        speech: "Örneğin en yeni açık kaynak projem 'tutanak': Tamamen yerel çalışan toplantı hafızası. Mikrofonu, sistem sesini ve ekran slaytlarını kaydedip arka planda not çıkarıyor. Whisper ve yerel bir LLM ile çalışıyor; bilgisayarınızdan tek bir bayt veri bile dışarı çıkmıyor."
      },
      {
        step: 3,
        title: "Workflow-Agent Projesi",
        speech: "İkincisi 'Workflow-Agent': Çok adımlı teknik araştırma ve kod doğrulaması yapan otonom bir ajan mimarisi. En kritik noktası; gerçek test kanıtı olmadan hiçbir görevi tamamlandı saymıyor. Python, AsyncIO ve LiteLLM ile geliştirdim."
      },
      {
        step: 4,
        title: "ai-resume-analyzer Projesi",
        speech: "Üçüncüsü 'ai-resume-analyzer': CV'leri hedef iş ilanlarıyla karşılaştıran RAG ve LLM analiz motoru. Halüsinasyonu önlemek için CV'den doğrudan alıntılanmış kanıtlarla skorlama yapıyor."
      },
      {
        step: 5,
        title: "FinAjan Projesi",
        speech: "Ve dördüncüsü 'FinAjan': Yine yerel gizliliğe odaklanan kişisel finans analitiği. Harcama anomalilerini ve tekrarlayan giderleri yakalayan yapay zeka destekli bir asistan."
      },
      {
        step: 6,
        title: "GitHub Özeti",
        speech: "Yani burada boş slaytlar değil; commit edilmiş, test edilmiş, gerçek kodlar ve somut açık kaynak projeler var."
      }
    ],
    5: [
      {
        step: 1,
        title: "Kanalın Amacı (Manifesto)",
        speech: "Peki neden bir YouTube kanalı? Neden kameranın karşısına geçtim?"
      },
      {
        step: 2,
        title: "01 ÖĞREN",
        speech: "Çünkü birinci adım: Derinlemesine öğrenmek. Yapay zekanın sadece yüzeyinde kalmayıp mimarisini kavramak."
      },
      {
        step: 3,
        title: "02 ÜRET",
        speech: "İkinci adım: Öğrendiklerini koda dökmek. Teoriyi elle tutulur ürünlere dönüştürmek."
      },
      {
        step: 4,
        title: "03 PAYLAŞ",
        speech: "Ve üçüncü adım: Paylaşmak. Çünkü bilgi paylaşıldıkça berraklaşır."
      },
      {
        step: 5,
        title: "Birlikte Büyüme Felsefesi",
        speech: "Kısacası: Ben tek başıma bir odada büyümek yerine, sizinle birlikte büyümek istiyorum."
      }
    ],
    6: [
      {
        step: 1,
        title: "Gelecek İçerikler",
        speech: "Peki bu kanala abone olduğunuzda önümüzdeki haftalarda ne göreceksiniz?"
      },
      {
        step: 2,
        title: "A — Gerçek AI Teknolojileri",
        speech: "Bir: Gerçek AI teknolojileri. LLM'ler nasıl yönlendirilir? RAG nasıl optimize edilir? Otonom ajanlar nasıl koordine edilir?"
      },
      {
        step: 3,
        title: "B — Sıfırdan Projeler",
        speech: "İki: Sıfırdan projeler. Boş bir terminalden başlayıp canlıya alınan sistemleri adım adım izleyeceksiniz."
      },
      {
        step: 4,
        title: "C — Build in Public & Hatalar",
        speech: "Üç: 'Build in Public' kültürü. Hataları gizlemeden. Çöken build'ler, 500 hataları ve nasıl çözüldükleri."
      },
      {
        step: 5,
        title: "D — Deneyler & Kariyer",
        speech: "Dört: Yeni çıkan araçların dürüst testleri ve bir AI mühendisi adayının gerçek yolculuğu."
      },
      {
        step: 6,
        title: "Mühendislik Döngüsü",
        speech: "Döngümüz net: Fikir üret, kodla, hata yapmaktan korkma, öğren, inşa et ve herkesle paylaş."
      }
    ],
    7: [
      {
        step: 1,
        title: "Samimiyet Girişi",
        speech: "Burada çok önemli bir parantez açmak istiyorum."
      },
      {
        step: 2,
        title: "Hocalık İddiası Yok",
        speech: "Ben size öğretmenlik yapmaya veya kürsüden akıl vermeye gelmedim."
      },
      {
        step: 3,
        title: "Ben de Öğreniyorum",
        speech: "Ben de öğreniyorum. Ben de her gün yeni bir şey karşısında şaşırıyorum."
      },
      {
        step: 4,
        title: "Yol Arkadaşlığı Sözleşmesi",
        speech: "Ben sizinle aynı masada oturan, aynı terminal hatalarıyla boğuşan bir yol arkadaşıyım. Ben öğrendikçe anlatacağım; siz öğrendikçe birlikte büyüyeceğiz."
      }
    ],
    8: [
      {
        step: 1,
        title: "Büyük Vizyon",
        speech: "Beni motive eden asıl duygu ne biliyor musunuz?"
      },
      {
        step: 2,
        title: "Yolculuğa Bakmak",
        speech: "Bir gün geriye dönüp bu yolculuğa bakmak. Sıfırdan nereye gelindiğini görebilmek."
      },
      {
        step: 3,
        title: "Birlikte Başarmak",
        speech: "Ve en önemlisi... Bunu tek başıma yapmamış olmak. Yorumlarda, GitHub repolarında, projelerde sizinle yan yana yürümüş olmak."
      },
      {
        step: 4,
        title: "Tarih ve İlk Adım",
        speech: "Bu video, o uzun yolculuğun ilk adımı."
      }
    ],
    9: [
      {
        step: 1,
        title: "Doğal Davet (Call to Action)",
        speech: "Burada klasik 'abone olun, çana tıklayın' çağrıları yapmayacağım."
      },
      {
        step: 2,
        title: "Eğer Sen de Öğreniyorsan",
        speech: "Eğer sen de yapay zekayı merak ediyorsan, kod yazıyorsan veya öğrenme sürecindeysen... burada kal."
      },
      {
        step: 3,
        title: "GitHub & Profil Bağlantısı",
        speech: "Projeleri incelemek istersen GitHub adresim: MARRY45. Videonun altındaki linkten repoları klonlayabilir, kodları inceleyebilirsin."
      }
    ],
    10: [
      {
        step: 1,
        title: "Monogram & Kapanış",
        speech: "Ben Oğuz Alşan."
      },
      {
        step: 2,
        title: "Motto: BUILD. LEARN. SHARE.",
        speech: "İnşa et. Öğren. Paylaş."
      },
      {
        step: 3,
        title: "İlk Video Sonu",
        speech: "İlk bölüm burada tamamlandı. Bir sonraki videoda doğrudan kodun başında görüşmek üzere."
      }
    ]
  };

  // State
  let currentSceneIndex = 1;
  let currentStepIndex = 1;
  const totalScenes = 10;
  let isWebcamStreamActive = false;
  let webcamStream = null;

  // DOM Elements
  const sceneElements = document.querySelectorAll('.scene');
  const sceneCounter = document.getElementById('sceneCounter');
  const timelineBar = document.getElementById('timelineBar');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnCamToggle = document.getElementById('btnCamToggle');
  const btnNotesToggle = document.getElementById('btnNotesToggle');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const fsLabel = document.getElementById('fsLabel');
  const speakerDrawer = document.getElementById('speakerDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCues = document.getElementById('drawerCues');
  const webcamFeed = document.getElementById('webcamFeed');
  const webcamZone = document.getElementById('webcamZone');
  const webcamPlaceholder = document.getElementById('webcamPlaceholder');
  const morphWord = document.getElementById('morphWord');

  // --- INITIALIZE TIMELINE PIPS ---
  function initTimeline() {
    timelineBar.innerHTML = '';
    for (let i = 1; i <= totalScenes; i++) {
      const pip = document.createElement('div');
      pip.className = 'timeline-pip' + (i === 1 ? ' active' : '');
      pip.setAttribute('data-scene', i);
      pip.setAttribute('title', `Sahne ${i}`);
      pip.addEventListener('click', () => {
        goToScene(i, 1);
      });
      timelineBar.appendChild(pip);
    }
  }

  // --- SCENE & STEP NAVIGATION ---
  function getSceneElement(sceneNum) {
    return document.getElementById(`scene-${sceneNum}`);
  }

  function getMaxSteps(sceneNum) {
    const sceneEl = getSceneElement(sceneNum);
    if (!sceneEl) return 1;
    const steps = sceneEl.querySelectorAll('.step-item');
    let max = 1;
    steps.forEach(el => {
      const s = parseInt(el.getAttribute('data-step') || '1', 10);
      if (s > max) max = s;
    });
    return max;
  }

  function renderScene(sceneNum, stepNum) {
    currentSceneIndex = sceneNum;
    currentStepIndex = stepNum;

    // Update Counter
    const formattedScene = sceneNum.toString().padStart(2, '0');
    const formattedTotal = totalScenes.toString().padStart(2, '0');
    sceneCounter.textContent = `${formattedScene} / ${formattedTotal}`;

    // Update Active Scene DOM
    sceneElements.forEach(el => {
      const num = parseInt(el.getAttribute('data-scene'), 10);
      if (num === sceneNum) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update Step items inside current scene
    const currentSceneEl = getSceneElement(sceneNum);
    if (currentSceneEl) {
      const stepItems = currentSceneEl.querySelectorAll('.step-item');
      stepItems.forEach(item => {
        const itemStep = parseInt(item.getAttribute('data-step') || '1', 10);
        if (itemStep <= stepNum) {
          item.classList.add('revealed');
        } else {
          item.classList.remove('revealed');
        }
      });
    }

    // Special scene specific behaviors:
    handleSceneSpecialEffects(sceneNum, stepNum);

    // Update Timeline Pips
    const pips = timelineBar.querySelectorAll('.timeline-pip');
    pips.forEach((pip, idx) => {
      const pNum = idx + 1;
      pip.classList.remove('active', 'completed');
      if (pNum === sceneNum) {
        pip.classList.add('active');
      } else if (pNum < sceneNum) {
        pip.classList.add('completed');
      }
    });

    // Update Speaker Cues
    updateSpeakerCues(sceneNum, stepNum);
  }

  function handleSceneSpecialEffects(sceneNum, stepNum) {
    // Scene 3 Morphing Word Animation
    if (sceneNum === 3 && morphWord) {
      const pillars = document.querySelectorAll('#scene-3 .pillar-card');
      pillars.forEach(p => p.classList.remove('active-focus'));

      if (stepNum <= 2) {
        morphWord.textContent = 'ÖĞRENCİ';
      } else if (stepNum === 3) {
        morphWord.textContent = 'ÜRETİCİ';
        pillars[0]?.classList.add('active-focus');
      } else if (stepNum === 4) {
        morphWord.textContent = 'ÖĞRENEN';
        pillars[1]?.classList.add('active-focus');
      } else if (stepNum === 5) {
        morphWord.textContent = 'PAYLAŞAN';
        pillars[2]?.classList.add('active-focus');
      } else if (stepNum >= 6) {
        morphWord.textContent = 'GELİŞEN';
        pillars[3]?.classList.add('active-focus');
      }
    }
  }

  function updateSpeakerCues(sceneNum, stepNum) {
    const cues = SCENE_CUES[sceneNum];
    if (!cues) {
      drawerCues.innerHTML = '<p>Bu sahne için not bulunmuyor.</p>';
      return;
    }

    const currentCue = cues.find(c => c.step === stepNum) || cues[cues.length - 1];

    drawerCues.innerHTML = `
      <div>
        <strong>Sahne ${sceneNum} // Adım ${stepNum}: ${currentCue.title}</strong>
        <div class="drawer-cue-speech">
          "${currentCue.speech}"
        </div>
      </div>
      <div style="margin-top: 10px; font-size: 0.76rem; color: var(--text-muted); font-family: var(--font-mono);">
        Space / Sağ Ok: Sonraki Adım &bull; Geri: Sol Ok &bull; T: Bu Paneli Kapat
      </div>
    `;
  }

  // --- STEP FORWARD / BACKWARD LOGIC ---
  function nextStep() {
    const maxSteps = getMaxSteps(currentSceneIndex);
    if (currentStepIndex < maxSteps) {
      renderScene(currentSceneIndex, currentStepIndex + 1);
    } else {
      // Advance to next scene
      if (currentSceneIndex < totalScenes) {
        renderScene(currentSceneIndex + 1, 1);
      }
    }
  }

  function prevStep() {
    if (currentStepIndex > 1) {
      renderScene(currentSceneIndex, currentStepIndex - 1);
    } else {
      // Go to previous scene's last step
      if (currentSceneIndex > 1) {
        const prevScene = currentSceneIndex - 1;
        const prevMax = getMaxSteps(prevScene);
        renderScene(prevScene, prevMax);
      }
    }
  }

  function goToScene(sceneNum, stepNum = 1) {
    if (sceneNum >= 1 && sceneNum <= totalScenes) {
      renderScene(sceneNum, stepNum);
    }
  }

  // --- WEBCAM HARDWARE TEST INTEGRATION ---
  async function toggleWebcam() {
    const camDot = btnCamToggle.querySelector('.cam-dot');
    if (!isWebcamStreamActive) {
      try {
        webcamStream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
        webcamFeed.srcObject = webcamStream;
        webcamFeed.classList.add('active');
        if (webcamPlaceholder) webcamPlaceholder.style.display = 'none';
        isWebcamStreamActive = true;
        camDot?.classList.add('active');
        btnCamToggle.querySelector('span:last-child').textContent = 'CAM ON';
      } catch (err) {
        console.warn('Webcam access was denied or not available:', err);
        alert('Webcam açılamadı veya kamera izni verilmedi. (Harici OBS kullanıyorsanız önizlemeye gerek yoktur)');
      }
    } else {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
        webcamStream = null;
      }
      webcamFeed.srcObject = null;
      webcamFeed.classList.remove('active');
      if (webcamPlaceholder) webcamPlaceholder.style.display = 'flex';
      isWebcamStreamActive = false;
      camDot?.classList.remove('active');
      btnCamToggle.querySelector('span:last-child').textContent = 'CAM TEST';
    }
  }

  // --- FULLSCREEN TOGGLE ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request failed:', err);
      });
      if (fsLabel) fsLabel.textContent = 'EXIT FS [F]';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (fsLabel) fsLabel.textContent = 'FULLSCREEN [F]';
    }
  }

  // --- GHOST MODE (Toggle webcam bounding borders for clean recording) ---
  function toggleGhostMode() {
    if (webcamZone) {
      webcamZone.classList.toggle('ghost-mode');
    }
  }

  // --- KEYBOARD CONTROLLER ---
  function handleKeyDown(e) {
    // Avoid interfering if active on an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case ' ':
      case 'ArrowRight':
      case 'PageDown':
      case 'Enter':
        e.preventDefault();
        nextStep();
        break;

      case 'ArrowLeft':
      case 'Backspace':
      case 'PageUp':
        e.preventDefault();
        prevStep();
        break;

      case 'Home':
        e.preventDefault();
        goToScene(1, 1);
        break;

      case 'End':
        e.preventDefault();
        goToScene(totalScenes, getMaxSteps(totalScenes));
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 't':
      case 'T':
        e.preventDefault();
        speakerDrawer.classList.toggle('open');
        break;

      case 'w':
      case 'W':
        e.preventDefault();
        toggleWebcam();
        break;

      case 'g':
      case 'G':
        e.preventDefault();
        toggleGhostMode();
        break;

      default:
        // Numeric jump: 1 to 9, and 0 for scene 10
        if (e.key >= '1' && e.key <= '9') {
          const num = parseInt(e.key, 10);
          goToScene(num, 1);
        } else if (e.key === '0') {
          goToScene(10, 1);
        }
        break;
    }
  }

  // --- EVENT LISTENERS ---
  window.addEventListener('keydown', handleKeyDown);

  btnNext?.addEventListener('click', nextStep);
  btnPrev?.addEventListener('click', prevStep);
  btnFullscreen?.addEventListener('click', toggleFullscreen);
  btnCamToggle?.addEventListener('click', toggleWebcam);
  btnNotesToggle?.addEventListener('click', () => {
    speakerDrawer.classList.toggle('open');
  });
  drawerClose?.addEventListener('click', () => {
    speakerDrawer.classList.remove('open');
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && fsLabel) {
      fsLabel.textContent = 'FULLSCREEN [F]';
    }
  });

  // Presentation click to progress (click on scene stage advances beat)
  const sceneStage = document.getElementById('sceneStage');
  sceneStage?.addEventListener('click', (e) => {
    // Avoid advancing if clicking a link or button
    if (e.target.closest('a') || e.target.closest('button')) return;
    nextStep();
  });

  // --- BOOTSTRAP ---
  initTimeline();
  renderScene(1, 1);

})();
