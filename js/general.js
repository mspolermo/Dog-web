/*Функция уведомления что нереализации входа*/
function registrationAlert() {
    alert('Функция входа еще не реализована :(');
    window.location = "register.html";
}

/*Функция редиректа на страницу регистрации*/
function reDirectToRegister() {
    window.location = "register.html";
    return
}

/*Функция распознавания введённых в формы данных*/
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
            alert("Привет, " + userName + "! Теперь ты мой друг! Скоро я отправлю тебе подтверждение нашей дружбы на твою почту - "
                + email + ". Хорошего дня!");
            return true;
        }
        else {
            alert("Привет, " + userName + "! Теперь ты моя подруга! Скоро я отправлю тебе подтверждение нашей дружбы на твою почту - "
                + email + ". Хорошего дня!");
            return true;
        }
    }

}

/*Функция скрытия-открытия меню по кнопке*/
function openMenu() {
    document.getElementById('sidebar').classList.toggle('hidden');
    document.getElementById('main').classList.toggle('wiser');
}

/*Слайдер для иконки в верхнем углу*/
{
const sliderHead = document.querySelector('#sliderHead'); /*присваиваем к константе div с id=sliderHead*/
const sliderHeadItems = Array.from(sliderHead.children); /* записываем в константу детей div sliderHead (там фотки), формат данных будет - HTML collection
HTML collection - массивоподобная структура, через Array.from() преобразуем его в массив*/
sliderHeadItems.forEach(function (slideHead, indexHead) { /*объявляем функцию для каждого элемента массива*/
    /*Скрываем все слайды кроме первого*/
    if (indexHead != 0) {
        slideHead.classList.add('hiddenHead') /*добавляем css класс ко слайдам кроме первого, чтобы скрыть их*/
    }
    /*Добавляем дата-индексы для слайдов (они в строчном формате выводяться если что, не в числовом)*/
    slideHead.dataset.index = indexHead;
    /*Добавляем data-атрибут active для первого\активного слайда*/
    sliderHeadItems[0].setAttribute('dataHead-active', '');


    /*Реализация клика по слайдам*/
    slideHead.addEventListener('click', function () { /*Остлеживаем клик по слайду, после него выполняем функцию*/

        slideHead.classList.add('hiddenHead'); /*скрываем текущий слайд*/
        slideHead.removeAttribute('dataHead-active'); /*удаляем атрибут активного слайда*/

        /*Рассчитываем индекс следующего слайда. Если следующего не существует, то начинаем заново*/
        let nextSlideHeadIndex;
        if (indexHead + 1 === sliderHeadItems.length) {
            nextSlideHeadIndex = 0;
        } else {
            nextSlideHeadIndex = indexHead + 1;
        }

        const nextSlideHead = sliderHead.querySelector(`[data-index="${nextSlideHeadIndex}"]`); /*Ищем следущий слайд на странице*/

        nextSlideHead.classList.remove('hiddenHead'); /*Отображаем следующий слайд*/
        nextSlideHead.setAttribute('dataHead-active', ''); /*устанавливаем атрибут активного слайда*/
    })
});
}

/*Работа поп-апа*/
(function (){
    const openPopUp = document.getElementById('reg');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');
    openPopUp.addEventListener('click', function (openingPopUp) /*Вешаем отслеживатель действить на кнопку, он будет ждать клика. Объявляем
     функцию, в ней прописываем чтоб по нажатию кнопки страница не обновлялась и в url ничего не прописывалось*/ {
        openingPopUp.preventDefault();
        popUp.classList.add('active'); /*программа меняет класс для объекта pop_up на active. этот класс прописан в css*/
    });
    closePopUp.addEventListener('click', function (closingPopUp) {
        popUp.classList.remove('active'); /*тоже самое только убирает класс active с объекта*/
    });
    }) ();
    
    
