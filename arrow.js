// function declaration

/*
function add(a,b){
    const result = a + b;
    return result;
}


function add(a,b){
    return a+b;
}

*/

// function expression

const add2 = function(a, b){
    return a + b;

}

// arrow function 
const add3 = (a, b) => a+b;

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

console.log(add4(40,5,6, 3));

const sum = add3(5,6);

console.log(sum);







