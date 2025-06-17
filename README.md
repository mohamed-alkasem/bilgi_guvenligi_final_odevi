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

![image](https://github.com/user-attachments/assets/56a7c8ad-24db-4e92-8ce7-2f79d8b0b000)

SHA256 Özeti Dosya Şifrele

![image](https://github.com/user-attachments/assets/8e2375c7-8ba0-44fd-bbf1-a6eeeca4968b)


