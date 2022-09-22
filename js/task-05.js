const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output'),
}

const onInputChange = event => {
    refs.title.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === '' ? refs.title.textContent = 'Anonymous' : null;
}

refs.input.addEventListener('input', onInputChange);
