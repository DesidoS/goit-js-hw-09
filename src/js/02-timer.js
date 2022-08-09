// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const data = document.getElementById("datetime-picker")
const startBtn = document.querySelector('button[data-start]');
const spanValue = document.querySelectorAll('.value')

const DELEY = 1000;
let intervalId = null;

startBtn.addEventListener("click", startTimer)

startBtn.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        //   console.log(selectedDates[0]);
        if (options.defaultDate > selectedDates[0].getTime()) {
            window.alert("Please choose a date in the future")
            return;
        }
        startBtn.disabled = false
    },
};
flatpickr(data, options);

function startTimer() {
    startBtn.disabled = true
    intervalId = setInterval(startTime, DELEY);   
}
function startTime() {
    data.disabled = true
    const date = new Date();
    const choiseTime = new Date(data.value);
    const timer = choiseTime.getTime() - date.getTime()
    
    if (timer <= 0) {
        clearInterval(intervalId)
        return
    }
    showTimeThrough(timer)
}

function showTimeThrough(timer) {
    const { days, hours, minutes, seconds } = convertMs(timer)
    
    spanValue[0].textContent = `${days}`
    spanValue[1].textContent = `${hours}`
    spanValue[2].textContent = `${minutes}`
    spanValue[3].textContent = `${seconds}`  
}

function addLeadingZero (value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}