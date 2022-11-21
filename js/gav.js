var data = confirm("Нажми ОК");
if (data) {
    alert("Гаф!");
} else {
    alert("Ррр-рррр-рррр!!!!");
}

var abc = document.getElementsByTagName('span');
for (var i = 0; i < abc.length; i++) {
    console.log(abc[i].innerHTML);
}

document.getElementById('lolkek').style.color = "red";

function registerForm() {
    var userName = document.getElementById('user_name');
    var email = document.getElementById('email');
    var pol = document.getElementById('pol');
    var user_pass = document.getElementById('user_pass');
    var user_repass = document.getElementById('user_pass');
    var res = ("Привет" + userName);
    console.log(res);
    return res;
}