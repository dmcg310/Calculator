let displayVariable = "";

const display = document.querySelector("#display");

const buttons2 = document.querySelector(".button-row2");
const button3 = document.querySelector(".button-row3");
const button4 = document.querySelector(".button-row4");
const button5 = document.querySelector(".button-row5");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");

buttons2.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

button3.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

button4.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

button5.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

clearButton.addEventListener("click", (e) => {
  display.textContent = "";
  displayVariable = "";
});

backspaceButton.addEventListener("click", (e) => {
  display.textContent = display.textContent.slice(0, -1);
  displayVariable = displayVariable.slice(0, -1);
});

equalsButton.addEventListener("click", (e) => {
  display.textContent = "";
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
  console.log(total);
}
