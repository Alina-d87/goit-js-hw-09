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

function onSubmit(e) {
  e.preventDefault();
  delay = refs.delay.value;
  console.log(delay);
  step = refs.step.value;
  console.log(step);
  const amount = refs.amount.value;
  console.log(amount);
  delay = Number.parseInt(delay) + Number.parseInt(step);
  console.log(delay);

  for (let i = 0; i <= amount; i += 1) {
    let position = i;

    createPromise(position, delay)
      .then(({ position, delay }) =>
        setTimeout(() => {
          resolve;
        }, step)
      )
      .catch(({ position, delay }) =>
        setTimeout(() => {
          reject;
        }, step)
      );
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, step);
  });
}
