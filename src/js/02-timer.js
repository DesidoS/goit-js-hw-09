import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const data = document.getElementById("datetime-picker");
const startBtn = document.querySelector('button[data-start]');
const spanValue = document.querySelectorAll('.value');

const DELEY = 1000;

let intervalId = null;
let valueDate = null;

startBtn.addEventListener("click", startTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (options.defaultDate > selectedDates[0].getTime()) {
            Notiflix.Notify.warning("Please choose a date in the future");
            return
        }
        startBtn.disabled = false;
        valueDate = selectedDates[0].getTime();
    },
};

flatpickr(data, options);

function startTimer() {
    startBtn.disabled = true
    intervalId = setInterval(startTime, DELEY);   
}

function startTime() {
    data.disabled = true
    const timer = valueDate - Date.now()
    
    if (timer <= 0) {
        clearInterval(intervalId)
        data.disabled = false
        Notiflix.Notify.success('It`s ShowTime!')
        return
    }
    updateTimer(timer)
}

function updateTimer(timer) {
    const { days, hours, minutes, seconds } = convertMs(timer)
    
    spanValue[0].textContent = days
    spanValue[1].textContent = hours
    spanValue[2].textContent =minutes
    spanValue[3].textContent = seconds  
}

function addLeadingZero (value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}