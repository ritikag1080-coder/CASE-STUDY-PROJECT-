// =======================
// SIGNUP FUNCTION
// =======================
function signup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all details!");
        return;
    }

    // Storing user data in localStorage (simple key-value)
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful!");
    window.location.href = "login.html";
}


// =======================
// LOGIN FUNCTION
// =======================
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Getting stored values
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password!");
    }
}


// =======================
// CONTACT FORM MESSAGE
// =======================
function sendMessage() {
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMsg").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all details!");
        return;
    }

    alert("Your message has been sent!");
}