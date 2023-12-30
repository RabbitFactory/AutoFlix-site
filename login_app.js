const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});





// SIGN-UP function

var name = document.getElementById('name');
var signup_email = document.getElementById("signup_email");
var signup_password = document.getElementById("signup_password");

function signup(e)
{
    event.preventDefault();
}
















var email = document.getElementById('email');
var password = document.getElementById('password');
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function email_Verify() {
    if (email.value.length >= 9) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}

function pass_Verify() {
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}

function validated(action) {
    // Validate email and password
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    // Perform your login or signup logic here
    if (action === 'signin') {
        // Hardcoded login credentials (replace with your actual authentication logic)
        var validEmail = 'test@example.com';
        var validPassword = 'password123';

        if (email.value === validEmail && password.value === validPassword) {
            // Redirect to the other page after successful login
            window.location.href = "home.html";
        } else {
            // Handle unsuccessful login
            // alert("Invalid credentials. Please try again.");
            const myModal = document.getElementById('myModal')
            const myInput = document.getElementById('myInput')

            myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus()
            })
        }
    } else if (action === 'signup') {
        // Handle signup logic here
    }
}
