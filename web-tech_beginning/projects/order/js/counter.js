const btnSubmit = document.getElementById('order-submit');
const allowBeverages = document.getElementsByName("beverages-allow");
const allowSnacks = document.getElementsByName("snacks-allow");
const beverages = document.getElementsByName("beverages");
const snacks = document.getElementsByName("snacks");
const userName = document.getElementById('username');
const userLastname = document.getElementById('userLastname');
const total = document.getElementById('price');

let totalSupplies = new Map();

const user = {
    name : '',
    surname : '',
    price : 0,
};

function setOrder() {
    btnSubmit.disabled = !user.name || !user.surname || user.price === 0;
}
function createSupplies(supply) {
    totalSupplies.set(supply.id, (+supply.value * +supply.dataset.price))
    let price = 0;
    for (const supplyElement of totalSupplies.keys()) {
        price += totalSupplies.get(supplyElement);
    }
    user.price = price;
    total.innerHTML = `${price}`;
    setOrder();
}
 //по клику на кнопку
allowSnacks.forEach(element => {
    element.addEventListener("change", function () {
        let snack = document.getElementById(element.value);
        if (element.checked) {
            snack.disabled = false;
            snack.value = 1;
        } else {
            snack.value = 0;
            snack.disabled = true;
        }
        createSupplies(snack);
    })
})

snacks.forEach(element => {
    element.addEventListener("change", function () {
        createSupplies(element);
    })
})

allowBeverages.forEach(element => {
    element.addEventListener("change", function () {
        let beverage = document.getElementById(element.value);
        if (element.checked) {
            beverage.disabled = false;
            beverage.value = 1;
        } else {
            beverage.value = 0;
            beverage.disabled = true;
        }
        createSupplies(beverage);
    })
})

beverages.forEach(element => {
    element.addEventListener("change", function () {
        createSupplies(element);
    })
})

userName.addEventListener("change", function () {
    user.name = userName.value;
    setOrder()
})
userLastname.addEventListener("change", function () {
    user.surname = userLastname.value;
    setOrder()
})
btnSubmit.addEventListener("click", function () {
    alert(`Заказчик: ${user.surname} ${user.name}\nЦена: ${user.price}`);
})