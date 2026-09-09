
export const metadata = {
    title: 'Giyilebilir Holter Yelek - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">Giyilebilir Holter Yelek</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Uzun süreli ve konforlu kardiyak izleme çözümü.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/holtercihazi.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="Giyilebilir Holter Yelek" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>Giyilebilir Holter Yelek</h3>
                            <p>Giyilebilir Holter Yelek, kalp ritminin uzun süreli takibi için geliştirilmiş yeni nesil bir EKG izleme sistemidir. Geleneksel holter cihazlarındaki kablo karmaşasını ortadan kaldırarak hastalara hareket özgürlüğü ve konfor sunar.</p>
                            <p>Yelek üzerine entegre edilmiş elektrotlar sayesinde sinyal kayıplarını en aza indirir ve 24 saati aşan kesintisiz ritim analizine olanak tanır. Taşınabilir, hafif ve ergonomiktir.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Özellikler & Avantajlar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Kayıt Süresi:</strong> Uzun süreli (24+ saat) sürekli kayıt</li>
                                    <li><strong>Sinyal Kalitesi:</strong> Hareket artefaktlarını minimize eden sabit elektrotlar</li>
                                    <li><strong>Tasarım:</strong> Giyilebilir Yelek (Ergonomik ve Yıkanabilir)</li>
                                    <li><strong>Veri Aktarımı:</strong> Kablosuz veya hafıza kartı ile veri transferi</li>
                                    <li><strong>Konfor:</strong> Günlük aktiviteleri kısıtlamayan yapı</li>
                                    <li><strong>Analiz:</strong> Gelişmiş yazılım desteği ile detaylı raporlama</li>
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
