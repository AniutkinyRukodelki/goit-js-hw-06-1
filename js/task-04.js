const refs = {
    removeBtn: document.querySelector('#counter button[data-action="decrement"]'),
    valueLabel: document.querySelector('#value'),
    addBtn: document.querySelector('#counter button[data-action="increment"]'),
};

let counterValue = Number.parseInt(refs.valueLabel.textContent) || 0;

function updateValue(newValue) {
    refs.valueLabel.textContent = newValue;
}

refs.removeBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue(counterValue);
});

refs.addBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue(counterValue);
});