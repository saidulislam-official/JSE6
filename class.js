const products = [
    {id:1,name:'dell',price:66000},
    {id:2,name:'lenovo',price:6700},
    {id:3,name:'hp',price:6500},
    {id:4,name:'asus',price:64000},
    {id:5,name:'msi',price:6800},
    {id:6,name:'msi',price:68009},
    {id:7,name:'msi',price:68067},
    {id:8,name:'dell',price:65000},
    {id:9,name:'dell',price:6500},
]

// similar - have some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`${talk} talk about yourself`)
    };
}
// const tom = new Product('Tommy');
// console.log(tom);
// tom.speak('talking tom');



class Teacher{
    constructor(name,subject){
        this.name = name;
        this.sub = subject;
    }
    lecture(){
        console.log("Sir is teaching math");
    }
}
const jeffBezos = new Teacher("Jeff BezoS","Ecommerce Business");
console.log(jeffBezos);
const billGates = new Teacher("Bill Gates","Software Business");
console.log(billGates);
const steveJobs = new Teacher("Steve Jobs","Marketing Tech Business");
console.log(steveJobs);