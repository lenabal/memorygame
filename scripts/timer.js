let interval;
let timer = 0;

export function startTimer(timerDisplay, timeLimit, onEnd) { 
  interval = setInterval(() => {
    timer++;
    const timeLeft = timeLimit - timer;
    timerDisplay.textContent = `Time: ${timeLeft} seconds`;

    if (timeLeft <= 10) {
      timerDisplay.style.color = 'red';
    }

    if (timeLeft <= -1) {
      clearInterval(interval);
      onEnd();
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(interval);
  timer = 0;
}

export function stopTimer() {
  clearInterval(interval);
}
