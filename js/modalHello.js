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
