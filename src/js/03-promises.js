import Notiflix from 'notiflix';

const createPromiseForm = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');
const data = {};
let intervalId = null;
let counter = null;

createPromiseForm.addEventListener('submit', onSubmit);
createPromiseForm.addEventListener('input', onInput);

function onInput(e) {
  data[e.target.name] = e.target.value
}

function onSubmit(e) {
  createPromiseBtn.disabled = true

  e.preventDefault();
  createFirstPromise()
}

function createFirstPromise() {
  setTimeout(startInterval, data.delay)
}

function startInterval() {
  intervalId = setInterval(startFn, data.step);  
}

function startFn() {
  counter += 1;
  createPromise(counter, data.delay)

  if (counter === Number.parseInt(data.amount)) {
    clearInterval(intervalId)
    createPromiseBtn.disabled = false
      return;
    }
}

function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
