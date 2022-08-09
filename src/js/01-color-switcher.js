const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackground = document.querySelector('body');
const DELEY = 1000;
let intervalId = null;

startBtn.addEventListener("click", startClick)
stopBtn.addEventListener("click", stopClick)

function startClick(event) { 
    intervalId = setInterval(changeBody, DELEY);
    startBtn.disabled = true
    stopBtn.disabled = false
}
function stopClick(event) { 
    clearInterval(intervalId)
    startBtn.disabled = false
    stopBtn.disabled = true
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBody() {
    bodyBackground.style.backgroundColor = getRandomHexColor()
}