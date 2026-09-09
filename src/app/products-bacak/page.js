
export const metadata = {
    title: 'Bacak Kompresyon Cihazı - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">Bacak Kompresyon Cihazı</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Kan ve lenf dolaşımını destekleyen non-invaziv medikal drenaj sistemi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/bacakcihazi.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="Bacak Kompresyon Cihazı" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>Bacak Kompresyon Cihazı</h3>
                            <p>Bacak Kompresyon Cihazı, bacakların kan ve lenf dolaşımını desteklemek, ödem oluşumunu engellemek ve lenf drenajını maksimize etmek için geliştirilmiş ileri düzey bir sistemdir. Özellikle hareketsiz hastalarda veya cerrahi sonrası ödem tedavisinde etkilidir.</p>
                            <p>Sıralı kompresyon teknolojisi ile aşağıdan yukarı doğru ritmik basınç uygulayarak, toplardamar kan akışını hızlandırır ve lenf sıvısının hareketini kolaylaştırır.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Özellikler & Avantajlar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Tedavi Amacı:</strong> Lenfödem ve Venöz Dolaşım Bozuklukları</li>
                                    <li><strong>Basınç Tipi:</strong> Sıralı ve Programlanabilir Kompresyon</li>
                                    <li><strong>Etki Mekanizması:</strong> Lenf Drenajı</li>
                                    <li><strong>Manşet Tasarımı:</strong> Ergonomik Bacak Sargıları</li>
                                    <li><strong>Kullanım Kolaylığı:</strong> Evde bağımsız kullanım imkanı</li>
                                    <li><strong>Ek Özellikler:</strong> Kas gevşemesi ve ağrı yönetimi</li>
                                    <li><strong>Kontrol:</strong> Dijital basınç ayarı</li>
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
