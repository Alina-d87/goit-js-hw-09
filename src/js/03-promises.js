import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};
console.log(refs);

refs.form.addEventListener('submit', onSubmit);

let position;

function onSubmit(e) {
  e.preventDefault();
  const amount = refs.amount.value;
  console.log(amount);
  let delay = refs.delay.value;
  console.log(delay);

  for (let i = 0; i <= amount; i += 1) {
    position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        return;
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        return;
      });
  }

  e.target.reset();
}

function createPromise(position, delay) {
  const inputStep = refs.step.value;
  console.log(inputStep);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, inputStep);
  });
}
