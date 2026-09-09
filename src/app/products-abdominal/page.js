
export const metadata = {
    title: 'Abdominal Fizyoterapi Cihazı - Teknik Detaylar',
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
                            <h1 className="wow fadeInUp mb-2">Abdominal Fizyoterapi Cihazı</h1>
                            <p className="lead wow fadeInUp" style={{ opacity: 0.9 }}>
                                Kronik kabızlık ve bağırsak tembelliği için non-invaziv çözüm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative section-light pt-80 pb-80">
                <div className="container">
                    <div className="row gx-5 align-items-center">

                        <div className="col-lg-6 mb-4 mb-lg-0 wow zoomIn">
                            <img src="images/abdominalcihazi.jpg" className="img-fluid rounded-3 shadow-lg border border-light w-100" alt="Abdominal Fizyoterapi Cihazı" style={{ objectFit: 'cover' }} />
                        </div>


                        <div className="col-lg-6">
                            <h3>Abdominal Fizyoterapi Cihazı</h3>
                            <p>Abdominal Fizyoterapi Cihazı, özellikle kronik kabızlık sorunu yaşayan hastalar için geliştirilmiş, bağırsak hareketlerini düzenlemeye yardımcı olan yenilikçi bir medikal sistemdir. Karın bölgesine uyguladığı ritmik ve programlanabilir basınç sayesinde, doğal peristaltik hareketleri taklit eder.</p>
                            <p>Cihaz, ilaç kullanımını azaltmayı hedefleyen ve yan etkisi bulunmayan fiziksel bir tedavi yöntemi sunar. Hem klinik ortamda sağlık personeli denetiminde hem de evde hasta tarafından güvenle kullanılabilir.</p>

                            <div className="spacer-10"></div>

                            <div className="p-4 rounded-3 shadow-soft border">
                                <h4>Teknik Özellikler & Avantajlar</h4>
                                <ul className="list-style-1">
                                    <li><strong>Tedavi Yöntemi:</strong> Non-invaziv (Girişimsel olmayan)</li>
                                    <li><strong>Uygulama Alanı:</strong> Abdominal (Karın) bölgesi</li>
                                    <li><strong>Mekanizma:</strong> Kontrollü darbe ve ritmik masaj</li>
                                    <li><strong>Kullanım Yeri:</strong> Hastane, Klinik ve Ev Tipi</li>
                                    <li><strong>Hedef:</strong> Bağırsak motilitesini artırma</li>
                                    <li><strong>Konfor:</strong> Ergonomik manşet tasarımı</li>
                                    <li><strong>Kontrol:</strong> Dijital dokunmatik ekran</li>
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
