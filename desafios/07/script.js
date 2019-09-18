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

// SQUARES
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const delay = random(5, 0.1);
  const duration = random(24, 12);
  const position = random(1, 99);
  const size = Math.floor(random(10, 150));

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;
  li.style.left = `${position}%`;

  ulSquares.appendChild(li);
}
