const loginForm = document.getElementById("login_form");
const userInput = document.querySelector(".user_input");
const greeting = document.getElementById("greeting");
const userDate = new Date();
const userHours = userDate.getHours();

function handlelogin(e) {
  e.preventDefault();
  const userInputValue = userInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", userInputValue);
  greeting.innerText = `Have a good day, ${userInputValue}`;
  greeting.classList.remove("hidden");
}

const savedName = localStorage.getItem("username");

if (savedName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handlelogin);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Have a good day, ${savedName}`;
}
