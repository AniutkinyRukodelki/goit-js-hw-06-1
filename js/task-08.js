const user = {};
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    if (loginForm.elements.password.value === "" ||
        loginForm.elements.email.value === "") {
        alert("Ви заповнили не всі поля форми");
        return;
    }
    
    user.email = loginForm.elements.email.value;
    user.password = loginForm.elements.password.value;
    console.log(user);
    loginForm.reset();
}