const btnSubmit = document.getElementById('order-submit');
const allowBeverage = document.querySelectorAll('[name="beverages-allow"]');
const allowSnacks = document.querySelectorAll('[name="snacks-allow"]');
const beverages = document.querySelectorAll('[name="beverages"]');
const snacks = document.querySelectorAll('[name="snacks"]');
const userName = document.getElementById('username');
const userLastname = document.getElementById('userLastname');
const total = document.getElementById('price');

let supply = {
    value: 0,
    price: 0,
};

 //по клику на кнопку
allowSnacks.forEach(element => {
    element.addEventListener("change", function () {
        if (element.checked) {
            alert(element.value);
            let snack = document.getElementById(element.value);
            snack.disabled = false;
            snack.value = 1
            total.innerHTML = +total.innerHTML + +snack.value;
            alert(snack.min);
        } else {
            total.innerHTML = +total.innerHTML - +snack.value;
        }
    })
});

function snacksPrice () {

}