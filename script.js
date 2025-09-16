// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
let animationCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b; // returns the sum
}

// Local scope example
function logMessage() {
  let message = "This is inside a function scope!";
  console.log(message);
}

logMessage();
// console.log(message); // ❌ would throw error (local scope)

// Demonstrating reusable logic
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  animationCount++;
  console.log("Animation triggered. Total count: " + animationCount);
}

// Part 3: Combining CSS + JavaScript

// Animate box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  toggleAnimation(box, "move");
});

// Modal logic
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Example use of return function
console.log("5 + 7 = " + addNumbers(5, 7));

// Bonus: Start/stop the bouncing ball with a function
const ball = document.getElementById("ball");

function toggleBounce() {
  if (ball.style.animationPlayState === "paused") {
    ball.style.animationPlayState = "running";
  } else {
    ball.style.animationPlayState = "paused";
  }
}

// Example: Pause bounce after 5 seconds
setTimeout(() => {
  console.log("Pausing bounce...");
  toggleBounce();
}, 5000);
