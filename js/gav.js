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