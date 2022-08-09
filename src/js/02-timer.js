import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  btnStart: document.querySelector('button'),
  input: document.querySelector('#datetime-picker'),
  spanDay: document.querySelector('[data-days]'),
  spanHours: document.querySelector('[data-hours]'),
  spanMinutes: document.querySelector('[data-minutes]'),
  spanSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    if (Date.now() > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    if (Date.now() < selectedDates[0]) {
      refs.btnStart.disabled = false;
    }
  },
};

const initCalendar = flatpickr(refs.input, options);
console.log(initCalendar);

let intervalId = null;
let ms = null;
let isActive = false;
const startTimer = initCalendar.selectedDates[0];

refs.btnStart.addEventListener('click', onTimer);

function onTimer(ms) {
  const startTimer = initCalendar.selectedDates[0];
  if (isActive) {
    isActive = true;
    return;
  }

  intervalId = setInterval(() => {
    ms = startTimer - new Date();
    console.log(ms);
    const time = convertMs(ms);
    console.log(time);
    stopTimer(ms);
  }, 1000);
}

function stopTimer() {
  if (startTimer <= new Date()) {
    console.log('stop');
    clearInterval(intervalId);
    return interfece();
  }
}

function interfece() {
  refs.spanDay.textContent = '00';
  refs.spanHours.textContent = '00';
  refs.spanMinutes.textContent = '00';
  refs.spanSeconds.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  refs.spanDay.textContent = days;
  refs.spanHours.textContent = hours;
  refs.spanMinutes.textContent = minutes;
  refs.spanSeconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (String.length < 2) {
    return String(value).padStart(2, '0');
  }
  if (String.length > 2) {
    return String(value).padStart(3, '0');
  }
}
