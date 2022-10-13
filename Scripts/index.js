let firstNumber = 0;
let secondNumber = 0;
let time = 0;

while (true) {
    firstNumber = Number(prompt('Введіть перше число: '));
    secondNumber = Number(prompt('Введіть друге число: '));
    if((!isNaN(firstNumber)) && (!isNaN(secondNumber))) {
        break;
    }
    if(time === 4) {
        break;
    }
    time++;
}

if(!isNaN(firstNumber) && !isNaN(secondNumber) && time < 5 && time !== 0) {
    alert(`Користувач ввів ${firstNumber} і ${secondNumber}:\n` +
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n` +
        `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n` +
        `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n` +
        `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}\n`);
} else {
    alert('Введені некоректні данні.');
}