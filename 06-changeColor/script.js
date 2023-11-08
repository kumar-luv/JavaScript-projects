const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let intervalId;
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
start.addEventListener('click', () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(intervalId);
  body.style.backgroundColor = '#212121';
});
