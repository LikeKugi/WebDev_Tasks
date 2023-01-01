let btnElement = document.getElementById('choose');
let resultElement = document.getElementById('price');
let checkboxButtons = document.querySelectorAll('[name="orderFood"]');

btnElement.addEventListener('click', function () {
    let selectedValues = 0;
    for (let check of checkboxButtons) {
        if (check.checked) {
            selectedValues += +check.value;
        }
    }
    resultElement.innerHTML = `${selectedValues}`;
})