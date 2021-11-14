//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function getNum(num1){
    return getNum2 = function (num2) {
        let result = num1 + num2;
        console.log(result)
    }
}
getNum(2);
getNum2(4);