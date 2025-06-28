const max = Math.max(61,34,45,55,66,24,6,1,2,3);

const numbers = [11,22,44,55,456,665,654,12,13,16,26];
const arrayMax = Math.max(numbers);
// console.log(numbers);
// console.log(...numbers);

// console.log(arrayMax);


const nums = [4,5,6,7,8,9];

const nums2 = nums;
nums2.push(12);

console.log(nums); 

// const nums3 = [nums];

const nums3 = [...nums]; //copy
console.log(nums3);

const addExtra = [...nums, 898]; // add extra elements while copy

console.log(addExtra);

