const input = document.querySelector('#validation-input');
console.log(input.dataset.length);
const changeColor = (event) => {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}
    input.addEventListener('input', changeColor);
