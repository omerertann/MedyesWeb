
export const metadata = {
    title: 'Mobil Uygulama - Teknik Detaylar',
}

export default function ProductDetail() {
    return (
        <main>

            <section className="relative overflow-hidden section-dark" style={{
                padding: '200px 0 80px 0',
                background: 'linear-gradient(90deg, rgba(1, 40, 60, 1) 0%, rgba(0, 153, 216, 1) 100%)'
            }}>
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center text-white">
                            <h1 className="wow fadeInUp mb-2">Mobil Uygulama</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Sağlık verilerinizin cebinizden takibini sağlayan entegre mobil çözüm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/mobiluygulama.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="Mobil Uygulama" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>Mobil Uygulama</h3>
                            <p>Medyes Mobil Uygulaması, tüm Medyes akıllı cihazlarıyla Bluetooth üzerinden entegre olarak çalışır. Hastaların kendi ölçümlerini anlık olarak görüntülemesine, tedavi süreçlerini yönetmesine ve sağlık verilerini güvenle saklamasına olanak tanır.</p>
                            <p>Android ve iOS platformları için geliştirilen kullanıcı dostu arayüzü sayesinde, teknolojiye uzak kullanıcılar bile rahatlıkla kullanabilir. İlaç hatırlatmaları ve tedavi planı takibi gibi ek özellikler sunar.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Detaylar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Platform Desteği:</strong> iOS ve Android</li>
                                    <li><strong>Bağlantı:</strong> Bluetooth Low Energy (BLE)</li>
                                    <li><strong>Senkronizasyon:</strong> Otomatik Bulut Yedekleme</li>
                                    <li><strong>Güvenlik:</strong> Biyometrik Giriş (Parmak İzi/Yüz Tanıma)</li>
                                    <li><strong>Özellikler:</strong> Grafik analizler, PDF rapor paylaşımı</li>
                                    <li><strong>Dil Desteği:</strong> Türkçe ve İngilizce</li>
                                </ul>
                                <div className="text-center mt-4">
                                    <a href="contact.html" className="btn-custom-reverse w-100">İletişime Geç</a>
                                </div>
                            </div>

                            <div className="spacer-20"></div>
                            <a href="products.html" className="btn-main text-white">← Tüm Ürünlere Geri Dön</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
