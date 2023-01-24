const lodash = require('lodash');

console.log("Hello World!");

const obj = {
    a: {
        a1: "obj_a_a1",
        a2: "obj_a_a2",
        a3: "obj_a_a3",
    },
    b: {
        b1: "obj_b_b1",
        b2: "obj_b_b2",
        b3: "obj_b_b3",
    }
}

try {
    let { a, b } = obj;
    console.log(a);
    console.log(b);
} catch (error) {
    console.log("error aaya");
}
finally {
    console.log("Ye finally waala block h");
}

for (const item in obj) {
    console.log(item);
}
