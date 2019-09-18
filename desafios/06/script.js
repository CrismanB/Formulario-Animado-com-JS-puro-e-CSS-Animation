const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", e => {
  e.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-input");
  });

  const formError = document.querySelector(".validate-input");

  if (formError) {
    formError.addEventListener("animationend", e => {
      if (e.animationName === "validationInput") {
        formError.classList.remove("validate-input");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", e => {
  if ((e.animationName = "down")) {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", e => {
  if (e.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
