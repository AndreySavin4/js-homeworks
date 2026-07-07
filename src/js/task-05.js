const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    span.textContent = "Anonymous";
    return;
  }

  span.textContent = e.currentTarget.value;
});
