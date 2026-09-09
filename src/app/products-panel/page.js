
export const metadata = {
    title: 'Dijital Sağlık Platformu - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">Dijital Sağlık Platformu</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Uzaktan izleme ve yönetim için kapsamlı web paneli.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/dijitalsaglik.jpeg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="Dijital Sağlık Platformu" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>Dijital Sağlık Platformu</h3>
                            <p>Medyes Dijital Sağlık Platformu, tüm tıbbi cihazlardan gelen verilerin güvenli bir şekilde toplandığı, saklandığı ve görselleştirildiği merkezi bir yönetim sistemidir. Doktorlar için hasta takibini kolaylaştırırken, hastalar için de kendi sağlık verilerini izleme imkanı sunar.</p>
                            <p>Bulut tabanlı mimarisi sayesinde verilere her yerden erişim mümkündür. KVKK, GDPR ve HIPAA uyumlu güvenlik protokolleri ile hasta mahremiyeti en üst düzeyde korunur.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Özellikler & Yetenekler</h4>
                                <ul className="list-style-1">
                                    <li><strong>Erişim Yetkisi:</strong> Çok seviyeli (Doktor, Hasta, Yönetici)</li>
                                    <li><strong>Veri Görselleştirme:</strong> Grafik ve İstatistiksel Raporlar</li>
                                    <li><strong>Geçmiş Veri:</strong> Hasta ölçüm geçmişi arşivi</li>
                                    <li><strong>Raporlama:</strong> PDF rapor oluşturma ve dışa aktarma</li>
                                    <li><strong>Uyumluluk:</strong> Tarayıcı bağımsız (Web & Mobil Web)</li>
                                    <li><strong>Bildirimler:</strong> Anlık uyarı ve hatırlatmalar</li>
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
