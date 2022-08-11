import Notiflix from 'notiflix';

const createPromiseForm = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');
const data = {};
let intervalId = null;
let position = null;

createPromiseForm.addEventListener('submit', onSubmit);
createPromiseForm.addEventListener('input', onInput);

function onInput(e) {
  data[e.target.name] = e.target.value
}

function onSubmit(e) {
  createPromiseBtn.disabled = true

  e.preventDefault();
  startInterval()
}

function startInterval() {
  intervalId = setInterval(makePromis, data.step);
}

const makePromis = () => {
  const DELEY = data.delay
  if (position === Number.parseInt(data.amount)) {
    clearInterval(intervalId)
    createPromiseBtn.disabled = false
    return;
  }
  position += 1;
  
  
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(console.log(`✅ Fulfilled promise ${position} in ${data.delay}ms`))
      } else {
        // Reject
        reject(console.log(`❌ Rejected promise ${position} in ${data.delay}ms`))
      }
    }, DELEY)
    // return data
  });
  
  promise
  .then(() => {
    // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${data.delay}ms`);
    
  })
  .catch(() => {
    // Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${data.delay}ms`);
    
  });
};










// function onSubmit(e) {
//   createPromiseBtn.disabled = true

//   e.preventDefault();
//   createFirstPromise()
// }

// function createFirstPromise() {
//   setTimeout(startInterval, data.delay)
//   delay += Number.parseInt(data.delay)
// }

// function startInterval() {
//   intervalId = setInterval(startFn, data.step);  
// }

// function startFn() {
//   counter += 1;

//   createPromise(counter, delay)
//   delay+=Number.parseInt(data.step)
  
//   if (counter === Number.parseInt(data.amount)) {
//     clearInterval(intervalId)
//     createPromiseBtn.disabled = false
//     return;
//   }
// }

// function createPromise(position, delay) {

//   const promise = new Promise((resolve, reject) => {
  
//   const shouldResolve = Math.random() > 0.3;

//   // setTimeout(() => {
//     if (shouldResolve) {
//       // resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
//       resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
//     }
//     // reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
//     reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
//     });
//   // })
//   return promise;
// }
