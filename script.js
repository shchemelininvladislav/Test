const runner = document.querySelector(".runner");
const speedControl = document.getElementById("speedControl");
const toggleRun = document.getElementById("toggleRun");

let running = true;
let speed = 5;

function updateSpeed() {
    speed = speedControl.value;
    runner.style.animationDuration = `${1 / speed}s`;
}

function toggleRunning() {
    if (running) {
        runner.style.animationPlayState = "paused";
    } else {
        runner.style.animationPlayState = "running";
    }
    running = !running;
}

speedControl.addEventListener("input", updateSpeed);
toggleRun.addEventListener("click", toggleRunning);
updateSpeed();
