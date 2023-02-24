if(!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify([]));
}

const myModal = new bootstrap.Modal(document.querySelector('#exampleModal'), {
    keyboard: false,
})

document.querySelector('.add_new').addEventListener('click', function (e) {
    let name = document.querySelector('#good_name').value;
    let price = document.querySelector('#good_price').value;
    let count = document.querySelector('#good_count').value;
    if (name && price && count) {
        document.querySelector('#good_name').value ='';
        document.querySelector('#good_price').value ='';
        document.querySelector('#good_count').value ='1';
        let goods = JSON.parse(localStorage.getItem('goods'));
        goods.push(['good_'+goods.length, name, price, count, 0, 0, 0]);
        localStorage.setItem('goods', JSON.stringify(goods));

        update_goods()

        myModal.hide();
    } else {
        Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Пожалуйста, заполните все поля!',
            })
    }
})
update_goods()
function update_goods() {
    let result_price = 0;
    let tbody = document.querySelector('.list');
    tbody.innerHTML = '';
    document.querySelector('.cart').innerHTML = '';
    let goods = JSON.parse(localStorage.getItem(['goods']));
    if (goods.length) {
        table1.hidden = false;
        table2.hidden = false;
        for (let i = 0; i < goods.length; i++) {
            tbody.insertAdjacentHTML('beforeend',
                `<tr class="align-middle">
<td>${i + 1}</td>
<td class="name">${goods[i][1]}</td>
<td class="price">${goods[i][2]}</td>
<td>${goods[i][3]}</td>
<td><button class="btn good_delete btn-danger" data-delete="${goods}[i][0]">&#10006;</button></td>
<td><button class="btn good_delete btn-primary" data-goods="${goods}[i][0]">&#10149;</button></td>
</tr> `
            )
            if (goods[i][4] > 0) {
                goods[i][6] = goods[i][4] * goods[i][2] - goods[i][4]*goods[i][2]*goods[i][5]*0.01;
                result_price += goods[i][6];
                document.querySelector('.cart').insertAdjacentHTML('beforeend',
                    `<tr class="align-middle">
<td>${i + 1}</td>
<td class="price_name">${goods[i][1]}</td>
<td class="price_one">${goods[i][2]}</td>
<td class="price_count">${goods[i][4]}</td>
<td class="price_discount"><input type="text" data-good-id="${goods}[i][0]" value="goods[i][5]" min="0" max="100"></td>
<td>${goods[i][6]}</td>
<td><button class="btn good_delete btn-danger" data-delete="${goods}[i][0]">&#10006;</button></td>
</tr> `)
            }
        }
        // userList = new List('goods', options);
    } else {
        table1.hidden = true;
        table2.hidden = true;
    }
    document.querySelector('.price_result').innerHTML = result_price + ' &#8381;';
}