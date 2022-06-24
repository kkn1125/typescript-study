"use strict";
// import Point from "./Point";
// import Point3D from "./Point3D";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`This animal is ${name}`);
    }
}
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("dogdog!");
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("MyaMya!");
    }
}
const x = [0, 1, null];
const arr = [new Cat("koko"), new Dog("kiki")];
const animals = [new Animal("wowo"), new Cat("nabi"), new Dog("coco")];
const t = [0, 1, 3];
console.log(arr);
console.log(animals);
function classDecorator(constructor) {
    console.log();
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}
let Greeter = class Greeter {
    property = "property";
    hello;
    constructor(m) {
        this.hello = m;
    }
};
Greeter = __decorate([
    classDecorator
], Greeter);
console.log(new Greeter("world"));
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Point {
    _x;
    _y;
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
let A = class A {
    b = "Hello";
    get c() {
        return `${this.b} World!`;
    }
    d(e) {
        console.log(e);
    }
};
A = __decorate([
    ClassDeco
], A);
function ClassDeco(constructor) {
    console.log(constructor);
    console.log(constructor.prototype);
}
const sym = Symbol("test");
console.log(sym);
const test = () => { };
let a = 12;
const b = {
    name: "doritos",
    javascript: "good",
};
const c = "python";
function sortBy(vals, key) {
    vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1));
    return vals;
}
function sorter(vals, key) {
    return vals.sort((a, b) => a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1);
}
console.log(sorter([
    ["name", 0],
    ["age", 2],
    ["birth", 5],
    ["test", 15],
], 10));
console.log([
    ["name", 0],
    ["age", 2],
    ["birth", 5],
    ["test", 15],
].sort());
const date = new Date().getTime();
const person = {
    name: "김사람",
    age: 20,
};
const expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people = [person, expert];
