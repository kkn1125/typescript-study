// import SomeClass from "./SomeClass";
import KimsonSorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./Characters.Collection";
import CustomerCollection from "./CustomerCollection";
import { Customer } from "./Customer";

let numbersCollection = new NumbersCollection([10, -7, 55, 3, 21]);
let charactersCollection = new CharactersCollection("TypeScript");
let customerCollection = new CustomerCollection([
  new Customer("A111", "kimson"),
  new Customer("B111", "Park"),
  new Customer("C111", "Andy"),
]);

// let sorter = new KimsonSorter(numbersCollection);
// let sorter = new KimsonSorter(charactersCollection);
let sorter = new KimsonSorter(customerCollection);
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
