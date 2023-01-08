let displayVariable = "";
const display = document.querySelector("#display");
const numButtons = document.querySelector(".num-buttons");
const operatorButtons = document.querySelector(".operator-buttons");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

numButtons.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

operatorButtons.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

clearButton.addEventListener("click", (e) => {
  display.textContent = "";
  displayVariable = "";
});

equalsButton.addEventListener("click", (e) => {
  operate();
});

function operate() {
  displayVariable = displayVariable.replace("+", " + ");
  displayVariable = displayVariable.replace("-", " - ");
  displayVariable = displayVariable.replace("X", " * ");
  displayVariable = displayVariable.replace("÷", " / ");

  if (displayVariable.includes("+")) {
    const [x, y] = displayVariable.split(" + ");
    add(x, y);
  } else if (displayVariable.includes("-")) {
    const [x, y] = displayVariable.split(" - ");
    subtract(x, y);
  } else if (displayVariable.includes("*")) {
    const [x, y] = displayVariable.split(" * ");
    multiply(x, y);
  } else if (displayVariable.includes("/")) {
    const [x, y] = displayVariable.split(" / ");
    divide(x, y);
  } else {
    console.log("Error");
  }
}

function add(x, y) {
  const total = +x + +y;
  display.textContent = "";
  display.textContent += total;
}

function subtract(x, y) {
  const total = +x - +y;
  display.textContent = "";
  display.textContent += total;
}

function multiply(x, y) {
  const total = +x * +y;
  display.textContent = "";
  display.textContent += total;
}

function divide(x, y) {
  const total = +x / +y;
  display.textContent = "";
  display.textContent += total;
}
