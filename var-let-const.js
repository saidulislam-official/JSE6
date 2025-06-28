// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

var name  = " saidul islam "


let count = 0;
count = count + 1;
 

const nationalId = 143423;

// array
const numberSet = [4,5,6,7, 8, 66, 56];
numberSet[3] = 456;
numberSet.push(8,58,464,5656);
console.log(numberSet);


// object 

let student = {
    name : "Bill Gates",
    Roll : 1,
    Class : 6,
};

student.name = "Henry Bill Gates";

console.log(student);
student = {name : "Steve Jobs"};
console.log(student);


// loop

for (let i = 0; i < 10; i++){
    console.log(i);
}