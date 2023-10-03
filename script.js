const form = document.getElementById("signInForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name"); 
  const passwordInput = document.getElementById("password");
  const email = emailInput.value;
  const name = nameInput.value;
  window.userName = name;
  const password = passwordInput.value;

  const signInButton = document.querySelector('input[value="Sign In"]');
  const registerButton = document.querySelector('input[value="Register"]');
  if (event.submitter === registerButton) {
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert("Email already registered");
      return;
    }
    users.push({ email: email, name: name, password: password });
    alert("User registered:", email, password);
  } else if (event.submitter === signInButton) {
    const validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
      alert("User signed in");
      sessionStorage.setItem('name', name);
      window.location.href = "chatroom.html"; 
    } else {
      alert("Invalid email or password");
    }
  }


  localStorage.setItem("users", JSON.stringify(users));

  emailInput.value = '';
  nameInput.value = ''; 
  passwordInput.value = '';
});
