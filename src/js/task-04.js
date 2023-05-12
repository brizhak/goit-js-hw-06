const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value');

decrementRef.addEventListener('click', onDecrementButtonClick);

incrementRef.addEventListener('click', onIncrementButtonClick);

let counterValue = 0;

function onDecrementButtonClick (event) {
    counterValue -= 1;
    counterRef.textContent = counterValue;
}

function onIncrementButtonClick (event) {
    counterValue += 1;
    counterRef.textContent = counterValue;
}

