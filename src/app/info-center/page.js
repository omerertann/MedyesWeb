'use client';

import React, { useState, useEffect, useRef } from 'react';

const dictionaryData = [
    { term: "Algoritma", desc: "Belirli bir problemi çözmek için tasarlanmış işlem adımları dizisi." },
    { term: "Ar-Ge (Araştırma ve Geliştirme)", desc: "Yeni ürün veya teknolojilerin tasarlanması, test edilmesi ve geliştirilmesi süreci." },
    { term: "Bacak Kompresyon Terapisi", desc: "Dolaşımı desteklemek için basınç uygulama yöntemi." },
    { term: "Biyomedikal Mühendisliği", desc: "Mühendislik prensiplerinin tıbba uygulanması disiplini." },
    { term: "Biyouyumluluk", desc: "Bir malzemenin canlı dokularla güvenli etkileşim özelliği." },
    { term: "Bradikardi", desc: "Kalp atım hızının normalden düşük olması." },
    { term: "Bulut Tabanlı Sistem", desc: "Verilerin internet üzerinden depolandığı ve işlendiği altyapı." },
    { term: "CE Belgesi", desc: "Bir ürünün Avrupa Birliği sağlık, güvenlik ve çevre gerekliliklerine uygun olduğunu gösteren işaret." },
    { term: "Dijital Sağlık", desc: "Sağlık hizmetlerinde yazılım ve veri teknolojilerinin kullanımı." },
    { term: "EKG (Elektrokardiyografi)", desc: "Kalbin elektriksel aktivitesini ölçen tanı yöntemi." },
    { term: "Elektrot", desc: "Elektriksel sinyalleri ileten iletken yüzey." },
    { term: "Entegrasyon", desc: "Farklı sistemlerin birlikte çalışabilir hale getirilmesi." },
    { term: "Giyilebilir Teknoloji", desc: "Vücut üzerinde taşınabilen sağlık izleme cihazları." },
    { term: "HFCWO", desc: "Yüksek frekanslı göğüs duvarı osilasyonu ile mukus temizliğini destekleyen terapi sistemi." },
    { term: "HRV (Heart Rate Variability)", desc: "Kalp atışları arasındaki zaman değişkenliği ölçümü." },
    { term: "ISO 13485", desc: "Medikal cihaz üreticileri için kalite yönetim sistemi standardı." },
    { term: "İnovasyon", desc: "Yenilikçi ürün veya süreç geliştirme." },
    { term: "Kalibrasyon", desc: "Bir cihazın ölçüm doğruluğunu ayarlama işlemi." },
    { term: "Kalite Yönetim Sistemi", desc: "Üretim ve süreçlerin standartlara uygun yürütülmesini sağlayan yapı." },
    { term: "Klinik Çalışma", desc: "Bir cihazın hasta grubu üzerinde test edilmesi." },
    { term: "Klinik Validasyon", desc: "Bir medikal cihazın klinik ortamda test edilerek etkinliğinin doğrulanması süreci." },
    { term: "Kompresyon Terapisi", desc: "Dolaşımı desteklemek için basınç uygulama yöntemi." },
    { term: "Lenfödem", desc: "Lenf sıvısının dokularda birikmesi sonucu oluşan şişlik." },
    { term: "Marka Tescili", desc: "Bir markanın hukuki olarak korunması." },
    { term: "MDR (Medical Device Regulation)", desc: "Avrupa Birliği’nde medikal cihazların güvenlik ve performans standartlarını belirleyen regülasyon." },
    { term: "Medikal Cihaz Sınıflandırması", desc: "Risk seviyesine göre cihazların sınıf I, IIa, IIb, III olarak kategorize edilmesi." },
    { term: "Mukus Mobilizasyonu", desc: "Akciğerde biriken balgamın hareketlendirilmesi." },
    { term: "Non-invaziv", desc: "Cerrahi müdahale gerektirmeyen, vücuda giriş yapılmadan uygulanan yöntem." },
    { term: "Oksijen Saturasyonu (SpO2)", desc: "Kandaki oksijen oranını gösteren parametre." },
    { term: "Oskültasyon", desc: "Vücut içi seslerin (özellikle kalp ve akciğer) dinlenmesi ve analiz edilmesi." },
    { term: "Patent", desc: "Bir buluşun yasal koruma altına alınması." },
    { term: "Peristaltik Hareket", desc: "Bağırsakların ritmik kasılma hareketi." },
    { term: "Post-Market Surveillance", desc: "Ürün piyasaya çıktıktan sonra güvenlik izleme süreci." },
    { term: "Prototip", desc: "Bir ürünün test amacıyla üretilmiş ilk örneği." },
    { term: "Rehabilitasyon", desc: "Hastalık sonrası fonksiyonların yeniden kazandırılması süreci." },
    { term: "Regülasyon", desc: "Yasal düzenleme ve denetim çerçevesi." },
    { term: "Risk Analizi", desc: "Bir cihazın potansiyel tehlikelerinin sistematik değerlendirilmesi." },
    { term: "Sağlık Ekosistemi", desc: "Hastalar, sağlık kuruluşları, üreticiler ve regülatörlerden oluşan yapı." },
    { term: "Sensör", desc: "Fiziksel veya biyolojik verileri algılayan elektronik bileşen." },
    { term: "Sekresyon", desc: "Vücutta üretilen sıvı salgılar." },
    { term: "Sertifikasyon", desc: "Belirli standartlara uygunluk belgesi alma süreci." },
    { term: "Taşikardi", desc: "Kalp atım hızının normalden yüksek olması." },
    { term: "Teknik Dosya", desc: "Regülasyon için hazırlanan ürünün tüm teknik ve klinik belgeleri." },
    { term: "Tele-Tıp", desc: "Uzaktan sağlık hizmeti sunma sistemi." },
    { term: "Ticarileştirme", desc: "Bir ürünün pazara sunulabilir hale getirilmesi süreci." },
    { term: "TÜBİTAK", desc: "Türkiye’de Ar-Ge projelerini destekleyen kamu kurumu." },
    { term: "TÜSEB", desc: "Sağlık teknolojileri ve klinik araştırmaları destekleyen kamu kurumu." },
    { term: "Validasyon", desc: "Bir sistemin hedeflenen performansı sağladığını doğrulama süreci." },
    { term: "Veri Analitiği", desc: "Toplanan sağlık verilerinin istatistiksel olarak incelenmesi." },
    { term: "Yapay Zekâ (AI)", desc: "Verileri analiz ederek öğrenebilen ve karar destek sağlayan algoritmalar bütünü." }
];

