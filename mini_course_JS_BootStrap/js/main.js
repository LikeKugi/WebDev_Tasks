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
        goods.push('good_'+goods.length, name, price, count, 0, 0, 0);
        localStorage.setItem('goods', JSON.stringify(goods));

        // update_goods()

        myModal.hide();
    } else {
        Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Пожалуйста, заполните все поля!',
            })
    }
})