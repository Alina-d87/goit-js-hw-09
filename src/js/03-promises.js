import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};
console.log(refs);

refs.form.addEventListener('submit', onSubmit);

let position;

function onSubmit(e) {
  e.preventDefault();
  const inputAmount = refs.amount.value;
  console.log(inputAmount);
  const inputDelay = refs.delay.value;
  console.log(inputDelay);

  for (let i = 0; i <= inputAmount; i += 1) {
    position = i;

    createPromise(position, inputDelay)
      .then(({ position, inputDelay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${inputDelay}ms`
        );
      })
      .catch(({ position, inputDelay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${inputDelay}ms`
        );
      });
  }

  e.target.reset();
}

function createPromise(position, inputDelay) {
  const shouldResolve = Math.random() > 0.3;
  const inputStep = refs.step.value;
  console.log(inputStep);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${inputDelay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${inputDelay}ms`);
      }
    }, inputStep);
  });
  return promise;
}
