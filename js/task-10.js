const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')
const inputContainer = document.querySelector('#controls')
const inputEl = inputContainer.firstElementChild;
const container = document.querySelector('#boxes')

buttonCreate.addEventListener('click', createBoxes)
buttonDestroy.addEventListener('click', destroyBoxes)

function createBoxes() {
  const amount = inputEl.value
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div')
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    container.append(box)
  }
}

function destroyBoxes() {
  container.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


