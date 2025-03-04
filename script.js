// Элементы управления
const startStopBtn = document.getElementById('startStopBtn');
const speedControl = document.getElementById('speedControl');
const runner = document.querySelector('.runner');

let isRunning = true;

// Управление стартом/стопом
startStopBtn.addEventListener('click', () => {
  isRunning = !isRunning;
  if (isRunning) {
    runner.style.animationPlayState = 'running';
  } else {
    runner.style.animationPlayState = 'paused';
  }
});

// Управление скоростью
speedControl.addEventListener('input', (e) => {
  const speed = e.target.value;
  runner.style.animationDuration = `${1 / speed}s`;
});