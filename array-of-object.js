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
// map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p => p.price);
// console.log(prices);

// forEach
// products.forEach(productId => console.log(productId.id));
// products.forEach(productId => console.log(productId.price));
products.forEach(productId => console.log(productId.id,":",productId.name));

// filter
const expensive = products.filter(productPrice => productPrice.price > 50000);
console.log(expensive);

// find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce( (acume,current)=> acume + current.price ,0);
console.log(total);