const actor = {
    name : "Jeff Bezos",
    age : 55,
    phone : 145666,
    money : "226 Billion",
}

// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value

// const {phone} = actor;
// const {phone,age} = actor;
const {phone,age : boyos} = actor;

// const phone = actor.phone;
// const name = actor.name;

// console.log(phone);
// console.log(phone);
// console.log(phone,age);
// console.log(phone, boyos);
// console.log(phone);
// console.log(name);

// array destructuring
const numbers = [5,6];
const [first, second] = numbers;
const [x, y] = [12, 66];


// advanced

function doSome(a, b){
    return [a*2, b*2];
} 

const [firstNumber, secondNumber] = doSome(6,9);
console.log(firstNumber, secondNumber);
