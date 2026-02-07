let timerSeconds = 25 * 60;
let timerInterval = null;
function updateDisplay() {
  let minutes = Math.floor(timerSeconds/60);
  let seconds = timerSeconds % 60;
  if (seconds < 10) seconds = '0' + seconds
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}
document.getElementById('start').addEventListener('click', function() {
 if (timerInterval) return;
  timerInterval = setInterval(function() {
if (timerSeconds > 0) {
  timerSeconds--;
  updateDisplay();
} else {
  clearInterval(timerInterval);
  timerInterval = null;
  alert("Time's up!");
 }
}, 1000);
});  
document.getElementById('pause').addEventListener ('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
});
document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 25 * 60;
  updateDisplay();
});
document.getElementById('short-break').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 5 * 60;
  updateDisplay();
});
document.getElementById('long-break').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 15 * 60;
  updateDisplay();
});