
export const metadata = {
    title: 'HFCWO Göğüs Terapi Cihazı - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">HFCWO Göğüs Terapi Cihazı</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Yüksek frekanslı göğüs duvarı osilasyonu ile etkin mukus temizliği.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/goguscihazi.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="HFCWO Göğüs Terapi Cihazı" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>HFCWO Göğüs Terapi Cihazı</h3>
                            <p>HFCWO (High Frequency Chest Wall Oscillation) Göğüs Terapi Cihazı, akciğer sekresyonlarının (balgam) temizlenmesinde kullanılan altın standart yöntemlerden biridir. Cihaz, göğüs duvarına yüksek frekanslı titreşim uygulayarak mukusu gevşetir ve solunum yollarından atılmasını kolaylaştırır.</p>
                            <p>Kistik Fibrozis, KOAH ve Bronşektazi hastalarının günlük yaşam kalitesini artırmak için tasarlanmıştır.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Özellikler & Avantajlar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Tedavi Metodu:</strong> HFCWO (Yüksek Frekanslı Göğüs Duvarı Osilasyonu)</li>
                                    <li><strong>Kullanım Amacı:</strong> Hava yolu temizliği ve mukus mobilizasyonu</li>
                                    <li><strong>Uygulama Şekli:</strong> Osilasyon Yeleği (Yüksek konforlu)</li>
                                    <li><strong>Hasta Grubu:</strong> Pediatrik ve Erişkin</li>
                                    <li><strong>Kullanım Alanı:</strong> Evde bakım ve hastane tedavisi</li>
                                    <li><strong>Etkinlik:</strong> Kanıtlanmış mukus temizleme başarısı</li>
                                    <li><strong>Kontrol:</strong> Hassas frekans ve güç ayarı</li>
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
