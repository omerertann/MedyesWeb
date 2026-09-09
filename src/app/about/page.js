
export const metadata = {
    title: 'Kurumsal - Medyes',
}

export default function Corporate() {
    return (
        <main>
            {/* Title Section */}
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0 80px 0',
                backgroundImage: 'url("images/background/4.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="absolute w-100 h-100 top-0 left-0" style={{
                    background: 'linear-gradient(90deg, rgba(1, 40, 60, 0.85) 0%, rgba(0, 153, 216, 0.6) 100%)',
                    zIndex: 1
                }}></div>
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-md-12 text-center text-white">
                            <h1 className="wow fadeInUp mb-2 text-white">Kurumsal</h1>
                            <p className="lead wow fadeInUp text-white" data-wow-delay=".2s" style={{ opacity: 0.9 }}>Yenilikçi Sağlık Teknolojileri</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hakkında Section */}
            <section id="hakkinda" className="relative">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-12">

                            <h3 className="wow fadeInUp mb-4" style={{ color: '#000000', fontWeight: 'bold' }}>Medyes Hakkında</h3>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Medyes; yapay zekâ, biyomedikal mühendislik and dijital sağlık altyapılarını bir araya getirerek yenilikçi, ölçeklenebilir ve klinik olarak doğrulanmış medikal teknolojiler geliştiriren bir sağlık teknolojileri girişimidir.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Sağlık sektöründeki yapısal ihtiyaçları analiz eder, klinik gereksinimlerden doğan problemleri mühendislik yaklaşımıyla çözüme dönüştürür. Donanım, yazılım ve veri katmanını entegre eden ürün mimarisi sayesinde yalnızca cihaz geliştirmez; veri üreten, uzaktan izlenebilen ve dijital sağlık ekosistemine entegre olabilen teknolojiler tasarlar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                TÜBİTAK destekli Ar-Ge projeleri ve kamu tarafından doğrulanmış yatırım altyapısı ile güçlenen Medyes; üniversiteler, klinik uzmanlar ve mühendislik ekipleriyle birlikte çalışarak bilimsel temelli ve sürdürülebilir çözümler üretir.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Ar-Ge’den prototiplemeye, üretimden ticarileşmeye kadar tüm süreçleri entegre biçimde yöneten Medyes; yerli teknoloji gücünü küresel ölçekte rekabetçi sağlık çözümlerine dönüştürmeyi hedeflemektedir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vizyon & Misyon Section */}
            <section id="vizyon-misyon" className="relative bg-color-op-2">
                <div className="container relative z-2">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="p-4 rounded-1 shadow-soft bg-white">
                                <h3 className="mb-3" style={{ color: '#000000' }}>Vizyon</h3>
                                <p style={{ color: '#444' }}>
                                    Sağlık teknolojilerinde yerli mühendislik gücünü yapay zekâ ve dijital altyapılarla birleştirerek, küresel ölçekte rekabetçi ve ölçeklenebilir medikal çözümler geliştiren öncü bir HealthTech markası olmak.
                                </p>
                                <p style={{ color: '#444' }}>
                                    Bilimsel doğruluğu, teknolojik yeniliği ve erişilebilirliği aynı potada buluşturarak geleceğin sağlık sistemlerine yön vermek.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="p-4 rounded-1 shadow-soft bg-white">
                                <h3 className="mb-3" style={{ color: '#000000' }}>Misyon</h3>
                                <p style={{ color: '#444' }}>
                                    Klinik ihtiyaçlardan doğan problemleri; biyomedikal mühendislik, yazılım ve veri odaklı yaklaşımlarla çözerek güvenilir, sürdürülebilir ve yüksek katma değerli medikal teknolojiler geliştirmek.
                                </p>
                                <p style={{ color: '#444' }}>
                                    Ar-Ge’den üretime, validasyondan ticarileşmeye kadar tüm süreçleri entegre biçimde yöneterek sağlık hizmetlerinin daha erişilebilir, ölçülebilir ve veriye dayalı hale gelmesine katkı sağlamak.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ekibimiz Section */}
            <section id="ekibimiz" className="relative pt-80 pb-80" style={{ backgroundColor: '#f0f9ff' }}>
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">

                            <h2 className="wow fadeInUp mb-4">Ekibimiz</h2>
                            <p className="wow fadeInUp lead" style={{ color: '#555' }}>
                                Medyes ekibi; biyomedikal mühendislik, yazılım geliştirme, gömülü sistemler, yapay zekâ, üretim teknolojileri ve klinik danışmanlık alanlarında uzman profesyonellerden oluşmaktadır.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#555' }}>
                                Ürün geliştirme süreçlerimiz; mühendisler, akademisyenler ve klinik uzmanların birlikte çalıştığı çok disiplinli bir yapı içerisinde yürütülmektedir. Bu yaklaşım sayesinde geliştirilen her teknoloji, hem teknik hem de klinik açıdan doğrulanmış bir temele dayanmaktadır.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#555' }}>
                                Ar-Ge odaklı çalışma kültürümüz; fikir aşamasından prototipe, test süreçlerinden ticarileşmeye kadar uçtan uca entegre bir model üzerine kuruludur. Ekibimiz yalnızca ürün geliştirme yetkinliğine değil, aynı zamanda ölçeklenebilir üretim, kalite yönetimi ve dijital sağlık altyapıları konusunda da güçlü bir deneyime sahiptir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Katalog Section */}
            <section id="katalog" className="relative pb-100">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Dijital Katalog</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Haberlerden Teknik Detaylara Medyes</h2>
                            <p className="wow fadeInUp">Tüm ürünlerimizi, akademik kadromuzu ve teknolojik başarılarımızı aşağıdaki dijital kataloğumuzdan inceleyebilirsiniz.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="p-5 shadow-soft rounded-1 border">
                                <i className="icofont-file-pdf fs-60 id-color mb-4"></i>
                                <h3>Ürün Kataloğumuzu İndirin</h3>
                                <p style={{ color: '#444' }}>Tüm ürünlerimizin detaylı teknik özelliklerine, patent bilgilerine ve klinik çalışma sonuçlarına kataloğumuzdan ulaşabilirsiniz.</p>
                                <div className="spacer-20"></div>
                                <a className="btn-main fx-slide" href="./files/medyeskatalog.pdf" target="_blank">
                                    <span>Kataloğu Görüntüle / İndir (PDF)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yatırım ve Stratejik İş Birliği Çağrısı Section */}
            <section id="yatirim-cagrisi" className="relative bg-color-op-2">
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">

                            <h2 className="wow fadeInUp mb-4">Yatırım ve Stratejik İş Birliği Çağrısı</h2>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Kurumumuz tarafından geliştirilen yenilikçi proje ve yatırımların sürdürülebilir büyüme modeli ile hayata geçirilmesi amacıyla; kamu, özel sektör, akademi ve finans paydaşlarını kapsayan stratejik iş birliği süreci başlatılmıştır. Bu çağrı; yalnızca finansal yatırım değil, bilgi, tecrübe, teknoloji ve pazar gücünün bir araya gelmesini hedefleyen bütüncül bir ortaklık modelini ifade etmektedir.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Amaç; yüksek katma değerli üretim, ticarileşme kapasitesi ve uluslararası rekabet gücü oluşturacak projeleri, güçlü paydaş yapısı ile ölçeklenebilir hale getirmektir.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Uzun vadeli değer üretimine inanan, ortak vizyon ve sürdürülebilir büyüme yaklaşımını benimseyen tüm stratejik paydaşları iş birliğine davet ediyoruz.
                            </p>
                            <div className="spacer-20"></div>
                            <a className="btn-main fx-slide wow fadeInUp" href="contact.html">
                                <span>Detaylı Bilgi İçin İletişime Geçin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
