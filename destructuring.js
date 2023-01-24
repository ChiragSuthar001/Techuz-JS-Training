const PersonOne = {
    name: "Chirag",
    age: 21,
    address: {
        city: 'Ahmedabad',
        state: 'Gujarat',
        place: {
            str: ''
        }
    }
}

const PersonTwo = {
    name: 'Brijesh',
    age: 21,
    address: {
        city: 'Gandhinagar',
        state: 'Gujarat'
    }
}

const { name, age, address: { street, city } } = PersonTwo;

const { name: firstName, age: Age, address } = PersonOne;

console.log(name);
console.log(age);
console.log(firstName);
console.log(street);
console.log(address);
console.log(city);


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

const obj2 = {
    v1: "version_1",
    v2: "version_2",
}

const obj3 = {
    a: "obj3_a",
    b: "obj3_b",
}

const obj4 = {
    b: "obj4_b"
}

let a, b, a1, b1, c, d, rest, pop, push;

({ a, b } = obj2); // a and b both will be undefined as obj2 does not have any property with name a and b.
({ v1: a, v2: b } = obj2); // maping the object properties to get other variable name;

console.log("a: " + a);
console.log("b: " + b);

({ a: { a1 }, b: b1 } = obj) // here a1 got further destructured and b1 was the complete object from b in 'obj'.
console.log(a1);
console.log(b1);

({ a = "This one doesn't have any value for 'a'", b } = obj4); // If the obj does not have a property for destructuring then it will assign the default value defined here.

console.log(a);
console.log(b);

({ a = "This one doesn't have any value for 'a'", b } = obj3); // Other wise it will assign the value from the object.
console.log(a);
console.log(b);

