"use strict";
// interface LabeledValue {
//   label: string;
// }
// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }
// let myObj = {
//   size: 10,
//   label: "Size 20 Object",
// };
// printLabel(myObj);
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("kimson");
console.log(greeter.greet());
console.log(greeter.greeting);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "red" });
console.log(mySquare);
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myArray;
myArray = ["Bob", "Sam"];
let myStr = myArray[0];
class Animal {
    constructor() {
        this.name = "";
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.breed = "";
    }
}
const good = { b: 2, c: 3 };
const bad = {
    c: 3,
    // d: 5,
};
const example = {
    color: "red",
    nest: {
        ".subclass": {
            color: "blue",
        },
    },
};
const failsSilently = {
    colour: "red", // No error as `colour` is a valid string selector
};
