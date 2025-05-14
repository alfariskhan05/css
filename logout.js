// logout.js

// Function to check if the user is logged in
function checkLogin() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.getElementById('logoutSection').style.display = 'block';  // Show logout button
    } else {
        // Optional: Redirect to login page if the user is not logged in
        window.location.href = "login.html"; // Uncomment if you want to redirect
    }
}

// Function to handle logout
function logout() {
    sessionStorage.clear();  // Clear session data
    window.location.href = "index.html";  // Redirect to the homepage or login page
}
