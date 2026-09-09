# 🏥 Medyes - Sağlık Teknolojileri

<p align="center">
  <strong>Sağlık Teknolojilerinde Yeni Nesil Büyüme</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Lisans-Özel-red" alt="Lisans" />
</p>

---

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Teknolojiler](#-teknolojiler)
- [Ön Gereksinimler](#-ön-gereksinimler)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Sayfalar](#-sayfalar)
- [Ürünler](#-ürünler)
- [Sektör İşbirlikleri](#-sektör-işbirlikleri)
- [Dağıtım (Deploy)](#-dağıtım-deploy)
- [Geliştirici](#-geliştirici)

---

## 🏢 Proje Hakkında

**Medyes**, klinik ihtiyaçlardan doğan problemleri biyomedikal mühendislik ve yazılım odaklı yaklaşımlarla çözen bir sağlık teknolojileri girişimidir. Bu proje, Medyes'in kurumsal web sitesinin kaynak kodlarını içermektedir.

Yapay zekâ, biyomedikal mühendislik ve dijital sağlık altyapılarını bir araya getirerek yenilikçi, ölçeklenebilir ve klinik olarak doğrulanmış medikal teknolojiler geliştirilmektedir.

**İletişim Bilgileri:**
- 📍 **Merkez:** Gaziler Mh. İbrahim Ağa Cd. No:239 Gebze / KOCAELİ
- 📍 **Ar-Ge Ofis:** Bilişim Vadisi Kule K:10 Muallimköy-Gebze / KOCAELİ
- 📞 **Telefon:** +90 262 644 58 50
- 📧 **E-Posta:** bilgi@medyes.com.tr

---

## 🛠 Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| [Next.js](https://nextjs.org/) | 16.1.6 | React tabanlı full-stack web framework |
| [React](https://react.dev/) | 19.2.3 | Kullanıcı arayüzü kütüphanesi |
| [React DOM](https://react.dev/) | 19.2.3 | React DOM render kütüphanesi |
| [Bootstrap](https://getbootstrap.com/) | 5.x | CSS framework |
| [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) | - | Slider / Carousel bileşeni |
| [WOW.js](https://wowjs.uk/) | - | Scroll animasyonları |
| [Font Awesome](https://fontawesome.com/) | - | İkon kütüphanesi |

---

## 📌 Ön Gereksinimler

Projeyi çalıştırmadan önce aşağıdakilerin sisteminizde kurulu olduğundan emin olun:

- **Node.js** (v18 veya üzeri) — [İndir](https://nodejs.org/)
- **npm** (Node.js ile birlikte gelir)

---

## 🚀 Kurulum

1. **Projeyi klonlayın:**

   ```bash
   git clone <repo-url>
   cd medyes
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**

   [http://localhost:3000](http://localhost:3000) adresine gidin.

---

## 💻 Kullanım

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır (hot-reload aktif) |
| `npm run build` | Statik site olarak production build oluşturur (`out/` klasörüne) |
| `npm run start` | Build edilmiş statik siteyi `serve` ile sunar |
| `npm run lint` | ESLint ile kod kalitesi kontrolü yapar |

> **Not:** Proje `output: 'export'` modunda yapılandırılmıştır. Bu sayede tamamen statik HTML dosyaları üretir ve herhangi bir statik hosting üzerinde çalıştırılabilir.

---

## 📁 Proje Yapısı

```
medyes/
├── public/                     # Statik dosyalar
│   ├── css/                    # CSS dosyaları
│   │   ├── bootstrap.min.css   # Bootstrap framework
│   │   ├── style.css           # Ana stil dosyası
│   │   ├── plugins.css         # Plugin stilleri
│   │   ├── coloring.css        # Renk şeması
│   │   ├── swiper.css          # Swiper stilleri
│   │   └── colors/             # Renk şema dosyaları
│   ├── js/                     # JavaScript dosyaları
│   │   ├── plugins.js          # jQuery ve eklentiler
│   │   ├── designesia.js       # Tema JS dosyası
│   │   ├── swiper.js           # Swiper kütüphanesi
│   │   └── validation-*.js     # Form doğrulama scriptleri
│   ├── images/                 # Görseller (ürün, logo, ortaklar vb.)
│   ├── fonts/                  # Font dosyaları
│   └── files/                  # İndirilebilir dosyalar (katalog PDF vb.)
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.js           # Ana layout (header, footer, navigasyon)
│       ├── page.js             # Anasayfa
│       ├── globals.css         # Global stiller
│       ├── page.module.css     # Anasayfa modül CSS
│       ├── about/              # Kurumsal sayfa
│       ├── contact/            # İletişim sayfası
│       ├── products/           # Ürün & Teknoloji sayfası
│       ├── products-abdominal/ # Abdominal Fizyoterapi detay
│       ├── products-bacak/     # Bacak Kompresyon detay
│       ├── products-ekg-ai/    # AI Destekli EKG detay
│       ├── products-gogus/     # HFCWO Göğüs Terapi detay
│       ├── products-holter/    # Giyilebilir Holter detay
│       ├── products-mobil/     # Mobil Uygulama detay
│       ├── products-panel/     # Dijital Sağlık Platformu detay
│       ├── r-and-d/            # Ar-Ge sayfası
│       └── info-center/        # Bilgi Merkezi sayfası
├── out/                        # Statik build çıktısı
├── next.config.mjs             # Next.js yapılandırması
├── package.json                # Proje bağımlılıkları ve scriptler
├── jsconfig.json               # JavaScript yapılandırması
├── .gitignore                  # Git ignore kuralları
└── README.md                   # Bu dosya
```

---

## 📄 Sayfalar

| Sayfa | Yol | Açıklama |
|-------|-----|----------|
| **Anasayfa** | `/` | Hero slider, ürün kartları, haberler, ortaklar |
| **Kurumsal** | `/about` | Hakkında, vizyon & misyon, ekip, katalog, yatırım çağrısı |
| **Ürün & Teknoloji** | `/products` | Tüm ürünlerin genel görünümü |
| **Ar-Ge** | `/r-and-d` | Ar-Ge projeleri ve çalışmaları |
| **Bilgi Merkezi** | `/info-center` | Blog yazıları ve medikal sözlük |
| **İletişim** | `/contact` | İletişim formu ve adres bilgileri |

---

## 🔬 Ürünler

Medyes'in geliştirdiği medikal cihaz ve yazılım çözümleri:

| # | Ürün | Açıklama |
|---|------|----------|
| 1 | **Abdominal Fizyoterapi** | Kronik kabızlık ve bağırsak hareketleri için non-invaziv çözüm |
| 2 | **Bacak Kompresyon** | Kan ve lenf dolaşımını destekleyen non-invaziv medikal drenaj sistemi |
| 3 | **HFCWO Göğüs Terapi** | Yüksek frekanslı göğüs duvarı osilasyonu ile etkin mukus temizliği |
| 4 | **Giyilebilir Holter Yelek** | Uzun süreli ve konforlu kardiyak izleme çözümü |
| 5 | **AI Destekli EKG Yelek** | Yapay zeka algoritmaları ile desteklenen ileri seviye EKG analizi |
| 6 | **Dijital Sağlık Platformu** | Uzaktan izleme ve yönetim için kapsamlı web paneli |
| 7 | **Mobil Uygulama** | Hasta ve doktor kullanıcılar için mobil sağlık uygulaması |

---

## 🤝 Sektör İşbirlikleri

- [Atatürk Üniversitesi](https://atauni.edu.tr/)
- [Sakarya Uygulamalı Bilimler Üniversitesi](https://subu.edu.tr/)
- [Bilişim Vadisi](https://bilisimvadisi.com.tr/)
- [Ata Teknokent](https://www.atateknokent.com.tr/)
- TÜBİTAK, TÜSEB, KOSGEB, SBÜ Teknopark

---

## 🌐 Dağıtım (Deploy)

Proje statik export modunda çalıştığından, build edildikten sonra herhangi bir statik hosting platformunda barındırılabilir:

```bash
# Production build oluştur
npm run build

# Build çıktısı out/ klasöründedir
# Bu klasörü herhangi bir statik sunucuya yükleyebilirsiniz
```

**Desteklenen platformlar:**
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Herhangi bir statik dosya sunucusu

---

## 👨‍💻 Geliştirici

<table>
  <tr>
    <td align="center">
      <strong>Ömer ERTAN</strong><br/>
      <em>Geliştirici</em>
    </td>
  </tr>
</table>

---

## 📜 Lisans

Bu proje özel lisans altındadır. Tüm hakları saklıdır.

**© 2026 Medyes Sağlık Teknolojileri**
