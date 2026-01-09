function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("error");

  errorEl.textContent = "";

  if (!email || !password) {
    errorEl.textContent = "Email and password are required";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email);

  if (!user) {
    errorEl.textContent = "Email not registered";
    return;
  }

  if (user.password !== password) {
    errorEl.textContent = "Incorrect password";
    return;
  }

  // Store logged-in user
  localStorage.setItem("currentUser", JSON.stringify(user));

  // ✅ REDIRECT (THIS WILL WORK)
  window.location.href = "index.html";
}


