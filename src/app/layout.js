import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Medyes - Sağlık Teknolojileri',
  description: 'Medyes Sağlık Teknolojileri Web Sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="images/favicon-m.svg" type="image/svg+xml" sizes="any" />

        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/coloring.css" rel="stylesheet" type="text/css" />
        <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
      </head>
      <body suppressHydrationWarning>
        <div id="wrapper" suppressHydrationWarning>
          <a href="#" id="back-to-top"></a>


          <header className="transparent header-light header-float" suppressHydrationWarning>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="header-inner">
                    <div className="de-flex">
                      <div className="de-flex-col">

                        <div id="logo" suppressHydrationWarning>
                          <a href="index.html">
                            <img className="logo-main" src="images/medyes-logo.png" alt="Medyes Logo" style={{ height: '50px', imageRendering: 'high-quality' }} />
                            <img className="logo-scroll" src="images/medyes-logo.png" alt="Medyes Logo" style={{ height: '50px', imageRendering: 'high-quality' }} />
                            <img className="logo-mobile" src="images/medyes-logo.png" alt="Medyes Logo" style={{ height: '50px', imageRendering: 'high-quality' }} />
                          </a>
                        </div>

                      </div>

                      <div className="de-flex-col">
                        <div className="de-flex-col header-col-mid">
                          <ul id="mainmenu" suppressHydrationWarning>
                            <li><a className="menu-item" href="index.html">Anasayfa</a></li>
                            <li><a className="menu-item" href="about.html">Kurumsal</a>
                              <ul>
                                <li><a href="about.html#hakkinda">Hakkında</a></li>
                                <li><a href="about.html#vizyon-misyon">Vizyon & Misyon</a></li>
                                <li><a href="about.html#ekibimiz">Ekibimiz</a></li>
                                <li><a href="about.html#katalog">Katalog</a></li>
                                <li><a href="about.html#yatirim-cagrisi">Yatırım ve Stratejik İş Birliği Çağrısı</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-item" href="products.html">Ürün & Teknoloji</a>
                              <ul>
                                <li><a href="products.html#abdominal">Abdominal Fizyoterapi</a></li>
                                <li><a href="products.html#bacak">Bacak Kompresyon</a></li>
                                <li><a href="products.html#gogus">HFCWO Göğüs Terapi</a></li>
                                <li><a href="products.html#holter">Giyilebilir Holter Yelek</a></li>
                                <li><a href="products.html#ekg-ai">AI Destekli EKG Yelek</a></li>
                                <li><a href="products.html#panel">Dijital Sağlık Platformu</a></li>
                                <li><a href="products.html#mobil">Mobil Uygulama</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-item" href="r-and-d.html">Ar-Ge</a>
                              <ul>
                                <li><a href="r-and-d.html#hfcwo-project">HFCWO Göğüs Terapi</a></li>
                                <li><a href="r-and-d.html#holter-project">Giyilebilir Holter</a></li>
                                <li><a href="r-and-d.html#abdominal-project">Abdominal Fizyoterapi</a></li>
                                <li><a href="r-and-d.html#akciger-project">Akciğer Oskültasyon</a></li>
                                <li><a href="r-and-d.html#pneumatic-project">Pnömatik Sistemler</a></li>
                                <li><a href="r-and-d.html#ekg-ai-project">AI EKG Holter</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-item" href="info-center.html">Bilgi Merkezi</a>
                              <ul>
                                <li><a href="info-center.html#tubitak">Blog</a></li>
                                <li><a href="info-center.html#sozluk">Sözlük</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-item" href="contact.html">İletişim</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="de-flex-col">
                        <a className="btn-main fx-slide w-100" href="contact.html"><span>İletişime Geç</span></a>
                        <div className="menu_side_area">
                          <span id="menu-btn"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>


          {children}


          <footer className="section-dark">
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4 col-sm-6">
                  <img src="images/medyes-logo.png" className="logo-footer" alt="Medyes Logo" style={{ height: '50px', imageRendering: 'high-quality' }} />
                  <div className="spacer-20"></div>
                  <p style={{ color: '#ccc' }}>
                    Medyes; yapay zekâ, biyomedikal mühendislik ve dijital sağlık altyapılarını bir araya getirerek yenilikçi, ölçeklenebilir ve klinik olarak doğrulanmış medikal teknolojiler geliştiren bir sağlık teknolojileri girişimidir.
                  </p>
                  <div className="social-icons mb-sm-30">
                    <a href="https://wa.me/902626445850" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/medyesst" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@medyes3343" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="widget">
                        <h5><a href="products.html" className="text-white text-decoration-none">Ürün Grupları</a></h5>
                        <ul>
                          <li><a href="products-abdominal.html">Abdominal Fizyoterapi</a></li>
                          <li><a href="products-bacak.html">Bacak Kompresyon</a></li>
                          <li><a href="products-gogus.html">HFCWO Göğüs Terapi</a></li>
                          <li><a href="products-holter.html">Giyilebilir Holter Yelek</a></li>
                          <li><a href="products-ekg-ai.html">AI Destekli EKG Yelek</a></li>
                          <li><a href="products-panel.html">Dijital Sağlık Platformu</a></li>
                          <li><a href="products-mobil.html">Mobil Uygulama</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="widget">
                        <h5><a href="about.html" className="text-white text-decoration-none">Hakkımızda</a></h5>
                        <ul>
                          <li><a href="index.html">Anasayfa</a></li>
                          <li><a href="products.html">Ürün & Teknoloji</a></li>
                          <li><a href="about.html#ekibimiz">Ekibimiz</a></li>
                          <li><a href="info-center.html">Bilgi Merkezi</a></li>
                          <li><a href="contact.html">İletişim</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                  <div className="widget">
                    <h5><a href="contact.html" className="text-white text-decoration-none">Bize Ulaşın</a></h5>
                    <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color"></i>Merkez</div>
                    <div style={{ color: '#ccc' }}>Gaziler Mh. İbrahim Ağa Cd. No:239 Gebze / KOCAELİ</div>
                    <div className="spacer-10"></div>
                    <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color"></i>Ar-Ge Ofis</div>
                    <div style={{ color: '#ccc' }}>Bilişim Vadisi Kule K:10 Muallimköy-Gebze / KOCAELİ</div>
                    <div className="spacer-20"></div>
                    <div className="fw-bold text-white"><i className="icofont-phone me-2 id-color"></i>İletişim</div>
                    <div style={{ color: '#ccc' }}>+90 262 644 58 50</div>
                    <div className="spacer-20"></div>
                    <div className="fw-bold text-white"><i className="icofont-envelope me-2 id-color"></i>E-Posta</div>
                    <div style={{ color: '#ccc' }}>bilgi@medyes.com.tr</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="subfooter">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="de-flex">
                      <div className="de-flex-col">
                        Copyright 2026 - Medyes Sağlık Teknolojileri
                      </div>
                      <ul className="menu-simple">
                        <li><a href="contact.html">Şartlar & Koşullar</a></li>
                        <li><a href="contact.html">Gizlilik Politikası</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>



          <Script src="js/plugins.js" strategy="afterInteractive" />
          <Script src="js/designesia.js" strategy="afterInteractive" />
          <Script id="smooth-scroll-handler" strategy="afterInteractive">
            {`
              document.addEventListener('click', function (e) {
                const link = e.target.closest('a');
                if (!link) return;

                const href = link.getAttribute('href');
                if (!href || !href.includes('#')) return;

                const parts = href.split('#');
                const path = parts[0];
                const hash = parts[1];
                if (!hash) return;

                const currentPath = window.location.pathname;
                const pageName = currentPath.split('/').pop() || 'index.html';
                
                const normalizedPage = (pageName === 'index.html' || pageName === '') ? 'index' : pageName.replace('.html', '');
                const normalizedPath = (path === 'index.html' || path === '') ? 'index' : path.replace('.html', '');

                if (path !== '' && normalizedPath === normalizedPage) {
                  const target = document.getElementById(hash);
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, '#' + hash);
                  }
                }
              });
            `}
          </Script>
        </div>
      </body>
    </html>
  )
}
