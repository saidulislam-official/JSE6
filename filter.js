const numbers = [66,5,46,12,56,60];

const billionaire = [6,16,25,65,45,55,66,45,76];

// const selected = billionaire.filter(b => b > 50);
// const selected = billionaire.filter(b => b < 50);
const selected = billionaire.filter(b => b % 2 === 1);

console.log(selected);


