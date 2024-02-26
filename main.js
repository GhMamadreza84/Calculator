class Calculator {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  chooseOperand(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand + this.operation;
    this.currentOperand = "";
  }
  compute() {
    let computation = null;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;

      default:
        return;
        break;
    }
    this.currentOperand = computation;
    this.previousOperand = "";
    this.operation = undefined;
  }
  appendNumber(value) {
    // if Current Operand had (.) Dont Add It Again
    if (this.currentOperand.toString().includes(".") && value === ".") return;
    this.currentOperand = this.currentOperand.toString() + value.toString();
  }
  // Update Display Every Time That Buttons Clicked
  updateDisplay() {
    this.currentOperandTextElement.textContent = this.currentOperand;
    this.previousOperandTextElement.textContent = this.previousOperand;
  }
}
// Elements
const buttons = document.querySelectorAll(".btn");
const currentOperandTextElement = document.querySelector(".current-operand");
const previousOperandTextElement = document.querySelector(".previous-operand");
// Events
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.currentTarget.dataset.btn;
    clickHandler(value);
  });
});
const clickHandler = (value) => {
  switch (value) {
    case "/":
    case "*":
    case "-":
    case "+":
      calculator.chooseOperand(value);
      break;
    case "c":
      calculator.clear();
      break;
    case "de":
      calculator.delete();
      break;
    case "=":
      calculator.compute();
      break;
    default:
      calculator.appendNumber(value);
      break;
  }
  calculator.updateDisplay();
};
// Call Calculator Class
const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);
