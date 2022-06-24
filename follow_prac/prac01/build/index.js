"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import SomeClass from "./SomeClass";
var Sorter_1 = __importDefault(require("./Sorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var Characters_Collection_1 = __importDefault(require("./Characters.Collection"));
var CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
var Customer_1 = require("./Customer");
var numbersCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
var charactersCollection = new Characters_Collection_1.default("TypeScript");
var customerCollection = new CustomerCollection_1.default([
    new Customer_1.Customer("A111", "kimson"),
    new Customer_1.Customer("B111", "Park"),
    new Customer_1.Customer("C111", "Andy"),
]);
// let sorter = new KimsonSorter(numbersCollection);
// let sorter = new KimsonSorter(charactersCollection);
var sorter = new Sorter_1.default(customerCollection);
sorter.sort();
sorter.printCollection();
// let sorter = new KimsonSorter([10, 5, -4, 3, 1, 2, 6, 9]);
// console.log(sorter.sort());
// sorter = new KimsonSorter("trst");
// console.log(sorter.sort());
// // type Member = [number, string, string];
// // const john: Member = [123, "kimson", 'watson'];
// type Member = {
//   name: string;
//   info?: {
//     // 객체에서 상위 프로퍼티인 info는 옵션이지만 한 번 설정되면 하위 프로퍼티는 optional 연산자 해당이 안되어 꼭 기입해야한다.
//     age: number;
//     wow: string;
//   };
// };
// const member: Member = {
//   name: "kimson",
//   info: {
//     age: 30,
//     wow: "string",
//   },
// };
// const my = new SomeClass('kimson');
// my.callName();
