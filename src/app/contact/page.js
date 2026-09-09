
export const metadata = {
    title: 'İletişim - Medyes',
}

export default function Contact() {
    return (
        <main>
            {/* Title Section matching Homepage style */}
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0 80px 0',
                backgroundImage: 'url("images/background/6.webp")',
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
                            <h1 className="wow fadeInUp mb-2 text-white">İletişim</h1>
                            <p className="lead wow fadeInUp text-white" data-wow-delay=".2s" style={{ opacity: 0.9 }}>Bize Ulaşın</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="container relative z-2">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-4">
                                <div className="col-lg-4 text-center">
                                    <div className="p-4 rounded-1 bg-white shadow-soft h-100">
                                        <i className="icofont-phone fs-40 id-color mb-3"></i>
                                        <h4>İletişim</h4>
                                        <p className="mb-0" style={{ color: '#444' }}>+90 262 644 58 50</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="p-4 rounded-1 bg-white shadow-soft h-100">
                                        <i className="icofont-envelope fs-40 id-color mb-3"></i>
                                        <h4>E-Posta</h4>
                                        <p className="mb-0" style={{ color: '#444' }}>bilgi@medyes.com.tr</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="p-4 rounded-1 bg-white shadow-soft h-100">
                                        <i className="icofont-location-pin fs-40 id-color mb-3"></i>
                                        <h4>Adreslerimiz</h4>
                                        <div className="mb-3">
                                            <strong className="d-block mb-1">Merkez</strong>
                                            <p className="mb-0 small" style={{ color: '#444' }}>Gaziler Mh. İbrahim Ağa Cd. No:239 Gebze / KOCAELİ</p>
                                        </div>
                                        <div>
                                            <strong className="d-block mb-1">Ar-Ge Ofis</strong>
                                            <p className="mb-0 small" style={{ color: '#444' }}>Bilişim Vadisi Kule K:10 Muallimköy-Gebze / KOCAELİ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer-double"></div>

                            <div className="row g-4 justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <div className="p-4 rounded-1 shadow-soft" style={{ backgroundColor: '#f4feff', border: '1px solid #d1f2f5' }}>
                                        <div className="subtitle s2 mb-3" style={{ color: '#000000' }}>Hizmet Saatleri</div>
                                        <h3 className="mb-3">Çalışma Saatlerimiz</h3>
                                        <p className="lead" style={{ color: '#444' }}>
                                            Merkez ofisimiz ve teknik destek ekibimiz aşağıda belirtilen saatlerde hizmet vermektedir:
                                        </p>
                                        <div className="fw-bold fs-18 mb-4" style={{ color: '#000000' }}>
                                            Pazartesi - Cuma: 09:00 - 18:00 <br />
                                            Hafta Sonu: Kapalı
                                        </div>
                                        <div className="p-3 bg-white rounded-1 border-top-0">
                                            <p className="small mb-0 mt-2" style={{ color: '#666' }}>
                                                <i className="fa fa-lock id-color me-2"></i>
                                                <strong>KVKK Bilgilendirmesi:</strong> Paylaştığınız tüm veriler Kişisel Verilerin Korunması Kanunu kapsamında Medyes Sağlık Teknolojileri güvencesiyle yüksek güvenlikli sunucularımızda korunmaktadır.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
