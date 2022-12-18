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


/* Всплывающее окно*/

(function () {
const closeModalWindow = document.getElementById('ModalClose');
const modalWindow = document.getElementById('modalWindow');
setTimeout (function (openingModalWindow) {
    modalWindow.classList.remove('hiddenModal'); 
}, 7000);
setTimeout (function (autoClosingModalWindow) {
    modalWindow.classList.add('hiddenModal'); 
}, 20000);
closeModalWindow.addEventListener('click', function (closingModalWindow) {
    modalWindow.classList.add('hiddenModal');
});
}) ();
