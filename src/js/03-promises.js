import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};
console.log(refs);

refs.form.addEventListener('submit', onSubmit);
let delay = null;
let step = null;
let position;

function onSubmit(e) {
  e.preventDefault();
  delay = refs.delay.value;
  step = refs.step.value;
  const amount = refs.amount.value;

  for (let i = 0; i <= amount; i += 1) {
    position = i;
    delay = Number.parseInt(delay) + Number.parseInt(step);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

//createPromise(position, delay)
//  .then(({ position, delay }) => {
//    Notiflix.Notify.success(
//      `✅ Fulfilled promise ${console.log(position)} in ${console.log(delay)}ms`
//    );
//  })
//  .catch(({ position, delay }) => {
//    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//  });
