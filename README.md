canlı denemek için https://mohamed-alkasem.github.io/bilgi_guvenligi_final_odevi/

Aşağıdaki görselde RSA şifreleme algoritması için özel (private) ve genel (public) anahtarların nasıl üretildiği gösterilmektedir.

![image](https://github.com/user-attachments/assets/6ef8ded0-ebd6-4d2c-a1e0-a77433c003b1)


Aşağıdaki görselde, RSA şifreleme sistemi kullanılarak "mohamad alkassem" metninin nasıl şifrelendiği adım adım gösterilmiştir. İşte detaylı açıklaması:
1. Metni Şifrele (Soldaki Kısım)
Şifrelenecek Metin:
Kullanıcı "mohamad alkassem" metnini yazıyor.

Açık Anahtar (Public Key):
RSA şifrelemede kullanılan herkesin erişebileceği açık anahtar buraya yapıştırılıyor.
Bu anahtar, sadece şifreleme işleminde kullanılır.

[🔒 Şifrele] Butonuna Basıldığında:
RSA algoritması, "mohamad alkassem" metnini alır ve açık anahtarla şifreler.

Şifrelenmiş Metin:
Alt kısımda, base64 formatında uzun bir şifreli metin oluşur. Bu veriyi sadece özel anahtara sahip olan kişi çözebilir.
2. Şifreyi Çöz (Sağdaki Kısım)
Şifrelenmiş Metin:
Solda oluşturulan şifreli veri buraya kopyalanabilir.

Özel Anahtar (Private Key):
Bu anahtar sadece alıcıda bulunur ve şifre çözme (decryption) için gereklidir.
Güvenli ve gizli tutulmalıdır.

[🔓 Şifreyi Çöz] Butonuna Basıldığında:
RSA algoritması, şifrelenmiş metni özel anahtar yardımıyla çözer ve orijinal metni geri verir:
"mohamad alkassem".

![image](https://github.com/user-attachments/assets/5b1670e4-a093-45ec-b1c2-f6a158fdefbf)

Aşağıdaki görselde, önceden RSA algoritmasıyla şifrelenmiş bir metnin çözülme (decryption) işlemi açıkça gösterilmektedir.
"Şifreyi Çöz" Adımı – RSA Decryption
1. Şifrelenmiş Metin (Soldan alınmış)
Soldaki "Metni Şifrele" bölümünde "mohamad alkassem" metni açık anahtar ile şifrelenmişti.
Ortaya çıkan uzun ve karmaşık şifreli metin (base64 formatında) şimdi sağdaki kısma yapıştırılmış.

2. Özel Anahtar (Private Key)
RSA algoritmasında sadece mesajın alıcısında bulunması gereken gizli anahtar buraya yapıştırılıyor.
Bu anahtar, şifreyi çözebilmek için gereklidir ve kimseyle paylaşılmamalıdır.

3. [🔓 Şifreyi Çöz] Butonuna Tıklanıyor
Kullanıcı "Şifreyi Çöz" butonuna bastığında:

RSA algoritması, şifrelenmiş metni alır,

Özel anahtar yardımıyla çözümler,

Ve orijinal metni geri verir.

4. Çözülmüş Metin (Alt Kısımda)
Metin başarıyla çözülmüş ve aşağıdaki kutuda tekrar "mohamad alkassem" olarak görüntülenmiştir.

Bu, sistemin doğru çalıştığını ve RSA algoritmasının güvenli bir şekilde şifreleme/çözme işlemlerini gerçekleştirdiğini gösterir.



![image](https://github.com/user-attachments/assets/7d479c08-a37e-4838-834f-d5de2b2490ce)

Aşağıdaki görselde, "mohamad alkassem" metni SHA256 özeti (hash) ile şifrelenmektedir.
🔐 Aşağıdaki Görselde Ne Yapılıyor?
✅ SHA256 Özeti Oluşturuluyor
Giriş Metni:
Sağ tarafta "mohamad alkassem" metni SHA256 için girilmiş.

[🧮 Özet Oluştur] Butonuna Basıldığında:
SHA256 algoritması bu metni alır ve sabit uzunlukta bir özet (hash) değeri üretir.

SHA256 Özeti (Alt Kısımda):
Üretilen değer:
b0e522ae4a51dd8aa03fd8af7867aaaab5c9aef12220eeab5cc44052e4613e48

![image](https://github.com/user-attachments/assets/27423798-21ac-4c56-a3d8-8ab4c41ee0a1)

 SHA256 Özeti Dosya Seçme
Bu görselde bir dosyayı SHA256 algoritmasıyla özetlemek için işlem yapıyoruz.

Burada, giriş türü olarak “Dosya” seçiyoruz. Yani metin yerine bir dosyanın SHA256 özeti oluşturulacak.

"Choose File" butonuna tıkladığımızda dosya seçme penceresi açılıyor.

Bu kısımda "rapor4.docx" adlı dosyayı özetlemek için seçiyoruz.

Dosya seçildikten sonra "Özet Oluştur" butonuna tıklanarak, dosyanın SHA256 özeti (hash değeri) oluşturulur ve aşağıda gösterilir.

![image](https://github.com/user-attachments/assets/56a7c8ad-24db-4e92-8ce7-2f79d8b0b000)

📄 SHA256 Özeti Dosya Şifrele
Bu görselde, bir dosyanın SHA256 özeti (hash değeri) oluşturulmuştur.

Burada özet oluşturulacak giriş türü olarak “Dosya” seçilmiştir.

Daha sonra, SHA256 özeti alınacak dosya olarak “rapor4.docx” dosyası seçilmiştir.

“Özet Oluştur” butonuna basılarak dosyanın içeriğine göre SHA256 algoritmasıyla özet hesaplanmıştır.

Oluşturulan özet değeri (hash) aşağıda görüntülenmiştir:

ee153b7bb1b63f60116e4fa3c6a281d4f267b392ace5dd7f4e6b47904c0f885


![image](https://github.com/user-attachments/assets/8e2375c7-8ba0-44fd-bbf1-a6eeeca4968b)


🔐 Proje Tanımı – RSA ve SHA256 Şifreleme Aracı
Bu proje, kullanıcıların hem RSA anahtar çifti oluşturmasına, hem de metin veya dosyaları şifreleyip çözmesine ve ayrıca SHA256 özeti üretmesine olanak tanıyan bir web tabanlı şifreleme aracıdır.

⚙️ Projenin Temel Özellikleri:
🔑 1. RSA Anahtar Çifti Üretme
Kullanıcı “Anahtarları Üret” butonuna bastığında, 2048 bitlik bir RSA açık ve özel anahtar çifti oluşturulur.

Bu anahtarlar hem metin şifreleme hem de çözme için kullanılır.

Anahtarlar KEYUTIL kütüphanesi ile üretilmektedir.

✍️ 2. Metin Şifreleme (RSA)
Kullanıcı bir metin girer ve açık anahtar ile bu metin şifrelenir.

Şifreli veri base64 formatında kullanıcıya sunulur.

🔓 3. Şifre Çözme (RSA)
Kullanıcı şifrelenmiş metni ve özel anahtarı girerek, şifreyi çözebilir.

Çözülen orijinal metin arayüzde görüntülenir.

🔐 4. SHA256 Özeti Oluşturma
Kullanıcı, isterse bir metin isterse bir dosya için SHA256 özetini (hash) oluşturabilir.

CryptoJS kütüphanesi ile hem metin hem dosya içeriği üzerinden SHA256 özeti hesaplanır.

🚨 5. Uyarı ve Bildirim Sistemi
Her işlem sonrası kullanıcıya başarı, hata veya uyarı mesajları dinamik olarak gösterilir.

📌 Genel Amaç:
Bu proje, temel olarak bilgi güvenliği kavramlarını (şifreleme, dijital özet, anahtar yönetimi) öğretmek ve görsel olarak uygulamalı hâle getirmek için geliştirilmiştir.
Hem asimetrik şifreleme (RSA) hem de kriptografik özetleme (SHA256) algoritmaları pratikte nasıl çalışır, kullanıcı bunu görerek deneyimleyebilir.

