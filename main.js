class Calculator {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.currentOperand = "";
  }
  appendNumber(value) {
    // if Current Operand had (.) Dont Add It Again
    if (this.currentOperand.toString().includes(".") && value === ".") return;
    this.currentOperand = this.currentOperand.toString() + value.toString();
  }
  // Update Display Every Time That Buttons Clicked
  updateDisplay() {
    this.currentOperandTextElement.textContent = this.currentOperand;
  }
}
// Elements
const buttons = document.querySelectorAll(".btn");
const currentOperandTextElement = document.querySelector(".current-operand");
// Events
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.currentTarget.dataset.btn;
    calculator.appendNumber(value);
    calculator.updateDisplay();
  });
});
// Call Calculator Class
const calculator = new Calculator(currentOperandTextElement);
