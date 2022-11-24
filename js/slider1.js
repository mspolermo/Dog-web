const slider = document.querySelector('#slider'); /*присваиваем к константе div с id=slider*/
const sliderItems = Array.from(slider.children); /* записываем в константу детей div slider (там фотки), формат данных будет - HTML collection
HTML collection - массивоподобная структура, через Array.from() преобразуем его в массив*/
const btnNext = document.querySelector('#btnNext'); /*Создаем константу для кнопки с id=btnNext*/
const btnPrev = document.querySelector('#btnPrev'); /*Создаем константу для кнопки с id=btnPrev*/

/*Реализация слайдера по клику на фото*/
sliderItems.forEach(function (slide, index) { /*объявляем функцию для каждого элемента массива*/
    /*Скрываем все слайды кроме первого*/
    if (index != 0) {
        slide.classList.add('hidden') /*добавляем css класс ко слайдам кроме первого, чтобы скрыть их*/
    }
    /*Добавляем дата-индексы для слайдов (они в строчном формате выводяться если что, не в числовом)*/
    slide.dataset.index = index;
    /*Добавляем data-атрибут active для первого\активного слайда*/
    sliderItems[0].setAttribute('data-active', '');


    /*Реализация клика по слайдам*/
    slide.addEventListener('click', function () { /*Остлеживаем клик по слайду, после него выполняем функцию*/

        slide.classList.add('hidden'); /*скрываем текущий слайд*/
        slide.removeAttribute('data-active'); /*удаляем атрибут активного слайда*/

        /*Рассчитываем индекс следующего слайда. Если следующего не существует, то начинаем заново*/ 
        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`); /*Ищем следущий слайд на странице*/

        nextSlide.classList.remove('hidden'); /*Отображаем следующий слайд*/
        nextSlide.setAttribute('data-active', ''); /*устанавливаем атрибут активного слайда*/
    })});

/*Реализация кнопки Дальше*/
btnNext.onclick = function () {

    const currentSlide = slider.querySelector('[data-active]'); /*Утсанавливаем константу для (текущего) слайда с атрибутом data-index*/
    const currentSlideIndex = +currentSlide.dataset.index; /*Узнаем индекс текущего слайда и записываем его в константу. + для преобразования в число*/
    currentSlide.classList.add('hidden'); /*Скрываем текущий слайд*/
    currentSlide.removeAttribute('data-active'); /*Удаляем атрибут активного слайда*/

    /*Рассчитываем индекс следующего слайда. Если следующего не существует, то начинаем заново*/
    let nextSlideIndex;
    if (currentSlideIndex + 1 === sliderItems.length) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`); /*Ищем следущий слайд на странице*/

    nextSlide.classList.remove('hidden'); /*Отображаем следующий слайд*/
    nextSlide.setAttribute('data-active', ''); /*устанавливаем атрибут активного слайда*/
}

/*Реализация кнопки Назад*/
btnPrev.onclick = function () {

    const currentSlide = slider.querySelector('[data-active]'); /*Утсанавливаем константу для (текущего) слайда с атрибутом data-index*/
    const currentSlideIndex = +currentSlide.dataset.index; /*Узнаем индекс текущего слайда и записываем его в константу. + для преобразования в число*/
    currentSlide.classList.add('hidden'); /*Скрываем текущий слайд*/
    currentSlide.removeAttribute('data-active'); /*Удаляем атрибут активного слайда*/

    /*Рассчитываем индекс предыдущего слайда. Если предыдущего не существует, то начинаем заново*/
    let nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = sliderItems.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`); /*Ищем следущий слайд на странице*/

    nextSlide.classList.remove('hidden'); /*Отображаем следующий слайд*/
    nextSlide.setAttribute('data-active', ''); /*устанавливаем атрибут активного слайда*/
}