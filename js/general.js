function registrationAlert() {
    alert('Функция входа еще не реализована')
    window.location = "register.html";
}

function registerForm(el) {
    var userName = el.user_name.value;
    var email = el.email.value;
    var pol = el.pol.value;
    var userPass = el.user_pass.value;
    var userRepass = el.user_repass.value;
    var res;

    if (userName == "" || email == "" || pol == "" || userPass == "" || userRepass == "") {
        res = ("Заполните все поля");
    }
    else if (userName.length < 2 || userName.length > 20) {
        res = ("Неккоректная длина имени");
    }
    else if (userPass !== userRepass) {
        res = ("Введенные пароли не совпадают")
    }
    else if (userPass.length < 6) {
        res = ("Пароль должен состоять не менее чем из 6 символов");
    }

    if (res !== undefined) {
        document.getElementById('error').innerHTML = res;
        return false;
    }
    else {
        if (pol == "Мужской") {
            alert("Привет, " + userName + "! Теперь ты мой друг! Я отправлю тебе подтверждение нашей дружбы на твою почту - "
                + email + ". Хорошего дня!");
            return true;
        }
        else {
            alert("Привет, " + userName + "! Теперь ты моя подруга! Я отправлю тебе подтверждение нашей дружбы на твою почту - "
                + email + ". Хорошего дня!");
            return true;
        }
    }

}