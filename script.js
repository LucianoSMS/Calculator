const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let lastInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');
    const buttonText = button.textContent;

    if (action === 'limparTela') {
      currentInput = '';
      display.value = '';
      resultDisplayed = false;
      return;
    }

    if (action === 'apagar') {
      if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
      } else {
        currentInput = currentInput.slice(0, -1);
      }
      display.value = currentInput;
      return;
    }

    if (action === 'igual') {
      try {
        const expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        const evalResult = eval(expression);
        display.value = evalResult;
        currentInput = evalResult.toString();
        resultDisplayed = true;
      } catch (e) {
        display.value = 'Error';
        currentInput = '';
        resultDisplayed = true;
      }
      return;
    }

    if (action === 'adicao') {
      currentInput += '+';
    } else if (action === 'subtracao') {
      currentInput += '-';
    } else if (action === 'multiplicacao') {
      currentInput += '×';
    } else if (action === 'divisao') {
      currentInput += '÷';
    } else {
      if (resultDisplayed) {
        currentInput = buttonText;
        resultDisplayed = false;
      } else {
        currentInput += buttonText;
      }
    }
    display.value = currentInput;
  });
});
