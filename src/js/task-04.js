const decrement = document.querySelector("button[data-action=decrement]");

const increment = document.querySelector("button[data-action=increment");

const value = document.querySelector("#value");

let counterValue = 0;

const decrementValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrementValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

document.addEventListener("click", (e) => {
  if (e.target === decrement) {
    decrementValue();
    return;
  }
  if (e.target === increment) {
    incrementValue();
    return;
  }
});

//decrement.addEventListener
