// Define a function for logout
function logout() {
    // Display an alert message
    alert('Logged out successfully...');
  
    // Redirect to the specified URL (index.html)
    window.location.href = 'index.html';
  }
  
  // Automatically call the logout function after 5 seconds
  setTimeout(logout, 1000); // 5000 milliseconds = 5 seconds