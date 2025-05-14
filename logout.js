// logout.js
function logout() {
    // Clear session data (or cookies if used)
    sessionStorage.clear();  // Or cookies if you're using them

    // Redirect to the login page
    window.location.href = "login.html";
}
