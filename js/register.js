const form = document.querySelector(".register-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

function handleFormSubmit(event) {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    if (name.trim() == "" || email.trim() == "" || password.trim() == "") {
        alert("Iltimos, barcha maydonchalarni to'ldiring");
    } else {
        const user = {
            name: name,
            email: email,
            password: password,
        };
        localStorage.setItem("user", JSON.stringify(user));
        window.location = "index.html";
    }
    form.reset();
}
form.addEventListener("submit", handleFormSubmit);