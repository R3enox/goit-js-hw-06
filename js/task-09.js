const button = document.querySelector('.change-color')
const body = document.querySelector('body')
const text = document.querySelector('.color')

function getRandomHexColor() {
   const bgC = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
     .padStart(6, 0)}`;
  
  return body.style.backgroundColor = bgC, text.textContent = bgC
  

}

button.addEventListener('click', getRandomHexColor)

body.insertAdjacentHTML('')