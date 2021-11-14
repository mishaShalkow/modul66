//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function getNumber(num1, num2){
    let timeOut = setInterval(function (){
        console.log(num1);
        if(num1 === num2){
            clearInterval(timeOut);
        }num1++;
    },1000)
}

getNumber(5, 10)