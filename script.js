let displayVariable = "";

const display = document.querySelector("#display");

const buttons2 = document.querySelector(".button-row2");
buttons2.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const button3 = document.querySelector(".button-row3");
button3.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const button4 = document.querySelector(".button-row4");
button4.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const additionButton = document.querySelector("#addition");
additionButton.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
  displayVariable += e.target.textContent;
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (e) => {
  display.textContent = "";
  displayVariable = "";
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", (e) => {
  evaluation();
});

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", (e) => {
  display.textContent = display.textContent.slice(0, -1);
  displayVariable = displayVariable.slice(0, -1);
});

function evaluation() {
  displayVariable = displayVariable.replace("+", " + ");
  displayVariable = displayVariable.replace("-", " - ");
  displayVariable = displayVariable.replace("X", " * ");
  displayVariable = displayVariable.replace("/", " / ");

  if (displayVariable.includes("+")) {
    const [x, y] = displayVariable.split(" + ");
    let total = +x + +y;
    display.textContent = "";
    display.textContent += total;
  } else if (displayVariable.includes("-")) {
    const [x, y] = displayVariable.split(" - ");
    let total = +x - +y;
    display.textContent = "";
    display.textContent += total;
  } else if (displayVariable.includes("*")) {
    const [x, y] = displayVariable.split(" * ");
    let total = +x * +y;
    display.textContent = "";
    display.textContent += total;
  } else if (displayVariable.includes("/")) {
    let [x, y] = displayVariable.split(" / ");
    let total = +x / +y;
    display.textContent = "";
    display.textContent += total;
  } else {
    console.log("Error");
  }
}
