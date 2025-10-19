window.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById('display');

  function appendValue(value) {
    if (!display) return console.warn('display element not found');
    display.value += value;
  }

  function clearDisplay() {
    if (!display) return console.warn('display element not found');
    display.value = '';
  }

  function backspace() {
    if (!display) return console.warn('display element not found');
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    if (!display) return console.warn('display element not found');
    try {
      // eval is convenient but unsafe for untrusted input. Keep for now for simplicity.
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }

  // Expose functions to global scope so inline `onclick` attributes in HTML work.
  // This keeps the current HTML (e.g., <button onclick="clearDisplay()">) backwards-compatible.
  Object.assign(window, { appendValue, clearDisplay, backspace, calculate });
});      