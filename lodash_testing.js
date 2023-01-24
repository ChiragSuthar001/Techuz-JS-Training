const lodash = require('lodash');


let a = lodash.chunk([1, 2, 3, 4], 2);

console.log(a[0]);

let arr = [1];
let other = lodash.concat(arr, 2, 3, [4, 5, 6], [[7, 8], 9]);
console.log(other);

