const login_username = document.querySelector(".login-username");
const login_password = document.querySelector(".login-password");
const login_btn = document.querySelector(".login-btn");

 

function Run() {
    const username_value = login_username.value.trim();
    const password_value = login_password.value.trim();

    // Girilen değerlerin boş olup olmadığını kontrol et
    if (username_value === '' || password_value === '') {
        alert("Kullanıcı adı ve parola alanları boş bırakılamaz.");
        return;
    }

    // Girilen değerlerin sadece harf içerip içermediğini kontrol et
    if (!HarfKontrol(username_value)) {
        alert("Kullanıcı adı ve parola sadece harf içerebilir.");
        return;
    }

    // Girilen metinlerin uzunluğunu kontrol et
    if (username_value.length < 5 || username_value.length > 10 || password_value.length < 5 || password_value.length > 10) {
        alert("Kullanıcı adı ve parola 5 ile 10 karakter arasında olmalıdır.");
        return;
    }

    // Tüm koşullar sağlandığında işleme devam et
    window.location.href = "İndex.html";
}

// Verilen metnin sadece harf içerip içermediğini kontrol eden fonksiyon
function HarfKontrol(text) {
    return /^[a-zA-Z]+$/.test(text);
}
 
