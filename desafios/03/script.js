const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", e => {
  e.preventDefault();
  form.classList.add("form-hide");
});
