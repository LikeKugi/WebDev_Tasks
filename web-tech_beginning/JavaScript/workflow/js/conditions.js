let number = prompt('Enter number in range [0; 99]:', '0');

number = +number;

if ((number < 0) || (number > 99)) {
    alert(`${number} should be in range [0; 99]`);
} else if (number < 10) {
    alert(`You entered a digit: ${number}`);
} else if (number > 9) {
    alert(`${number} has two digits`);
} else {
    alert('please enter a number');
}