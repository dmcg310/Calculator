const operatorTemp = prompt("Please enter the desired operator: ");
const x = parseInt(prompt("Please enter first number: "));
const y = parseInt(prompt("Please enter second number: "));
const operator = operatorTemp.toLowerCase();

operate();

function operate() {
  if (operator === "add") {
    add();
  } else if (operator === "subtract") {
    subtract();
  } else if (operator === "multiply") {
    multiply();
  } else if (operator === "divide") {
    divide();
  } else {
    console.log("Please enter a valid operator");
  }
}

function add() {
  const total = x + y;
  console.log(total);
}

function subtract() {
  const total = x - y;
  console.log(total);
}

function multiply() {
  const total = x * y;
  console.log(total);
}

function divide() {
  const total = x / y;
  console.log(total);
}
