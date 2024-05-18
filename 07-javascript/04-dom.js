// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.getElementById("userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  console.log(userInput.value);
  output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event

const input2 = document.getElementById("userInput2");
const outerDiv = document.getElementById("inputEventExample");
const output2 = document.createElement("div");
output2.classList.add("output");

outerDiv.append(output2);

input2.addEventListener("input", (event) => {
  output2.textContent = input2.value;
});
