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
console.log(refs);

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (Date.now() > selectedDates[0]) {
      alert('Please choose a date in the future');
      return;
    }
    if (Date.now() < selectedDates[0]) {
      refs.btnStart.disabled = false;
      ms = selectedDates[0] - options.defaultDate;
      const time = convertMs(ms);
      return time;
    }
  },
};

const initCalendar = flatpickr(refs.input, options);
let dedlain = options.defaultDate;

refs.btnStart.addEventListener('click', () => {
  timer.start.bind(timer);
});

function timer() {
  const today = new Date();
  const delta = dedlain - today;
  convertMs(ms);
}

setInterval(timer, 1000);

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
  refs.spanMinutes.textContent = minute;
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