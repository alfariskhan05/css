// Handle login form submission
function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check credentials
  if (username === "admin" && password === "docguide123") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // Redirect to home page
  } else {
    document.getElementById("error-message").innerText = "Invalid credentials!";
  }
}

// Check if user is logged in
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect to login page
  }
}

