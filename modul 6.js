//Задача Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание
// на числа 0 и 1.

function getNum(num){
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Простое число");
            break;
        } else if (num % i !== 0) {
            console.log("не простое");
            break;
        } else if(num > 1001){
            console.log("данные не верны")}
    }}
getNum(999)