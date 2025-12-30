// Select elements
const emailInput = document.querySelector(".email-box input");
const button = document.querySelector(".email-box button");
const message = document.getElementById("message");

// Button click event
button.addEventListener("click", () => {
  const email = emailInput.value.trim();

  // Reset previous state
  message.className = "";
  button.classList.remove("active-btn");

  // Empty email
  if (email === "") {
    message.textContent = "Email is required";
    message.classList.add("error");
    return;
  }

  // Invalid email
  if (!email.includes("@")) {
    message.textContent = "Enter a valid email address";
    message.classList.add("error");
    return;
  }

  // Success
  message.textContent = "Email accepted. Welcome!";
  message.classList.add("success");
  button.classList.add("active-btn");
});
