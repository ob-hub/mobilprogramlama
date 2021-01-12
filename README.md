# mobilprogramlama


terminalde proje yolu üzerindeyken;
- npm kullanıyorsanız
`npm install`

- yarn kullanıyorsanız
`yarn install`

## Android de, uygulamayı çalıştıramayanlar için bu adımları takip etmeleri önerilir.
#### [@askindurna](https://github.com/askindurna) 'ya teşekkür ederiz.

Git'den indirdigimiz mobilprogramlama-master.zip Dosyasını açtıktan sonra,
çıkartıgınız yerden klasorun içinde klasor olarak görünecektir.Aynı klasorunun içinde sadece tek dizin halinde taşıyın.

Örnek ; mobilprogramlama-master içinde mobilprogramlama-master : içinde tum dosyalar...
        ikinci dosyanın içinde tum dosyaları ilk dizinin içine taşıyın ve işlemleri gerçekleştirin.

Bende Proje dosyası D: Driverimda.

Programı çalıştırmadan önce;
sizde C' sürücü ise c olarak degiştirin ve klasor ismi assets oluşturulur.

`D:\Mobil-Programlama-Proje\mobilprogramlama-master\android\app\src\main`

assets klasoru oluşturulur.

programın path'in oldugu yerde;
`D:\Mobil-Programlama-Proje\mobilprogramlama-master ( Command Penceresinde)`

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

Enter tuşuna basılır.React-Natice mavi logosu gordugumuz zaman 10sn bekledikten sonra,Enter tuşuna basılır.bir dosya oluşturuluyor.

Bu Dosyada;

`D:\Mobil-Programlama-Proje\mobilprogramlama-master\android\app\src\main\assets  klasorunun içinde index.android.bundle oluşturulmuş oluyor.`


[Yukarı dosyayı oluşturmamızın nedeni; Bu linkte ki hata mesajını almamak için.](https://stackoverflow.com/questions/55441230/unable-to-load-script-make-sure-you-are-either-running-a-metro-server-or-that-yo)


```programı çalıştırırken,
Visual Code
     -  Üst sekmede Terminal Butonuna basılır.( Her iki komutun çalıştırılması için ayrı ayrı terminal açılır)
     -  ilk olarak    :         react-native start
     -  ikinci olarak :         react-native run-android
```
yazılır.Püf nokta; Android açılırken,yükleme biraz uzun sürebilir,bekleyelim.
Visual Code
