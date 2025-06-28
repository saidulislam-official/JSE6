// single parameter
const difference = (x, y) => x - y;


const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;

const student = {
    name : "Bill Gates",
    age : 66,
};

const age = getAge(student);
console.log(age); 


const getArray = numbers => numbers[5];

const array = getArray([1,2,3,4,5,6,7,8,9]);
console.log(array);

const doubleIt = num => num * 2;

// no parameter

const getPI = () => Math.PI;
console.log(getPI());

// large arrow function 

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
};





