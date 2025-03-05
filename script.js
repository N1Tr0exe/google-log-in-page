document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the values entered in the email and password fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // For the sake of this example, consider the login is always successful
  // In a real application, you would validate the credentials against a database

  // Display success message
  document.getElementById("login-status").innerText = "Successfully logged in!";
  document.getElementById("login-status").style.display = "block";

  // Store the email and password securely (simulated here with local storage for demo purposes)
  // In a real application, you would send this data securely to a server
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
});
