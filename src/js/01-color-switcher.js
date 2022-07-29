function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
console.log(refs);

let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick(e) {
  refs.body.style.backgroundColor = getRandomHexColor();
  timerId = setTimeout(onStartClick, 1000);
  if (onStartClick) {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  }
}

function onStopClick(e) {
  clearTimeout(timerId);
  if (onStopClick) {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  }
}
