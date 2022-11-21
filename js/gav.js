/*Алерт при открытии страницы NEXT*/
var data = confirm("Нажми ОК");
if (data) {
    alert("Гаф!");
} else {
    alert("Ррр-рррр-рррр!!!!");
}

/*По очереди выводим в консоль что в next.html забито в тегах span*/
var abc = document.getElementsByTagName('span');
for (var i = 0; i < abc.length; i++) {
    console.log(abc[i].innerHTML);
}
