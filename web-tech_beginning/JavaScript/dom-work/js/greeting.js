btnElement = document.getElementById('submitButton');
userName = document.getElementById('userName');
userSurname = document.getElementById('userSurname');
answerOutput = document.getElementById('answer');

btnElement.addEventListener('click', function () {
    if (userSurname.value && userName.value){
        answerOutput.innerHTML = `Здравствуйте, ${userName.value} ${userSurname.value}!`;
    } else if (userName.value || userSurname.value) {
        let text = userName.value ? userName.value : userSurname.value;
        answerOutput.innerHTML = `Здравствуйте, ${text}!`;
    } else {
        answerOutput.innerHTML = 'Привет, мир!';
    }

})
