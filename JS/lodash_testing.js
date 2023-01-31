const _ = require('lodash');


let a = _.chunk([1, 2, 3, 4], 2);

console.log(a[0]);

let arr = [1];
let other = _.concat(arr, 2, 3, [4, 5, 6], [[7, 8], 9]);
console.log(other);

let compactArr = _.compact(other);
console.log(compactArr);

arr = { a: 1, b: 2, c: 3, d: 4 }
console.log(arr);
arr = { ...arr, e: 5 };
console.log(arr);

arr = [
    { id: 1, name: 'sheldon' },
    { id: 2, name: 'leonard' },
    { id: 3, name: 'raj' },
    { id: 4, name: 'howard' },
];
let ammend = { sheldon: 5, leonard: 2, raj: 30, howard: 5 };
console.log('before');
console.log(arr);
console.log('after');
console.log(arr.map((val) => ({ ...val, points: ammend[val.name] })));
// console.log(arr);