import Notiflix from 'notiflix';

const createPromiseForm = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');
const data = {};

let intervalId = null;
data.position = 1;

createPromiseForm.addEventListener('submit', onSubmit);
createPromiseForm.addEventListener('input', onInput);

function onInput(e) {
  data[e.target.name] = Number.parseInt(e.target.value)
}

function onSubmit(e) {
  createPromiseBtn.disabled = true
  e.preventDefault();
  startTimeout()
}

function startTimeout() {
  setTimeout(makePromis, data.delay);
}

const makePromis = () => {
  intervalId = setInterval(() => {

    if (data.position === data.amount + 1) {
      clearInterval(intervalId)
      createPromiseBtn.disabled = false
      return;
    }
    
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(data)
      } else {
        reject(data)
      }
    })

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        data.position += 1;
        data.delay += data.step
      });
  }, data.step);
};