
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    
    document.getElementById('generateKeysBtn').addEventListener('click', function() {
        try {
            const keyPair = KEYUTIL.generateKeypair("RSA", 2048);
      
            const publicKey = KEYUTIL.getPEM(keyPair.pubKeyObj);
            const privateKey = KEYUTIL.getPEM(keyPair.prvKeyObj, "PKCS8PRV");
            
            document.getElementById('publicKey').value = publicKey;
            document.getElementById('privateKey').value = privateKey;
            
            document.getElementById('publicKeyEncrypt').value = publicKey;
            document.getElementById('privateKeyDecrypt').value = privateKey;
            
            showAlert('success', 'RSA anahtar çifti başarıyla oluşturuldu!');
        } catch (e) {
            console.error("RSA Key Generation Error:", e);
            showAlert('error', `Anahtar oluşturma hatası: ${e.message}`);
        }
    });

    document.getElementById('shaSelectType').addEventListener('change', function() {
        const type = this.value;
        document.getElementById('shaTextGroup').style.display = type === 'text' ? 'block' : 'none';
        document.getElementById('shaFileGroup').style.display = type === 'file' ? 'block' : 'none';
    });

    document.getElementById('shaBtn').addEventListener('click', function() {
        const type = document.getElementById('shaSelectType').value;
        if (type === 'text') {
            const input = document.getElementById('shaInput').value.trim();
            if (!input) {
                showAlert('warning', 'Lütfen metin giriniz.');
                return;
            }

            try {
                const hashHex = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
                document.getElementById('shaOutput').value = hashHex;
                showAlert('success', 'SHA256 özeti oluşturuldu!');
            } catch (e) {
                console.error("SHA256 Text Hashing Error:", e);
                showAlert('error', `Metin özetleme hatası: ${e.message}`);
            }
        } else if (type === 'file') {
            const fileInput = document.getElementById('shaFile');
            if (!fileInput.files || fileInput.files.length === 0) {
                showAlert('warning', 'Lütfen bir dosya seçiniz.');
                return;
            }

            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                try {
                    const wordArray = CryptoJS.lib.WordArray.create(e.target.result);
                    const hashHex = CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Hex);
                    document.getElementById('shaOutput').value = hashHex;
                    showAlert('success', 'Dosya özeti oluşturuldu!');
                } catch (e) {
                    console.error("SHA256 File Hashing Error:", e);
                    showAlert('error', `Dosya özetleme hatası: ${e.message}`);
                }
            };

            reader.onerror = function() {
                showAlert('error', 'Dosya okunurken hata oluştu.');
            };

            reader.readAsArrayBuffer(file);
        }
    });

document.getElementById('encryptBtn').addEventListener('click', function () {
    const plainText = document.getElementById('plainTextEncrypt').value.trim();
    const publicKeyPEM = document.getElementById('publicKeyEncrypt').value.trim();

    if (!plainText) {
        showAlert('warning', 'Lütfen şifrelenecek metin giriniz.');
        return;
    }

    if (!publicKeyPEM || !publicKeyPEM.includes('-----BEGIN PUBLIC KEY-----')) {
        showAlert('warning', 'Geçerli bir açık anahtar giriniz.');
        return;
    }

    try {
        const pubKey = KEYUTIL.getKey(publicKeyPEM);
        const encryptedHex = pubKey.encrypt(plainText);
        const encryptedB64 = hextob64(encryptedHex);

        document.getElementById('encryptedText').value = encryptedB64;
        showAlert('success', 'Metin başarıyla şifrelendi!');
    } catch (e) {
        console.error("Encryption Error:", e);
        showAlert('error', `Şifreleme hatası: ${e.message}`);
    }
});


document.getElementById('decryptBtn').addEventListener('click', function () {
    const encryptedB64 = document.getElementById('encryptedTextInput').value.trim();
    const privateKeyPEM = document.getElementById('privateKeyDecrypt').value.trim();

    if (!encryptedB64) {
        showAlert('warning', 'Lütfen şifrelenmiş metin giriniz.');
        return;
    }

    if (!privateKeyPEM || !privateKeyPEM.includes('-----BEGIN PRIVATE KEY-----')) {
        showAlert('warning', 'Geçerli bir özel anahtar giriniz.');
        return;
    }

    try {
        const prvKey = KEYUTIL.getKey(privateKeyPEM);
        const decrypted = prvKey.decrypt(b64tohex(encryptedB64));

        document.getElementById('decryptedText').value = decrypted;
        showAlert('success', 'Şifre başarıyla çözüldü!');
    } catch (e) {
        console.error("Decryption Error:", e);
        showAlert('error', `Şifre çözme hatası: ${e.message}`);
    }
});


    function showAlert(type, message) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert alert-${type}`;
        alertBox.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 5000);
    }

    document.getElementById('publicKey').addEventListener('change', function() {
        document.getElementById('publicKeyEncrypt').value = this.value;
    });

    document.getElementById('privateKey').addEventListener('change', function() {
        document.getElementById('privateKeyDecrypt').value = this.value;
    });
});