export default function InfoCenter() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
    const suggestionsRef = useRef(null);

    const alphabet = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");

    useEffect(() => {
        function handleClickOutside(event) {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setIsSuggestionsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setSelectedLetter(null);

        if (value.trim().length > 0) {
            const filtered = dictionaryData.filter(item =>
                item.term.toLocaleLowerCase('tr-TR').includes(value.toLocaleLowerCase('tr-TR')) ||
                item.desc.toLocaleLowerCase('tr-TR').includes(value.toLocaleLowerCase('tr-TR'))
            ).slice(0, 10);
            setSuggestions(filtered);
            setIsSuggestionsOpen(true);
        } else {
            setSuggestions([]);
            setIsSuggestionsOpen(false);
        }
    };

    const handleLetterClick = (letter) => {
        if (selectedLetter === letter) {
            setSelectedLetter(null);
        } else {
            setSelectedLetter(letter);
            setSearchQuery('');
        }
    };

    const handleSuggestionClick = (term) => {
        setSearchQuery(term);
        setSelectedLetter(null);
        setIsSuggestionsOpen(false);
        const element = document.getElementById(`term-${term}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.style.backgroundColor = 'rgba(0, 153, 216, 0.2)';
            setTimeout(() => {
                element.style.backgroundColor = 'transparent';
            }, 2000);
        }
    };

    const filteredDictionary = dictionaryData.filter(item => {
        const matchesSearch = item.term.toLocaleLowerCase('tr-TR').includes(searchQuery.toLocaleLowerCase('tr-TR')) ||
            item.desc.toLocaleLowerCase('tr-TR').includes(searchQuery.toLocaleLowerCase('tr-TR'));
        const matchesLetter = selectedLetter
            ? item.term.toLocaleLowerCase('tr-TR').startsWith(selectedLetter.toLocaleLowerCase('tr-TR'))
            : true;
        return matchesSearch && matchesLetter;
    });

    return (
        <main>
            <section className="relative overflow-hidden" style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 0 80px 0',
                backgroundImage: 'url("images/background/3.webp")',
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
                            <h1 className="wow fadeInUp mb-2 text-white">Bilgi Merkezi</h1>
                            <p className="lead wow fadeInUp text-white" data-wow-delay=".2s" style={{ opacity: 0.9 }}>
                                Destekler, Süreçler ve Medikal Sözlük
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tubitak" className="relative section-padding">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-8">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Ar-Ge ve İnovasyon</div>
                            <h2 className="wow fadeInUp text-dark mb-4" style={{ fontWeight: 'bold' }}>TÜBİTAK Destekleri ile Medikal Cihaz Geliştirme Süreci</h2>
                            <p className="wow fadeInUp text-muted">Medikal cihaz geliştirme, yüksek Ar-Ge yatırımı, teknik doğrulama ve klinik validasyon gerektiren çok aşamalı bir süreçtir. Türkiye’de bu süreci destekleyen en önemli kurumlardan biri TÜBİTAK’tır. Özellikle 1501 Sanayi Ar-Ge ve 1507 KOBİ Ar-Ge Başlangıç programları, yenilikçi medikal teknolojilerin geliştirilmesinde kritik rol oynamaktadır.</p>

                            <h4 className="wow fadeInUp mt-4">Bu Destekler Neleri Sağlar?</h4>
                            <ul className="ul-check text-dark wow fadeInUp">
                                <li>Teknik riskleri azaltır</li>
                                <li>Prototip geliştirme süresini hızlandırır</li>
                                <li>Akademik iş birlikleri kurabilir</li>
                                <li>Ürün doğrulama süreçlerini güçlendirebilir</li>
                            </ul>
                            <div className="wow fadeInUp mt-3 text-dark" style={{ fontWeight: '500' }}>
                                <p>Medikal cihaz projelerinde Ar-Ge yalnızca bir mühendislik çalışması değildir; aynı zamanda regülasyonlara uygunluk, klinik ihtiyaç analizi ve kalite yönetim sistemleriyle entegre ilerlemelidir. TÜBİTAK projeleri bu disiplinli yaklaşımı teşvik eder.</p>
                                <p>Ayrıca kamu destekli Ar-Ge projeleri, yatırımcı güveni açısından da önemli bir referans oluşturur. Özellikle yapay zekâ destekli sağlık sistemleri, giyilebilir medikal cihazlar ve rehabilitasyon teknolojileri gibi alanlarda TÜBİTAK destekleri, yerli üretimin küresel rekabet gücünü artırmaktadır.</p>
                                <p>Sonuç olarak TÜBİTAK destekleri, medikal teknolojilerde inovasyonu hızlandıran ve yerli üretimi güçlendiren stratejik bir kaldıraçtır.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 rounded-1 shadow-soft mt-md-4">
                                <h5>İlgili Bağlantılar</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#tubitak" className="text-dark"><i className="fa fa-angle-right me-2"></i>TÜBİTAK Destekleri</a></li>
                                    <li><a href="#tuseb" className="text-dark"><i className="fa fa-angle-right me-2"></i>TÜSEB Destekleri</a></li>
                                    <li><a href="#mdr" className="text-dark"><i className="fa fa-angle-right me-2"></i>MDR Sertifikasyonu</a></li>
                                    <li><a href="#yerli-uretim" className="text-dark"><i className="fa fa-angle-right me-2"></i>Yerli Üretimin Önemi</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tuseb" className="relative section-padding bg-light">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-12">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#01283c' }}>Klinik Odak</div>
                            <h2 className="wow fadeInUp text-dark mb-4" style={{ fontWeight: 'bold' }}>TÜSEB Destekleri ve Sağlık Teknolojilerinde Klinik Odaklı Gelişim</h2>
                            <p className="wow fadeInUp text-muted">
                                Türkiye Sağlık Enstitüleri Başkanlığı (TÜSEB), sağlık alanında Ar-Ge ve yenilikçi projeleri destekleyen önemli bir kamu kurumudur. Özellikle biyomedikal cihazlar, klinik araştırmalar ve sağlık teknolojileri geliştirme projelerinde TÜSEB destekleri, sektöre yön veren bir yapı sunmaktadır.
                            </p>
                            <p className="wow fadeInUp text-muted">
                                TÜSEB’in medikal cihaz projelerine sağladığı destekler; klinik ihtiyaç odaklı ürün geliştirme, pilot uygulama ve sağlık kuruluşlarıyla entegre test süreçlerini kapsayabilir. Bu sayede geliştirilen ürünler yalnızca teknik olarak değil, klinik açıdan da doğrulanmış olur.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-6 wow fadeInUp text-dark">
                                    <div className="p-4 rounded-1 shadow-soft">
                                        <h4>Klinik Validasyon Süreçleri</h4>
                                        <ul className="ul-check text-dark">
                                            <li>Klinik çalışma tasarımı</li>
                                            <li>Hastane iş birlikleri</li>
                                            <li>Veri toplama ve analiz süreçleri</li>
                                            <li>Bilimsel raporlama</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp text-muted" data-wow-delay=".2s">
                                    <p>
                                        Bu yaklaşım, geliştirilen ürünün yalnızca piyasaya çıkmasını değil; aynı zamanda sağlık sistemine entegre olmasını sağlar. Klinik doğrulama süreçleri tamamlanmamış bir medikal cihazın sürdürülebilir olması mümkün değildir.
                                    </p>
                                    <p>
                                        TÜSEB destekleri, özellikle yerli medikal teknoloji girişimlerinin bilimsel temelli büyümesini destekleyen önemli bir mekanizmadır.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mdr" className="relative section-padding">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-12">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#000000' }}>Regülasyon</div>
                            <h2 className="wow fadeInUp text-dark mb-4" style={{ fontWeight: 'bold' }}>MDR Sertifikasyonu Nedir? Medikal Cihazlarda Avrupa Uyum Süreci</h2>
                            <p className="wow fadeInUp text-muted">
                                MDR (Medical Device Regulation – 2017/745), Avrupa Birliği’nde medikal cihazların piyasaya arz edilmesini düzenleyen yasal çerçevedir. 2021 itibarıyla yürürlüğe giren MDR, eski MDD direktifine göre çok daha kapsamlı ve sıkı gereklilikler içermektedir.
                            </p>
                            <div className="row mt-4">
                                <div className="col-lg-6 wow fadeInUp text-dark">
                                    <div className="p-4 rounded-1 shadow-soft">
                                        <h4>Üreticilerin Yükümlülükleri</h4>
                                        <ul className="ul-check text-dark">
                                            <li>Klinik değerlendirme raporları hazırlaması</li>
                                            <li>Risk analizleri yapması</li>
                                            <li>Biyouyumluluk ve performans testlerini tamamlaması</li>
                                            <li>ISO 13485 kalite yönetim sistemine sahip olması</li>
                                            <li>Teknik dosya ve izlenebilirlik dokümantasyonunu oluşturması</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp text-muted" data-wow-delay=".2s">
                                    <p>
                                        MDR süreci yalnızca bir belge almak değildir; ürünün tüm yaşam döngüsünü kapsayan bir kalite ve güvenlik yaklaşımıdır. Post-market surveillance (piyasaya arz sonrası izleme) ve vigilans süreçleri de MDR kapsamında zorunlu hale gelmiştir.
                                    </p>
                                    <p>
                                        Avrupa pazarına açılmak isteyen medikal teknoloji firmaları için MDR sertifikasyonu kritik öneme sahiptir. Aynı zamanda yerli pazarda da güvenilirlik ve kurumsal prestij açısından güçlü bir referans oluşturur. MDR uyumlu ürün geliştirme yaklaşımı, global rekabette sürdürülebilir büyümenin temel taşlarından biridir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="yerli-uretim" className="relative section-padding bg-light">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-12">
                            <div className="subtitle s2 mb-3 wow fadeInUp" style={{ color: '#01283c' }}>Strateji</div>
                            <h2 className="wow fadeInUp text-dark mb-4" style={{ fontWeight: 'bold' }}>Yerli Medikal Cihaz Üretimi Neden Stratejik Öneme Sahiptir?</h2>
                            <p className="wow fadeInUp text-muted">
                                Türkiye’de medikal cihaz pazarının büyük bir bölümü ithal ürünlerden oluşmaktadır. Özellikle solunum terapisi sistemleri, rehabilitasyon cihazları ve giyilebilir sağlık teknolojileri gibi ileri teknoloji gerektiren alanlarda dışa bağımlılık, hem maliyet hem de tedarik sürekliliği açısından önemli riskler doğurmaktadır. Döviz kurundaki dalgalanmalar, kamu ve özel sağlık kurumlarının bütçelerini zorlamakta; teknik servis ve yedek parça süreçleri ise zaman kaybına yol açabilmektedir.
                            </p>
                            <p className="wow fadeInUp text-muted">
                                Yerli medikal cihaz üretimi, yalnızca ekonomik bir tercih değil; aynı zamanda stratejik bir gerekliliktir. Yerli üretim sayesinde sağlık sistemleri daha sürdürülebilir hale gelir, teknik destek süreçleri hızlanır ve teknolojik bilgi birikimi ülke içinde kalır. Bununla birlikte, Ar-Ge odaklı yerli üretim; üniversite-sanayi iş birliklerini artırarak inovasyon ekosistemini güçlendirir.
                            </p>
                            <p className="wow fadeInUp text-muted">
                                TÜBİTAK ve KOSGEB destekli projelerle geliştirilen yerli sağlık teknolojileri, yalnızca iç pazarda değil, bölgesel ihracat potansiyeli açısından da büyük fırsatlar sunmaktadır. Yerli medikal cihaz üretimi; sağlıkta bağımsızlık, ekonomik verimlilik ve teknolojik gelişim açısından kritik bir rol oynamaktadır.
                            </p>
                        </div>
                    </div>

                    <div id="ozellikler" className="row gy-5 mt-5">
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="p-4 p-md-5 shadow-soft rounded-3 text-dark">
                                <h3>HFCWO Göğüs Terapi Cihazı Nedir? Kimler İçin Uygundur?</h3>
                                <p className="text-muted">HFCWO (High Frequency Chest Wall Oscillation) göğüs terapi cihazı, akciğerlerde biriken mukusun mobilizasyonunu desteklemek amacıyla geliştirilen non-invaziv bir solunum terapisi sistemidir. Yüksek frekanslı titreşimler aracılığıyla göğüs duvarına kontrollü basınç uygulayarak sekresyonların hava yollarından daha kolay atılmasını hedefler.</p>
                                <p className="text-muted">Bu teknoloji özellikle kistik fibrozis, KOAH, bronşektazi ve yoğun sekresyon problemi yaşayan hastalarda destekleyici tedavi yöntemi olarak kullanılmaktadır. Geleneksel göğüs fizyoterapisine alternatif veya tamamlayıcı bir çözüm sunar.</p>
                                <p className="text-muted">HFCWO sistemleri, hem klinik ortamda hem de evde kullanıma uygun olarak tasarlanabilmektedir. Bu da hastaların tedavi sürekliliğini artırırken sağlık personeline olan bağımlılığı azaltır. Özellikle kronik solunum hastalıklarında düzenli sekresyon yönetimi, yaşam kalitesini doğrudan etkileyen önemli bir faktördür.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="p-4 p-md-5 shadow-soft rounded-3 text-dark">
                                <h3>Abdominal Fizyoterapi Cihazı ile Kronik Kabızlıkta İlaçsız Destek</h3>
                                <p className="text-muted">Kronik kabızlık, dünya genelinde milyonlarca insanın yaşam kalitesini etkileyen yaygın bir sindirim sistemi problemidir. Uzun süreli ilaç kullanımına bağlı yan etkiler ve sürdürülebilir olmayan tedavi yöntemleri, alternatif çözümlere olan ihtiyacı artırmaktadır.</p>
                                <p className="text-muted">Abdominal fizyoterapi cihazı, elle uygulanan karın masajını taklit eden bir mekanizma ile bağırsak hareketlerini uyarmayı hedefler. Kontrollü ve ritmik basınç uygulayarak kalın bağırsağın doğal peristaltik hareketlerini destekler. Non-invaziv ve ilaçsız bir yöntem olması, cihazın önemli avantajları arasındadır.</p>
                                <p className="text-muted">Hem klinik hem ev kullanımına uygun tasarlanabilen bu sistem, tedavi sürecini daha erişilebilir ve sürdürülebilir hale getirir. Abdominal fizyoterapi teknolojileri, özellikle kronik kabızlık yönetiminde destekleyici bir yaklaşım olarak öne çıkmaktadır.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="p-4 p-md-5 shadow-soft rounded-3 text-dark">
                                <h3>Bacak Kompresyon Cihazı ile Lenfödem Tedavisine Destek</h3>
                                <p className="text-muted">Bacak kompresyon cihazı, sıralı ve kontrollü basınç uygulama prensibiyle çalışan bir dolaşım destek sistemidir. Bacaklara sarılan özel manşetler, belirli aralıklarla şişirilip indirilerek aşağıdan yukarı doğru bir basınç dalgası oluşturur. Bu mekanizma kan dolaşımını teşvik ederken lenf sıvısının hareketini destekler.</p>
                                <p className="text-muted">Lenfödem hastaları için destekleyici bir yöntem olan kompresyon terapisi, ödemin azaltılmasına ve dolaşımın iyileştirilmesine yardımcı olabilir. Ayrıca rehabilitasyon sürecindeki bireylerde kas gevşemesi ve dolaşım düzenlemesi açısından da fayda sağlar.</p>
                                <p className="text-muted">Non-invaziv ve ilaçsız bir çözüm sunan bacak kompresyon sistemleri, hem sağlık tesislerinde hem ev ortamında kullanılabilir. Düzenli kullanım, dolaşım problemlerinin yönetiminde önemli bir destek mekanizması oluşturur.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="p-4 p-md-5 shadow-soft rounded-3 text-dark">
                                <h3>Yapay Zekâ Destekli EKG Holter Sistemi Nedir?</h3>
                                <p className="text-muted">Geleneksel Holter cihazları belirli bir süre boyunca kalp ritmini kaydeder; ancak verilerin analiz süreci genellikle manuel değerlendirmeye dayanır. Yapay zekâ destekli EKG Holter sistemleri ise sürekli veri toplamanın yanı sıra, algoritmalar aracılığıyla otomatik analiz imkânı sunar.</p>
                                <p className="text-muted">Bu sistemler; kalp atım hızı, ritim düzensizlikleri ve HRV gibi parametreleri analiz ederek bradikardi ve taşikardi gibi durumların erken tespitine yardımcı olabilir. Giyilebilir form faktörü sayesinde hasta konforu artırılır ve uzun süreli izleme mümkün hale gelir.</p>
                                <p className="text-muted">Uzaktan hasta takibi altyapısına entegre edilebilen yapay zekâ destekli EKG sistemleri, dijital sağlık ekosisteminin önemli bir parçasıdır. Veri odaklı yaklaşım sayesinde hekimler daha objektif ve sürekli bir izleme sürecine sahip olur.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="p-4 p-md-5 shadow-soft rounded-3 text-dark">
                                <h3>Akciğer Oskültasyon Sistemi ile Dijital Solunum Analizi</h3>
                                <p className="text-muted">Akciğer oskültasyon sistemi, solunum seslerini dijital ortamda toplayan ve analiz eden giyilebilir bir sağlık teknolojisidir. Çoklu sensör yapısı sayesinde akciğer seslerini eş zamanlı olarak farklı noktalardan kaydeder.</p>
                                <p className="text-muted">Toplanan veriler yazılım altyapısı üzerinden analiz edilerek hırıltı, raller ve diğer anormal solunum sesleri değerlendirilebilir. Bu sistem, standart stetoskop muayenesine kıyasla daha ölçülebilir ve kayıt altına alınabilir sonuçlar sunar.</p>
                                <p className="text-muted">Dijital oskültasyon sistemleri, uzaktan hasta izleme ve tele-tıp uygulamaları açısından önemli bir potansiyel taşımaktadır. Solunum verilerinin sayısallaştırılması, kronik akciğer hastalıklarının takibini daha sistematik hale getirebilir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sozluk" className="relative bg-dark text-light section-padding">
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className="wow fadeInUp text-white">Medikal Teknolojiler Sözlüğü</h2>
                            <div className="spacer-20"></div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 relative" ref={suggestionsRef}>
                                    <div className="relative search-container">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Sözlükte ara... (ör: Ar-Ge, Akciğer, VR)"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            onFocus={() => searchQuery.trim() && setIsSuggestionsOpen(true)}
                                            style={{
                                                padding: '15px 25px',
                                                borderRadius: '30px',
                                                border: '2px solid #0099D8',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: '#fff',
                                                fontSize: '16px',
                                                width: '100%'
                                            }}
                                        />
                                        <button className="absolute" style={{ right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#0099D8' }}>
                                            <i className="fa fa-search"></i>
                                        </button>

                                        {isSuggestionsOpen && suggestions.length > 0 && (
                                            <div className="absolute w-100 mt-2 bg-white rounded-3 shadow-lg overflow-hidden text-start" style={{ zIndex: 1000, top: '100%', left: 0 }}>
                                                {suggestions.map((item, idx) => (
                                                    <div key={idx} className="p-3 border-bottom suggestion-item cursor-pointer" style={{ color: '#333' }} onClick={() => handleSuggestionClick(item.term)}>
                                                        <div className="fw-bold">{item.term}</div>
                                                        <div className="small text-muted text-truncate">{item.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
                                        {alphabet.map((letter) => (
                                            <span
                                                key={letter}
                                                onClick={() => handleLetterClick(letter)}
                                                className={`cursor-pointer px-2 py-1 rounded transition-all alpha-box ${selectedLetter === letter ? 'active' : ''}`}
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    minWidth: '32px',
                                                    textAlign: 'center',
                                                    background: selectedLetter === letter ? '#0099D8' : 'rgba(255,255,255,0.03)',
                                                    color: selectedLetter === letter ? '#fff' : '#aaa'
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        ))}
                                        {selectedLetter && (
                                            <span onClick={() => setSelectedLetter(null)} className="cursor-pointer px-2 py-1 text-danger small pt-2" style={{ fontWeight: 'bold' }}>Sıfırla</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mt-4">
                        <div className="col-md-12">
                            <div className="row">
                                {filteredDictionary.length > 0 ? (
                                    filteredDictionary.map((item, idx) => (
                                        <div key={idx} id={`term-${item.term}`} className="col-md-6 mb-3 p-3 rounded transition-all hover-bg">
                                            <strong style={{ color: '#0099D8' }}>{item.term}:</strong> <span className="text-light opacity-80">{item.desc}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center py-5">
                                        <h4>Eşleşen terim bulunamadı.</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .cursor-pointer { cursor: pointer; }
                    .alpha-box:hover { background: rgba(0, 153, 216, 0.2); color: #fff; border-color: #0099D8; }
                    .alpha-box.active { transform: scale(1.1); box-shadow: 0 0 15px rgba(0, 153, 216, 0.4); }
                    .hover-bg:hover { background: rgba(255,255,255,0.03); }
                    .section-padding { padding: 80px 0; }
                    .opacity-80 { opacity: 0.8; }
                    .scroll-area-track { background: rgba(255,255,255,0.05); }
                `}</style>
            </section>
        </main>
    );
}
