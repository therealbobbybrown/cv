/* Это объявление переменной, мы нашли кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обработчик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Если Вы в поиске крутого тестировщика, напишите мне в телегу) +79166386112')
})