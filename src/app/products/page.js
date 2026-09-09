export const metadata = {
    title: 'Ürün & Teknoloji - Medyes',
}

export default function Products() {
    return (
        <main className="product-page">
            {/* Title Section */}
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0 80px 0',
                backgroundImage: 'url("images/background/5.webp")',
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
                            <h1 className="wow fadeInUp mb-2 text-white">Ürün & Teknoloji</h1>
                            <p className="lead wow fadeInUp text-white" data-wow-delay=".2s" style={{ opacity: 0.9 }}>
                                Yenilikçi Medikal Çözümler
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Abdominal Fizyoterapi Cihazı */}
            <section id="abdominal" className="relative">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Medikal Cihaz</div>
                            <h2 className="split mb-4">Abdominal Fizyoterapi Cihazı</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Abdominal Fizyoterapi Cihazı, kronik kabızlık ve bağırsak tembelliği gibi durumlarda bağırsak hareketlerini desteklemek amacıyla geliştirilen non-invaziv (cerrahi müdahale gerektirmeyen) bir medikal cihazdır.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Cihaz, özel tasarlanmış abdominal manşet ve kontrollü darbe mekanizması sayesinde elle uygulanan abdominal masajı taklit eder. Karın bölgesine ritmik ve kontrollü basınç uygulayarak kalın bağırsağın doğal peristaltik hareketlerini uyarmayı hedefler.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                İlaçsız bir destek tedavi yöntemi sunan sistem; klinik ortamlarda ve ev kullanımına uygun şekilde tasarlanmış olup, sağlık personeline olan bağımlılığı azaltmayı ve tedavi sürecini daha sürdürülebilir hale getirmeyi amaçlar.
                            </p>
                            <a className="btn-main mt-3" href="products-abdominal.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/abdominalcihazi.jpg" className="w-100" alt="Abdominal Fizyoterapi Cihazı" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bacak Kompresyon Cihazı */}
            <section id="bacak" className="relative bg-color-op-2">

                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Rehabilitasyon</div>
                            <h2 className="split mb-4">Bacak Kompresyon Cihazı</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Bacak Kompresyon Cihazı, bacaklarda kan ve lenf dolaşımını desteklemek amacıyla geliştirilmiş, non-invaziv bir medikal drenaj sistemidir.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Cihaz; bacaklara sarılan özel manşetlerin belirli aralıklarla şişirilip indirilmesi prensibiyle çalışır. Aşağıdan yukarı doğru sıralı ve kontrollü basınç uygulayarak kan akışını teşvik eder, durgun lenf sıvısının hareketini destekler ve ödem oluşumunun azaltılmasına yardımcı olur.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Ev ve klinik kullanımına uygun tasarlanan sistem; lenfödem tedavisine destek sunarken, kas gevşemesi ve dolaşım iyileştirmeye yönelik etkili, ilaçsız bir çözüm olarak konumlanmaktadır.
                            </p>
                            <a className="btn-main mt-3" href="products-bacak.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/bacakcihazi.jpg" className="w-100" alt="Bacak Kompresyon Cihazı" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Göğüs Terapi Cihazı */}
            <section id="gogus" className="relative">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Solunum Tedavisi</div>
                            <h2 className="split mb-4">HFCWO Göğüs Terapi Cihazı</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Göğüs Terapi Cihazı, akciğerlerde biriken sekresyonun (balgamın) mobilizasyonunu desteklemek amacıyla geliştirilmiş, non-invaziv bir solunum terapisi sistemidir.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Cihaz, göğüs duvarına kontrollü ve ritmik osilasyon (titreşim) uygulayarak hava yollarındaki mukusun gevşemesine ve daha kolay atılmasına yardımcı olur. Yüksek frekanslı titreşim teknolojisi sayesinde geleneksel göğüs fizyoterapisine destek sunar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Klinik ve ev kullanımına uygun tasarlanan sistem; kistik fibrozis, KOAH, bronşektazi ve yoğun sekresyon problemi yaşayan hastalarda solunum konforunu artırmayı hedefleyen destekleyici bir terapi çözümüdür.
                            </p>
                            <a className="btn-main mt-3" href="products-gogus.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/goguscihazi.jpg" className="w-100" alt="HFCWO Göğüs Terapi Cihazı" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Giyilebilir Holter Yelek */}
            <section id="holter" className="relative bg-color-op-2">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Kardiyoloji</div>
                            <h2 className="split mb-4">Giyilebilir Holter Yelek</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Giyilebilir Holter Yelek, kalbin elektriksel aktivitesini uzun süreli ve konforlu biçimde izlemek amacıyla tasarlanmış, entegre sensör yapısına sahip taşınabilir bir EKG monitörizasyon sistemidir.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Yelek formundaki ergonomik tasarımı sayesinde elektrotların doğru pozisyonda ve stabil şekilde kalmasını sağlar; bu da daha net ve kesintisiz veri kaydı elde edilmesine imkân tanır. Günlük yaşam aktiviteleri sırasında rahat kullanım sunarak 24–72 saat ve üzeri ritim takibini mümkün kılar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Toplanan veriler yazılım altyapısı üzerinden analiz edilerek aritmi, taşikardi, bradikardi ve diğer ritim bozukluklarının değerlendirilmesine destek olur. Klinik ve uzaktan hasta izleme süreçlerinde kullanılabilen bu sistem, kardiyak takipte dijital ve kullanıcı dostu bir çözüm sunar.
                            </p>
                            <a className="btn-main mt-3" href="products-holter.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/holtercihazi.jpg" className="w-100" alt="Giyilebilir Holter Yelek" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yapay Zeka Destekli EKG Yelek */}
            <section id="ekg-ai" className="relative">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Yapay Zeka</div>
                            <h2 className="split mb-4">Yapay Zeka Destekli EKG Yelek</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Yapay Zekâ Destekli EKG Yelek, kalbin elektriksel aktivitesini uzun süreli ve yüksek doğrulukla izlemek üzere geliştirilmiş, entegre sensör sistemine sahip akıllı bir kardiyak takip çözümüdür.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Yelek formundaki ergonomik tasarımı sayesinde günlük yaşam sırasında konforlu kullanım sunarken, çoklu elektrot yapısı ile kesintisiz ve kaliteli EKG verisi toplar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Toplanan veriler, yapay zekâ algoritmaları ile analiz edilerek ritim bozuklukları, taşikardi, bradikardi ve olası kardiyak anomalilerin erken tespitine destek olur. Klinik kullanımın yanı sıra uzaktan hasta izleme altyapılarına entegre edilebilen sistem, dijital sağlık ekosistemine uyumlu, veri odaklı bir çözüm sunar.
                            </p>
                            <a className="btn-main mt-3" href="products-ekg-ai.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/ekgcihazi.jpg" className="w-100" alt="Yapay Zeka Destekli EKG Yelek" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doktor ve Hasta Paneli */}
            <section id="panel" className="relative bg-color-op-2">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Dijital Platform</div>
                            <h2 className="split mb-4">Doktor ve Hasta Paneli</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Doktor ve Hasta Paneli, geliştirilen medikal cihazlardan elde edilen verilerin güvenli şekilde görüntülenmesi, analiz edilmesi ve yönetilmesi için tasarlanmış dijital sağlık yazılım altyapısıdır.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Hasta paneli; kişisel sağlık verilerinin, ölçüm sonuçlarının ve takip süreçlerinin kullanıcı dostu bir arayüz üzerinden izlenmesini sağlar. Doktor paneli ise detaylı veri analizi, geçmiş kayıt karşılaştırmaları ve klinik değerlendirme imkânı sunar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Bulut tabanlı ve güvenli veri mimarisi ile çalışan sistem, uzaktan hasta takibini destekleyen, cihaz–yazılım entegrasyonunu sağlayan bütünleşik bir dijital sağlık çözümüdür.
                            </p>
                            <a className="btn-main mt-3" href="products-panel.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/dijitalsaglik.jpeg" className="w-100" alt="Doktor ve Hasta Paneli" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobil Uygulama */}
            <section id="mobil" className="relative">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Mobil Sağlık</div>
                            <h2 className="split mb-4">Mobil Uygulama</h2>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Medyes medikal cihazlarıyla entegre çalışan ve kullanıcıların sağlık verilerini anlık olarak takip edebilmesini sağlayan dijital sağlık platformudur.
                            </p>
                            <p className="wow fadeInUp" style={{ color: '#444' }}>
                                Uygulama üzerinden ölçüm sonuçları görüntülenebilir, geçmiş veriler analiz edilebilir ve tedavi süreci düzenli olarak izlenebilir. Kullanıcı dostu arayüzü sayesinde hasta deneyimini kolaylaştırlaştırırken, veri güvenliği altyapısı ile bilgilerin korunmasını sağlar.
                            </p>
                            <p className="wow fadeInUp leading-relaxed" style={{ color: '#444' }}>
                                Cihazlardan elde edilen verilerin bulut tabanlı sistemle senkronize edilmesi sayesinde mobil uygulama, uzaktan izleme ve doktor-hasta iletişimini destekleyen bütünleşik bir dijital sağlık çözümü sunar.
                            </p>
                            <a className="btn-main mt-3" href="products-mobil.html">Teknik Detayları İncele</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="relative rounded-1 overflow-hidden shadow-soft wow zoomIn">
                                <img src="images/mobiluygulama.jpg" className="w-100" alt="Mobil Uygulama" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
