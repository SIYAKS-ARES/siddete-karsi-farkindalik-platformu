# Şiddete Karşı Farkındalık Platformu

Bu proje, kadınlara yönelik şiddet konusunda farkındalık yaratmayı ve toplumu bilgilendirmeyi amaçlayan bir web platformudur. Şiddetin önlenmesi ve mağdurlara destek olunması için bilgilendirici kaynaklar, interaktif araçlar ve bilinçlendirme materyalleri sunar. Proje, toplumsal cinsiyet eşitliği temeline dayalı bir bilinç oluşturmayı hedefler.

## 📌 Amaç ve Hedefler

- Kadına yönelik şiddet konusunda toplumu bilinçlendirmek.
- Şiddet mağdurlarına destek ve yönlendirme sağlamak.
- Güvenilir bilgi kaynaklarını kullanıcılarla paylaşmak.
- Toplumda farkındalık yaratmak için interaktif araçlar geliştirmek.

---

## 🚀 Platform Özellikleri

### 1. **Anıt Sayaç**

Kadına yönelik şiddet sonucu hayatını kaybeden kadınların anısına bir sayaç bulunmaktadır. Bu sayaç, farkındalık yaratmayı ve toplumu bu konuda harekete geçmeye teşvik etmeyi hedefler.

### 2. **Şiddet Haritası**

Türkiye genelindeki şiddet önleme ve izleme merkezlerinin (ŞÖNİM) lokasyon bilgileri harita üzerinde görselleştirilmiştir. Bu özellik, kullanıcılara ihtiyaç duydukları destek merkezine ulaşmada kolaylık sağlar.

### 3. **Bilgilendirici İçerikler**

- **İstanbul Sözleşmesi**: İstanbul Sözleşmesi’nin kapsamı, önemi ve sağladığı haklar detaylı şekilde açıklanmıştır.
- **6284 Sayılı Kanun**: Şiddeti önlemeye yönelik yasal düzenlemeler hakkında rehberlik sağlar.
- **Şiddet Döngüsü**: Şiddetin dinamiklerini anlamaya yönelik görseller ve açıklamalar sunar.

### 4. **Yönetici Paneli**

Platform yöneticilerinin içerikleri kolayca yönetebilmesi için bir arayüz tasarlanmıştır. Bu panel sayesinde sayfa içerikleri düzenlenebilir ve yeni içerikler eklenebilir.

### 5. **Etkileşimli Giriş ve Formlar**

Kullanıcılar, görüş ve önerilerini paylaşabilmek için özel form mekanizmalarını kullanabilir.

---

## 🛠️ Teknolojiler ve Araçlar

- **Frontend**: HTML, CSS, JavaScript
- **Harita API**: Google Maps API entegrasyonu
- **Backend**: JSON tabanlı veri yönetimi
- **Tasarım Desenleri**: MVC mimarisi
- **Yönetici Paneli**: Formlar ve kontrol araçları

---

## 📂 Proje Yapılandırması

.
├── public/
│   ├── css/                 # Stil dosyaları
│   ├── js/                  # JavaScript dosyaları
│   ├── images/              # Görseller
├── templates/
│   ├── anaSayfa.html        # Ana sayfa
│   ├── adminPanel.html      # Yönetici paneli
│   ├── harita.html          # Şiddet haritası
│   ├── anitSayac.html       # Anıt sayaç
│   ├── istanbulSozlesmesi.html
│   ├── siddetDongusu.html
│   └── hakkimizda.html      # Hakkımızda
└── app.js                   # Uygulama ana dosyası

---

## 🔗 Kurulum

Projeyi yerel bir ortamda çalıştırmak için şu adımları izleyin:

1. Bu repoyu klonlayın:

   ```bash
   git clone https://github.com/SIYAKS-ARES/siddete-karsi-farkindalik-platformu.git

2. Proje dizinine gidin:

   ```bash
   cd siddete-karsi-farkindalik-platformu

3. Tarayıcıda çalıştırmak için anaSayfa.html dosyasını açın.

🌟 Katkı Sağlama

Bu projeye katkı sağlamak isterseniz lütfen şu adımları izleyin:

1. Fork yapın.

2. Yeni bir dal oluşturun:

   ```bash
   git checkout -b ozellik-adi

3. Değişikliklerinizi yapın ve commit edin:

   ```bash
   git commit -m "Yeni özellik eklendi"

4. Dalınızı gönderin:

   ```bash
   git push origin ozellik-adi

5. Pull Request oluşturun.

📜 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasını inceleyebilirsiniz.

💡 Not

Bu platform yalnızca bilgilendirme amacıyla geliştirilmiştir ve profesyonel hukuki ya da psikolojik destek yerine geçmez. Acil durumlarda lütfen resmi kurumlara başvurun.
