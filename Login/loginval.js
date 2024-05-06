function validateForm(event) {

    event.preventDefault(); //Biar habis submit ga refresh

    //Ambil semua value dari form
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var checkbox = document.querySelector('input[name="checkbox"]:checked')

    var isValid = true
    //Validate Name harus lebih dari 5 karakter
    if(name.length < 6){
        alert('Name must be at least 5 characters')
        isValid = false
    }

    //Validasi email
    if(isValidEmail(email) == false){
        alert('Email is invalid')
        isValid = false
    }

    //Validasi password harus alpha numeric
    if(isAlphanumeric(password) == false){
        alert('Password must contain letters and numbers')
        isValid = false
    }

    if(checkbox == null){
        alert('You must agree to our terms and conditions')
        isValid = false
    }

    //
    if(isValid == false){
        alert('Please submit the correct form')
        isValid = false
    }else{
        // document.getElementById('form').onsubmit()

        window.location.href="../homepage/home.html"
    }

}

function isAlphanumeric(password){
    //harus ada huruf dan angka, no symbols
    var huruf = false
    var angka = false
    var symbol = false

    for (let index = 0; index < password.length; index++) {

        if(password[index] >= 'a' && password[index] <= 'z'){
             huruf = true
        }else if(password[index] >= 'A' && password[index] <= 'Z'){
            huruf = true
        }else if(password[index] >= '0' && password[index] <= '9'){
            angka = true
        }else{
            symbol = true
        }
        
    }

    if(symbol == true){
        return false
    }else if(angka == true && huruf == true){
        return true
    }else{
        return false
    }
}

function isValidEmail(email) {
    //harus ada simbol @
    if(email.indexOf('@') == -1){
        return false
    }
    //simbol @ tidak boleh di depan
    if(email.indexOf('@') == '0'){
        return false
    }
    //harus ada titik
    if(email.indexOf('.') == '-1'){
        return false
    }
    //titik tidak boleh di depan
    if(email.indexOf('.') == '0'){
        return false
    }
    //email tidak boleh kosong
    if(email == ''){
        return false
    }

    return true
}

function validateForm2(event) {

    event.preventDefault(); //Biar habis submit ga refresh

    //Ambil semua value dari form
    var emailr = document.getElementById('emailr').value
    var passwordr = document.getElementById('passwordr').value

    var isValid = true

    //Validasi email
    if(isValidEmail(emailr) == false){
        alert('Email is invalid')
        isValid = false
    }

    //Validasi password harus alpha numeric
    if(isAlphanumeric(passwordr) == false){
        alert('Password must contain letters and numbers')
        isValid = false
    }

    //
    if(isValid == false){
        alert('Please submit the correct form')
        isValid = false
    }else{
        // document.getElementById('form').onsubmit()

        window.location.href="../homepage/home.html"
    }

}

function isAlphanumeric(passwordr){
    //harus ada huruf dan angka, no symbols
    var huruf = false
    var angka = false
    var symbol = false

    for (let index = 0; index < passwordr.length; index++) {

        if(passwordr[index] >= 'a' && passwordr[index] <= 'z'){
             huruf = true
        }else if(passwordr[index] >= 'A' && passwordr[index] <= 'Z'){
            huruf = true
        }else if(passwordr[index] >= '0' && passwordr[index] <= '9'){
            angka = true
        }else{
            symbol = true
        }
        
    }

    if(symbol == true){
        return false
    }else if(angka == true && huruf == true){
        return true
    }else{
        return false
    }
}

function isValidEmail(emailr) {
    //harus ada simbol @
    if(emailr.indexOf('@') == -1){
        return false
    }
    //simbol @ tidak boleh di depan
    if(emailr.indexOf('@') == '0'){
        return false
    }
    //harus ada titik
    if(emailr.indexOf('.') == '-1'){
        return false
    }
    //titik tidak boleh di depan
    if(emailr.indexOf('.') == '0'){
        return false
    }
    //email tidak boleh kosong
    if(emailr == ''){
        return false
    }

    return true
}