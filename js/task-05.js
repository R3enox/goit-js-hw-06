const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
console.dir(textInput);

const setOutput = (event) => { event.currentTarget.value ? textOutput.textContent = event.currentTarget.value : textOutput.textContent = 'Anonymous';
}
textInput.addEventListener('input', setOutput)