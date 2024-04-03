// Selecting the container element
const containerEl = document.querySelector(".container");

// Selecting the left and right elements
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

// Adding event listener for mouse enter on the left element
leftEl.addEventListener("mouseenter", () => {
  // Adding the "active-left" class to the container element
  containerEl.classList.add("active-left");
});

// Adding event listener for mouse leave on the left element
leftEl.addEventListener("mouseleave", () => {
  // Removing the "active-left" class from the container element
  containerEl.classList.remove("active-left");
});

// Adding event listener for mouse enter on the right element
rightEl.addEventListener("mouseenter", () => {
  // Adding the "active-right" class to the container element
  containerEl.classList.add("active-right");
});

// Adding event listener for mouse leave on the right element
rightEl.addEventListener("mouseleave", () => {
  // Removing the "active-right" class from the container element
  containerEl.classList.remove("active-right");
});
