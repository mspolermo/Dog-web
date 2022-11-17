console.warn("Предупреждение");
var num1 = "118";
var num2 = "2";
console.log("Результат:" + (Number(num1) + Number(num2)));
var mass = [["a", "b", "c"], [1, 2, 3], [true, false]];
console.log(mass);


function bankok(word) {
    console.log(word + " Привет!")
}

word = "Добрый человек Vasya";
bankok(word);


function summa(arr) {
    var sum = 0;
    var i = 0;
    for (i; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum;
}

var arr = [4, 2, 6, 5, 7, 4];
var res = summa(arr);
console.log(res);