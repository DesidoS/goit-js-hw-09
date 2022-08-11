const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const DELAY = 1000;

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    timerID = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, DELAY);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () =>{
    clearInterval(timerID);
    stopBtn.disabled = true;
    startBtn.disabled = false;
})