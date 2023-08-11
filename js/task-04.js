let counterValue = 0;
let spanValue = Number(document.querySelector('#value').textContent);
const buttonPlus = document.querySelector('button[data-action="increment"]')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
console.log(spanValue);

const refreshCount = () => document.querySelector('#value').textContent = counterValue;
const counterPlus = () => {
    counterValue += 1;
    refreshCount();
}
const counterMinus = () => {
    if (counterValue <= 0) {
        return alert(`Don't do this!!!`)
    }
    counterValue -= 1;
    refreshCount();
}
buttonPlus.addEventListener('click', counterPlus)
buttonMinus.addEventListener('click', counterMinus)





