"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Slider Initialization Logic
    const initSliders = () => {
      if (typeof window.jQuery !== 'undefined' && window.jQuery.fn.owlCarousel) {

        // News Slider
        var $newsSlider = window.jQuery('#news-carousel');
        if ($newsSlider.length) {
          $newsSlider.owlCarousel('destroy');
          $newsSlider.owlCarousel({
            center: false,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
              1000: { items: 3 },
              600: { items: 2 },
              0: { items: 1 }
            }
          });
        }

        // Hero Slider
        var $heroSlider = window.jQuery('#hero-carousel');
        if ($heroSlider.length) {
          $heroSlider.owlCarousel('destroy');
          $heroSlider.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed: 800,
            animateOut: 'fadeOut',
            mouseDrag: false,
            touchDrag: false
          });
        }

      } else {
        setTimeout(initSliders, 100);
      }
    };

    initSliders();
  }, []);

  return (
    <main>
      <div id="top"></div>

      {/* Hero Section with Slider */}
      <section id="de-hero" className="no-top no-bottom overflow-hidden position-relative" style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 0 100px 0'
      }}>
        {/* Background Carousel */}
        <div id="hero-carousel" className="owl-carousel owl-theme absolute w-100 h-100 top-0 left-0" style={{ zIndex: 0 }}>
          <div className="item" style={{
            backgroundImage: 'url("images/teknoloji1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 0%',
            height: '90vh',
            minHeight: '90vh'
          }}></div>
          <div className="item" style={{
            backgroundImage: 'url("images/teknoloji2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            minHeight: '90vh'
          }}></div>
          <div className="item" style={{
            backgroundImage: 'url("images/teknoloji3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            minHeight: '90vh'
          }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute w-100 h-100 top-0 left-0" style={{
          background: 'linear-gradient(90deg, rgba(1, 40, 60, 0.9) 0%, rgba(0, 153, 216, 0.3) 100%)',
          zIndex: 1
        }}></div>

        <div className="container relative z-2">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4 text-white display-3 fw-bold wow fadeInUp" data-wow-delay=".2s" style={{ lineHeight: '1.1' }}>
                Sağlık Teknolojilerinde <br />
                <span style={{ color: '#0099d8' }}>Yeni Nesil</span> Büyüme
              </h1>
              <p className="lead text-white mb-5 wow fadeInUp" data-wow-delay=".4s" style={{ opacity: '0.9', fontSize: '20px', maxWidth: '650px' }}>
                Medyes; klinik ihtiyaçlardan doğan problemleri biyomedikal mühendislik ve yazılım odaklı yaklaşımlarla çözer.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".6s">
                <a href="products.html" className="btn-main fx-slide" style={{ padding: '15px 35px', borderRadius: '30px' }}>
                  <span>Çözümlerimizi Keşfedin</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative pt-80 pb-80">
        <div className="container relative z-2">
          <div className="text-center mb-5">
            <h2 className="wow fadeInUp" style={{ color: '#2A485E' }}>Ürün & Teknoloji</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Product Card 1 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <a href="products-abdominal.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/abdominalv2.jpg" className="w-100 h-100 object-fit-cover" alt="Abdominal" />
                  </div>
                  <h4 className="mb-2">Abdominal Fizyoterapi</h4>
                  <p className="small text-muted mb-0">Kronik kabızlık ve bağırsak hareketleri için non-invaziv çözüm.</p>
                </div>
              </a>
            </div>

            {/* Product Card 2 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".1s">
              <a href="products-bacak.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/bacakv2.jpg" className="w-100 h-100 object-fit-cover" alt="Bacak Kompresyon" />
                  </div>
                  <h4 className="mb-2">Bacak Kompresyon</h4>
                  <p className="small text-muted mb-0">Kan ve lenf dolaşımını destekleyen non-invaziv medikal drenaj sistemi.</p>
                </div>
              </a>
            </div>

            {/* Product Card 3 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <a href="products-gogus.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/gogusterapiv2.jpg" className="w-100 h-100 object-fit-cover" alt="HFCWO" />
                  </div>
                  <h4 className="mb-2">HFCWO Göğüs Terapi</h4>
                  <p className="small text-muted mb-0">Yüksek frekanslı göğüs duvarı osilasyonu ile etkin mukus temizliği.</p>
                </div>
              </a>
            </div>

            {/* Product Card 4 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <a href="products-holter.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/giyilebilirholter.jpg" className="w-100 h-100 object-fit-cover" alt="Holter" />
                  </div>
                  <h4 className="mb-2">Giyilebilir Holter Yelek</h4>
                  <p className="small text-muted mb-0">Uzun süreli ve konforlu kardiyak izleme çözümü.</p>
                </div>
              </a>
            </div>

            {/* Product Card 5 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".1s">
              <a href="products-ekg-ai.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/ekgv2.jpg" className="w-100 h-100 object-fit-cover" alt="EKG Yelek" />
                  </div>
                  <h4 className="mb-2">AI Destekli EKG Yelek</h4>
                  <p className="small text-muted mb-0">Yapay zeka algoritmaları ile desteklenen ileri seviye EKG analizi.</p>
                </div>
              </a>
            </div>

            {/* Product Card 6 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <a href="products-panel.html" className="text-decoration-none text-dark d-block h-100">
                <div className="p-3 shadow-soft rounded-3 h-100 hover-scale bg-white">
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <img src="images/dijitalv2.jpg" className="w-100 h-100 object-fit-cover" alt="Doktor Paneli" />
                  </div>
                  <h4 className="mb-2">Dijital Sağlık Platformu</h4>
                  <p className="small text-muted mb-0">Uzaktan izleme ve yönetim için kapsamlı web paneli.</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* News Slider Section */}
      <section className="bg-light pt-80 pb-80 position-relative">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="mb-0">Haberler & Duyurular</h2>
            </div>
          </div>

          <div className="position-relative px-md-5">
            <div className="owl-custom-nav d-none d-md-block">
              <span className="news-prev-btn" onClick={() => window.jQuery && window.jQuery('#news-carousel').trigger('prev.owl.carousel')} style={{
                position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, cursor: 'pointer', background: '#0199d8', width: '45px', height: '45px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(1, 153, 216, 0.3)', transition: 'all 0.3s ease'
              }}>
                <i className="fa fa-chevron-left text-white" style={{ fontSize: '16px' }}></i>
              </span>
              <span className="news-next-btn" onClick={() => window.jQuery && window.jQuery('#news-carousel').trigger('next.owl.carousel')} style={{
                position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)',
                zIndex: 10, cursor: 'pointer', background: '#0199d8', width: '45px', height: '45px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(1, 153, 216, 0.3)', transition: 'all 0.3s ease'
              }}>
                <i className="fa fa-chevron-right text-white" style={{ fontSize: '16px' }}></i>
              </span>
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `
              #news-carousel .owl-nav { display: none !important; }
              #news-carousel .item { padding: 10px; }
            ` }} />

            <div id="news-carousel" className="owl-carousel owl-3-cols">
              <div className="item">
                <a href="https://www.turkiyegazetesi.com.tr/saglik/koronavirus-hastalari-milli-cihaz-ile-daha-kolay-nefes-alacak-763578" target="_blank" className="text-decoration-none">
                  <div className="blog-item shadow-soft rounded-3 h-100 hover-scale transition-all bg-white">
                    <div style={{ height: '220px' }}>
                      <img src="images/korona.png" className="w-100 h-100 object-fit-cover" alt="Haber 1" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-dark mb-4" style={{ minHeight: '60px', fontSize: '18px', fontWeight: '600' }}>
                        Tamamen milli! Koronavirüs hastalarına umut oldu
                      </h4>
                      <hr className="opacity-10 mb-3" />
                      <div className="text-end">
                        <span className="fw-bold text-uppercase" style={{ color: '#000000', fontSize: '13px' }}>DEVAMINI OKU</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="https://www.turkpatent.gov.tr/haberler/turksmd-ile-bilisim-vadisi-arasinda-is-birligi-toreni" target="_blank" className="text-decoration-none">
                  <div className="blog-item shadow-soft rounded-3 h-100 hover-scale transition-all bg-white">
                    <div style={{ height: '220px' }}>
                      <img src="images/patent.png" className="w-100 h-100 object-fit-cover" alt="Haber 2" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-dark mb-4" style={{ minHeight: '60px', fontSize: '18px', fontWeight: '600' }}>
                        TÜRKSMD ile Bilişim Vadisi Arasında İş Birliği Töreni
                      </h4>
                      <hr className="opacity-10 mb-3" />
                      <div className="text-end">
                        <span className="fw-bold text-uppercase" style={{ color: '#000000', fontSize: '13px' }}>DEVAMINI OKU</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="https://www.haberturk.com/erzurum-haberleri/84307222-korona-virus-hastalari-milli-cihaz-ile-daha-kolay-nefes-alacak447-proje-arasinda-ilk-10a" target="_blank" className="text-decoration-none">
                  <div className="blog-item shadow-soft rounded-3 h-100 hover-scale transition-all bg-white">
                    <div style={{ height: '220px' }}>
                      <img src="images/nefes.png" className="w-100 h-100 object-fit-cover" alt="Haber 3" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-dark mb-4" style={{ minHeight: '60px', fontSize: '18px', fontWeight: '600' }}>
                        Koronavirüs hastaları milli cihaz ile daha kolay nefes alacak
                      </h4>
                      <hr className="opacity-10 mb-3" />
                      <div className="text-end">
                        <span className="fw-bold text-uppercase" style={{ color: '#000000', fontSize: '13px' }}>DEVAMINI OKU</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="item">
                <a href="https://www.medikalplus.com/e-dergi/" target="_blank" className="text-decoration-none">
                  <div className="blog-item shadow-soft rounded-3 h-100 hover-scale transition-all bg-white">
                    <div style={{ height: '220px' }}>
                      <img src="images/medikal.png" className="w-100 h-100 object-fit-cover" alt="Haber 4" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-dark mb-4" style={{ minHeight: '60px', fontSize: '18px', fontWeight: '600' }}>
                        Medikal Plus E-Dergi Sayısında Yer Aldık
                      </h4>
                      <hr className="opacity-10 mb-3" />
                      <div className="text-end">
                        <span className="fw-bold text-uppercase" style={{ color: '#000000', fontSize: '13px' }}>DEVAMINI OKU</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Partners - Animations Removed */}
      <section className="pt-80 pb-80">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-2">Sektör İşbirlikleri</h2>
            <p className="lead" style={{ color: '#666' }}>Güçlü akademik ve sektörel ortaklarımızla büyüyoruz.</p>
          </div>
          <div className="row g-4 justify-content-center text-center align-items-center">

            <div className="col-6 col-md-3">
              <a href="https://atauni.edu.tr/" target="_blank" className="d-block h-100 text-decoration-none">
                <div className="p-4 border rounded-3 h-100 d-flex align-items-center justify-content-center bg-light hover-scale shadow-sm transition-all" style={{ minHeight: '140px' }}>
                  <img src="images/ataturkuni.png" alt="Atatürk Üniversitesi" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </a>
            </div>

            <div className="col-6 col-md-3">
              <a href="https://subu.edu.tr/" target="_blank" className="d-block h-100 text-decoration-none">
                <div className="p-4 border rounded-3 h-100 d-flex align-items-center justify-content-center bg-light hover-scale shadow-sm transition-all" style={{ minHeight: '140px' }}>
                  <img src="images/sakaryauni.jpg" alt="Sakarya Uygulamalı Bilimler Üniversitesi" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </a>
            </div>

            <div className="col-6 col-md-3">
              <a href="https://bilisimvadisi.com.tr/" target="_blank" className="d-block h-100 text-decoration-none">
                <div className="p-4 border rounded-3 h-100 d-flex align-items-center justify-content-center bg-light hover-scale shadow-sm transition-all" style={{ minHeight: '140px' }}>
                  <img src="images/bilisimvadisi.png" alt="Bilişim Vadisi" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </a>
            </div>

            <div className="col-6 col-md-3">
              <a href="https://www.atateknokent.com.tr/" target="_blank" className="d-block h-100 text-decoration-none">
                <div className="p-4 border rounded-3 h-100 d-flex align-items-center justify-content-center bg-light hover-scale shadow-sm transition-all" style={{ minHeight: '140px' }}>
                  <img src="images/teknokent.png" alt="Ata Teknokent" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links (STATIC GRID) */}
      <section className="relative bg-color-op-2 pt-50 pb-50">
        <div className="container relative z-2">
          <div className="text-center mb-4">
            <h2 className="mb-0">Faydalı Linkler</h2>
          </div>
          <div className="row g-4 justify-content-center text-center align-items-center">
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://tubitak.gov.tr/tr" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/tubitak1.jpg" alt="TÜBİTAK" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://www.tuseb.gov.tr/" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/tuseb.png" alt="TÜSEB" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://saglik.gov.tr/" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/tcsaglikbakanligi.jpg" alt="T.C. SAĞLIK BAKANLIĞI" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://www.kosgeb.gov.tr/" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/kosgeb.jpg" alt="KOSGEB" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://sbu.edu.tr/arastirma/ar-ge-birimleri/teknopol-istanbul/" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/sbu.png" alt="SBÜ TEKNOPARK" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <a href="https://kocaelism.saglik.gov.tr/" target="_blank" className="d-block p-3 bg-white shadow-sm rounded-3 h-100 d-flex align-items-center justify-content-center text-decoration-none hover-up">
                <img src="images/kocaeli.png" alt="KOCAELİ SAĞLIK İL MÜDÜRLÜĞÜ" style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }} />
              </a>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
