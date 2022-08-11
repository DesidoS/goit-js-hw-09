const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELEY = 1000;
let intervalId = null;

startBtn.addEventListener("click", startClick)
stopBtn.addEventListener("click", stopClick)

function startClick() { 
    intervalId = setInterval(changeBody, DELEY);
    invertBoolean()
}
function stopClick() { 
    clearInterval(intervalId)
    invertBoolean()
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBody() {
    document.body.style.backgroundColor = getRandomHexColor()
}
function invertBoolean() {
    startBtn.disabled = !startBtn.disabled
    stopBtn.disabled = !stopBtn.disabled
}