# INFINITALKS

## Teknoloji Konulu Sosyal Blog Sitesi

INFINITALKS, teknoloji dünyasından haberleri ve gönderileri paylaşmak için kullanılan bir sosyal blog sitesidir. MERN mimarisini kullanan uygulama, kullanıcıların kayıt olup giriş yapmasına, haberleri ve gönderileri paylaşmasına, başka kullanıcıların paylaştıklarını okumasına ve düzenlemesine olanak tanır.

## Uygulamanın Videosu

## Teknik Detaylar

Uygulama, MongoDB veritabanı üzerinde çalışır. Kullanıcı kayıtları, şifreler bcrypt ile şifrelenerek veritabanına kaydedilir. Arka uç işlemleri Express ve Node.js ile yapılır.

Uygulama, iki ana klasör altında çalışır:

* **Client:** React uygulamasının bulunduğu klasördür.
* **API:** MongoDB veritabanı ve arka uç işlemlerinin bulunduğu klasördür.

## Uygulama Nasıl Çalışır?

Kullanıcılar, kayıt olma ekranında kullanıcı adı ve parolası ile kayıt olurlar. Bu bilgiler veritabanına kaydedilir.

Kayıt olan kullanıcılar, giriş yaparak istedikleri teknoloji dünyasından haberleri paylaşabilirler. Başka kullanıcıların paylaştığı haberlere ve gönderilere de göz atabilirler. Kendi paylaştıkları gönderileri de düzenleme yetkisine sahiptirler.

Gönderilen haberlerin ve gönderilerin bilgileri (resim, yazı, başlık, bağlantı vb.) veritabanı üzerine yazılır.

## Özellikler

* Kullanıcı kayıt ve giriş
* Teknoloji dünyasından haber ve gönderi paylaşımı
* Haber ve gönderi okuma
* Haber ve gönderi düzenleme

## Geliştirme Planları

* Arama özelliğinin eklenmesi
* Kullanıcı profilinin geliştirilmesi
* Yorum özelliğinin eklenmesi
* Daha fazla güvenlik önleminin alınması

## Kullanılan Teknolojiler

* Frontend: React
* Backend: Express, MongoDB
* Veri tabanı: MongoDB
* Şifreleme: bcrypt


## Create React App ile Başlangıç

Bu proje, Create React App ile oluşturuldu.

## Kullanılabilir Komutlar
Proje dizininde şu komutları çalıştırabilirsiniz:
### `yarn start`
Uygulamayı geliştirme modunda çalıştırır. Tarayıcınızda görüntülemek için http://localhost:3000 adresini açın.

Değişiklik yaptığınızda sayfa yeniden yüklenecektir. Konsolda olası lint hatalarını da görebilirsiniz.

### `yarn test`
Test çalıştırıcısını etkileşimli izleme modunda başlatır. Daha fazla bilgi için test çalıştırma: https://facebook.github.io/create-react-app/docs/running-tests bölümüne bakın.

### `yarn build`
Uygulamayı üretim için build klasörüne oluşturur. React'i üretim modunda doğru şekilde paketler ve en iyi performans için yapıyı optimize eder.

Oluşturulan dosya küçültülür ve dosya adları karmaları içerir. Uygulamanız dağıtıma hazır!

Daha fazla bilgi için dağıtım: https://facebook.github.io/create-react-app/docs/deployment bölümüne bakın.

### `yarn eject`
**Not: Bu tek yönlü bir işlemdir. Bir kez eject yaptığınızda geri dönemezsiniz!**

Derleme aracı ve yapılandırma seçeneklerinden memnun değilseniz, istediğiniz zaman eject yapabilirsiniz. Bu komut, projenizden tek derleme bağımlılığını kaldıracaktır.

Bunun yerine, tüm yapılandırma dosyalarını ve geçişli bağımlılıkları (webpack, Babel, ESLint, vb.) doğrudan projenize kopyalar, böylece onlar üzerinde tam kontrol sahibi olursunuz. eject komutu dışındaki tüm komutlar çalışmaya devam eder, ancak değiştirilebilmeleri için kopyalanan komut dosyalarını işaret ederler. Artık kendi başınızasınız.

eject komutunu kullanmak zorunda değilsiniz. Özenle seçilmiş özellik seti, küçük ve orta ölçekli dağıtımlar için uygundur ve bu özelliği kullanmak zorunda hissetmemelisiniz. Ancak, hazır olduğunuzda özelleştiremeseydiniz bu aracın kullanışlı olmayacağının farkındayız.

## Diğer Bilgiler

* Projenin adı: INFINITALKS
* Projenin sahibi: Mertcan Alkan
* Projenin URL'si: https://github.com/Mertalkann/InfiniTalks
* Lisans: MIT
* İletişim: mertalkan00@gmail.com üzerinden iletişime geçebilirsiniz.
* Değişiklikler: Bu README dosyası, projenin gelişimine paralel olarak güncellenecektir.
