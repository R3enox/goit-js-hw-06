const formEl = document.querySelector('.login-form')

const submitFun = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert(`All fields must be filled`)
    }
    const info = {
        email: email.value,
        password: password.value
    }
    console.log(info);
    formEl.reset();
}

formEl.addEventListener('submit', submitFun)