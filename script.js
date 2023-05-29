
const signup = document.getElementById("signup");
const error = document.getElementById("error");
const email = document.getElementById("email");
const mail = document.getElementById("mail");
const next = document.getElementById("next");
const back = document.getElementById("back");
const thanks = document.getElementById("thanks");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

next.addEventListener('click', () => {
    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        error.style.display = 'block';
        email.style.borderColor = 'hsl(4, 100%, 67%)';
        email.style.outlineColor = 'hsl(4, 100%, 67%)';
        email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.41)';
        email.style.color = 'hsl(4, 100%, 67%)';
    } else {
        thanks.style.display = 'block';
        signup.style.display = 'none';
        mail.textContent = email.value;
    }
});

email.addEventListener('focus', () => {
    error.style.display = 'none';
    email.style.borderColor = '';
    email.style.outlineColor = '';
    email.style.backgroundColor = '';
    email.style.color = '';
});

back.addEventListener('click', () => {
    signup.style.display = 'flex';
    thanks.style.display = 'none';
    email.value= '';
});

