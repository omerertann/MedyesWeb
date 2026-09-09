
export const metadata = {
    title: 'AI Destekli EKG Yelek - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">AI Destekli EKG Yelek</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Yapay zeka algoritmaları ile desteklenen ileri seviye EKG analizi ve erken uyarı sistemi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/ekgcihazi.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="AI Destekli EKG Yelek" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>AI Destekli EKG Yelek</h3>
                            <p>Medyes'in geliştirdiği Yapay Zeka Destekli EKG Yelek, sadece kalp ritmini izlemekle kalmaz, entegre AI motoru sayesinde verileri anlık olarak analiz eder. Olası aritmi, taşikardi veya bradikardi gibi durumları tespit ederek doktoru ve hastayı uyarır.</p>
                            <p>Çok kanallı EKG kayıt yeteneği ve üstün sinyal işleme teknolojisi ile kardiyak takipte yeni bir dönemi başlatır. Klinik karar destek sistemi olarak görev yapar.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Özellikler & Avantajlar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Analiz Motoru:</strong> Derin Öğrenme (Deep Learning) tabanlı AI</li>
                                    <li><strong>Tespit Yeteneği:</strong> Ritim bozuklukları ve iskemik değişiklikler</li>
                                    <li><strong>Bildirim:</strong> Gerçek zamanlı uyarı sistemi</li>
                                    <li><strong>Kanal Sayısı:</strong> Çok Kanallı (1-12 Deri EKG) desteği</li>
                                    <li><strong>Entegrasyon:</strong> Bulut ve Mobil Uygulama ile senkronize</li>
                                    <li><strong>Veri Güvenliği:</strong> Şifreli ve güvenli veri akışı</li>
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
