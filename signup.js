function signup(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageEl = document.getElementById("message");

  messageEl.textContent = "";
  messageEl.style.color = "red";

  // Validation
  if (!username || !email || !password) {
    messageEl.textContent = "All fields are required";
    return;
  }

  if (username.length < 3) {
    messageEl.textContent = "Username must be at least 3 characters";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageEl.textContent = "Invalid email format";
    return;
  }

  if (password.length < 8) {
    messageEl.textContent = "Password must be at least 8 characters";
    return;
  }
  if (!/[A-Z]/.test(password)) {
    messageEl.textContent = "Password must contain 1 uppercase letter";
    return;
  }
  if (!/[0-9]/.test(password)) {
    messageEl.textContent = "Password must contain 1 number";
    return;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    messageEl.textContent = "Password must contain 1 special character";
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check duplicate email
  const exists = users.some(user => user.email === email);
  if (exists) {
    messageEl.textContent = "Email already registered. Please login.";
    return;
  }

  // Save user
  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  messageEl.style.color = "green";
  messageEl.textContent = "Signup successful! Redirecting to login...";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}
