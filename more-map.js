const numbers = [1,2,3,4,5,6];

const doubled = numbers.map(num => num * 2);
console.log(doubled)


const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);


const minusNumber = numbers.map(num => num - 2);
console.log(minusNumber);

const halfNumber = numbers.map(num => num / 2);
console.log(halfNumber);


const friends = ['bill', 'steve', 'larry page', 'michael'];
const lengths = friends.map(friend => friend.length);
console.log(lengths); 
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);