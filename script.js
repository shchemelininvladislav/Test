// Функция для обновления времени на странице
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.innerText = `${hours}:${minutes}:${seconds}`;
}

// Функция для получения прогноза погоды
async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Вставьте ваш ключ API от OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === '404') {
            alert('Город не найден');
        } else {
            const description = data.weather[0].description;
            const temperature = Math.round(data.main.temp);
            const cityName = data.name;

            document.getElementById('weather-description').innerText = description;
            document.getElementById('temperature').innerText = `${temperature}°C`;
            document.getElementById('city-name').innerText = cityName;
        }
    } catch (error) {
        console.error('Ошибка получения данных о погоде', error);
    }
}

// Обработчик нажатия кнопки для получения погоды
document.getElementById('get-weather').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Пожалуйста, введите город');
    }
});

// Обновление времени каждую секунду
setInterval(updateTime, 1000);

// Изначально обновим время
updateTime();
