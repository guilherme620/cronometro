const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let intervalId = null;
let elapsedSeconds = 0;

const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
};

const updateDisplay = () => {
  display.textContent = formatTime(elapsedSeconds);
};

const setButtons = (running) => {
  startBtn.disabled = running;
  pauseBtn.disabled = !running;
};

startBtn.addEventListener('click', () => {
  if (intervalId !== null) return;
  setButtons(true);
  intervalId = setInterval(() => {
    elapsedSeconds += 1;
    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener('click', () => {
  if (intervalId === null) return;
  clearInterval(intervalId);
  intervalId = null;
  setButtons(false);
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  elapsedSeconds = 0;
  updateDisplay();
  setButtons(false);
});

updateDisplay();
