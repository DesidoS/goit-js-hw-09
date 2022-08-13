import Notiflix from 'notiflix';

const createPromiseForm = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');

const data = {};

createPromiseForm.addEventListener('submit', onSubmit);
createPromiseForm.addEventListener('input', onInput);

function onInput(e) {
  data[e.target.name] = Number.parseInt(e.target.value)
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
};

function onSubmit(e) {
  e.preventDefault();
  createPromiseBtn.disabled = true

  let dataDelay = data.delay;
  let dataStep = data.step;
  let dataAmount = data.amount;
  
  for (let i = 1; i <= dataAmount; i += 1) {
    createPromise(i, dataDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    dataDelay += dataStep;
  }
  e.currentTarget.reset();
};