const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  const {
    elements: { email, password },
  } = form;

  e.preventDefault();

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in all the fields of the form!");
    return;
  }

  console.log({
    email: email.value,
    password: password.value,
  });
  form.reset();
});
