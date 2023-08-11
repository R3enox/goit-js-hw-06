const text = document.querySelector('#text');
const fontSize = document.querySelector('#font-size-control')
console.log(Math.floor(Math.random() * 999999));
text.style.fontSize = `${fontSize.value}px`
const changeFontSize = (event) => {
    console.log(event.currentTarget.value);
    console.dir(text);
    text.style.fontSize = `${event.currentTarget.value}px`
    text.style.color = `#${Math.floor(Math.random() * 999999)}`
}
fontSize.addEventListener('input', changeFontSize)
