const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startRef.addEventListener('click', changeColor);

function getColor() {
  const numb = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.style.backgroundColor = `${colors[numb]}`;
}

function changeColor() {
  const intervalId = setInterval(() => {
    getColor();
    startRef.setAttribute('disabled', null);
    stopRef.addEventListener('click', () => {
      clearInterval(intervalId);
      startRef.removeAttribute('disabled');
    });
  }, 1000);
}
