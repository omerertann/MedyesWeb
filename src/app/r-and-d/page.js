
export const metadata = {
    title: 'Ar-Ge - Medyes',
}

export default function RAndD() {
    return (
        <main>
            {/* Title Section */}
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0 80px 0',
                backgroundImage: 'url("images/background/2.webp")',
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
                            <h1 className="wow fadeInUp mb-2 text-white">Ar-Ge</h1>
                            <p className="lead wow fadeInUp text-white" data-wow-delay=".2s" style={{ opacity: 0.9 }}>Araştırma & Geliştirme Projeleri</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ar-Ge Projects Section */}
            <section className="relative">
                <div className="container relative z-2">
                    <div className="row gy-5">

                        {/* Project 1 */}
                        <div className="col-lg-12" id="hfcwo-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBİTAK 1507 – KOBİ Ar-Ge Başlangıç Destek Programı</span>
                                <h3 className="mb-3">Yüksek Frekanslı Göğüs Duvarı Osilasyon (HFCWO) Tabanlı Göğüs Terapi Cihazı Geliştirilmesi</h3>
                                <p style={{ color: '#444' }}>
                                    COVID-19 döneminde artan solunum terapisi ihtiyacına yanıt vermek amacıyla başlatılan proje kapsamında, yüksek frekanslı göğüs duvarı osilasyonu (HFCWO) prensibine dayalı yerli bir göğüs terapi sistemi geliştirilmişti.
                                </p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="col-lg-12" id="holter-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBITAK- 1501-2022-2 SANAYİ AR-GE DESTEK PROGRAMI</span>
                                <h3 className="mb-3">TELETIP HİZMETLERİNE YÖNELİK GİYİLEBİLİR HOLTER GELİŞTİRİLMESİ VE PROTOTİP İMALATI</h3>
                                <p style={{ color: '#444' }}>
                                    Tele-tıp uygulamalarının yaygınlaşması ve kardiyovasküler hastalıkların uzaktan izlenmesine yönelik artan klinik ihtiyaçlar doğrultusunda başlatılan bu Ar-Ge çalışması kapsamında, sürekli EKG ölçümü yapabilen giyilebilir bir Holter sistemi ve buna entegre uzaktan raporlama altyapısı geliştirilmiştir.
                                </p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="col-lg-12" id="abdominal-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBITAK- 1702 YENİLİK-PATENT</span>
                                <h3 className="mb-3">YENİ NESİL ABDOMİNAL FİZYOTERAPİ CİHAZI</h3>
                                <p style={{ color: '#444' }}>
                                    Abdominal masaj terapilerinin etkinliğini artırmak ve sağlık personeline olan bağımlılığı azaltmak amacıyla yürütülen bu Ar-Ge çalışması kapsamında, elle uygulanan abdominal masajı taklit eden yeni nesil bir fizyoterapi cihazı geliştirilmiştir. Proje, üniversite–sanayi iş birliği çerçevesinde geliştirilen ve patent başvurusu yapılmış bir teknolojinin sanayiye aktarılmasını hedeflemektedir.
                                </p>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="col-lg-12" id="akciger-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBİTAK 1501 SANAYİ AR-GE DESTEK PROGRAMI</span>
                                <h3 className="mb-3">GİYİLEBİLİR AKCİĞER OSKÜLTASYON SİSTEMİ</h3>
                                <p style={{ color: '#444' }}>
                                    Bu Ar-Ge çalışması kapsamında, akciğer seslerinin standartlaştırılmış bir ölçüm protokolü ile kaydedilmesini, analiz edilmesini ve klinik değerlendirmeye uygun şekilde sunulmasını amaçlayan giyilebilir bir akciğer oskültasyon sistemi geliştirilmiştir. Sistem, mobil uygulama üzerinden yönlendirilen ölçüm adımları ile hasta kaynaklı verilerin kontrollü ve tekrarlanabilir biçimde toplanmasını hedeflemektedir.
                                </p>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="col-lg-12" id="pneumatic-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBİTAK 1507-KOBİARGE</span>
                                <h3 className="mb-3">BİLGİSAYAR KONTROLLÜ GİYİLEBİLİR MEDİKAL SİSTEMLER GELİŞTİRİLMESİ</h3>
                                <p style={{ color: '#444' }}>
                                    Bu proje başlığı altında, basınçlı havanın giyilebilir sistemler aracılığıyla vücudun farklı bölgelerine kontrollü şekilde uygulanmasına dayalı üç farklı medikal cihaz için Ar-Ge çalışmaları yürütülmektedir. Çalışmalar kapsamında, yazılım destekli kontrol sistemleri ile yönetilen pnömatik altyapılar kullanılarak, farklı tedavi ihtiyaçlarına yönelik yenilikçi ve ölçeklenebilir medikal çözümler geliştirilmesi hedeflenmektedir.
                                </p>
                            </div>
                        </div>

                        {/* Project 6 */}
                        <div className="col-lg-12" id="ekg-ai-project">
                            <div className="p-4 rounded-3 shadow-soft wow fadeInUp">
                                <span className="subtitle s2 mb-2 d-inline-block">TÜBİTAK 1501 – Sanayi Ar-Ge Destek Programı</span>
                                <h3 className="mb-3">Yapay Zekâ Destekli Giyilebilir EKG Holter Yelek Sistemi Geliştirilmesi</h3>
                                <p style={{ color: '#444' }}>
                                    Bu proje kapsamında, uzun süreli ve yüksek doğrulukta kardiyak izleme yapılabilmesini sağlamak amacıyla ileri seviye bir EKG izleme ve analiz altyapısı geliştirilmiştir. Çalışmaların ilk aşamasında, çoklu elektrotlardan eş zamanlı veri alımına imkân tanıyan çok kanallı EKG veri toplama mimarisi tasarlanmış ve donanımsal altyapısı oluşturulmuştur.
                                </p>
                                <p style={{ color: '#444' }}>
                                    Proje kapsamında ayrıca kalp atım hızındaki değişkenliği değerlendiren HRV analizleri ile farklı ritim tiplerinin sınıflandırılmasına yönelik algoritmalar geliştirilmiş, bu analizlerin yazılım altyapısına entegre edilmesi sağlanmıştır.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
