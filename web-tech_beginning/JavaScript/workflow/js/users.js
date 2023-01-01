function myFunction(login) {
    //напишите ниже ваш код
    let users = {
        'admin': 'Администрирование, Операции, Статистика, Роли.',
        'support': 'Операции, Статистика.',
        'user': 'Статистика.'
    };
    if (login in users) {
        console.log(users[login]);
    } else {
        console.log('Неверный логин');
    }
}

myFunction('admin')