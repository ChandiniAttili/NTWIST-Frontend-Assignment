// Contact Form Logic
let startTime = null;
let timerInterval = null;
const form = document.getElementById('contact-form');
const timeSpentEl = document.getElementById('time-spent');
const confirmationEl = document.getElementById('confirmation');

function formatTime(ms) {
  const sec = Math.floor(ms / 1000) % 60;
  const min = Math.floor(ms / 60000);
  return `${min}m ${sec}s`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (startTime && timeSpentEl) {
      const elapsed = Date.now() - startTime;
      timeSpentEl.textContent = `Time spent: ${formatTime(elapsed)}`;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  startTime = null;
  stopTimer();
  if (timeSpentEl) timeSpentEl.textContent = '';
}

if (form) {
  form.addEventListener('focusin', (e) => {
    if (!startTime) {
      startTime = Date.now();
      startTimer();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const timeSpent = startTime ? Date.now() - startTime : 0;
    if (timeSpentEl) timeSpentEl.textContent = `Time spent: ${formatTime(timeSpent)}`;
    if (confirmationEl) {
      confirmationEl.textContent = 'Thank you! Your message has been sent.';
      confirmationEl.style.display = 'block';
    }
    form.reset();
    resetTimer();
    setTimeout(() => {
      if (confirmationEl) confirmationEl.style.display = 'none';
    }, 3000);
  });

  form.addEventListener('reset', resetTimer);
} 