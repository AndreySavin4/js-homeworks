const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  const currentValue = e.currentTarget.value.trim();
  const inputLength = Number(e.currentTarget.dataset.length);

  const isValid = currentValue.length === inputLength;

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
});
