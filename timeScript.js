function updateTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);
