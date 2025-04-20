let tg = window.Telegram.WebApp;  
tg.expand();  
tg.MainButton.textColor = "#FFFFFF";  
tg.MainButton.color = "#2cab37";  

let item = "";  
let currentForecast = ""; // Переменная для хранения текущего прогноза  

// Прогнозы для каждого знака зодиака  
const forecasts = {  
    '1': 'Сегодня вам стоит обратить внимание на свои эмоции и избегать конфликтов. Вам повезёт в дружбе!',  
    '2': 'Время для принятия важных решений. Не бойтесь проявить инициативу и следовать своим целям.',  
};  

// Находим кнопки  
let btn1 = document.getElementById("btn1");  
let btn2 = document.getElementById("btn2");  

// Добавляем обработчики событий для кнопок  
btn1.addEventListener("click", function () {  
    if (tg.MainButton.isVisible) {  
        tg.MainButton.hide();  
    } else {  
        tg.MainButton.setText("Вывести информацию по Овну");  
        item = "1"; // Устанавливаем код для Овна  
        tg.MainButton.show();  
        currentForecast = forecasts[item]; // Сохраняем прогноз  
    }  
});  

btn2.addEventListener("click", function () {  
    if (tg.MainButton.isVisible) {  
        tg.MainButton.hide();  
    } else {  
        tg.MainButton.setText("Вывести информацию по Тельцу");  
        item = "2"; // Устанавливаем код для Тельца  
        tg.MainButton.show();  
        currentForecast = forecasts[item]; // Сохраняем прогноз  
    }  
});  

// Обработчик клика на основной кнопке  
Telegram.WebApp.onEvent("mainButtonClicked", function () {  
    tg.sendData(item); // Отправляем код знака зодиака  
    alert(currentForecast); // Выводим краткий прогноз в алерте  
});  
