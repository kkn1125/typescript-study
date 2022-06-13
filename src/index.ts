import { data } from "./data";
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";

// data.forEach((item) => {
//   const todoItem = new TodoItem(item.id, item.task, item.complete);
//   todoItem.printDetails();
// });

const sampleTodos: TodoItem[] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("친구 만나기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);

myTodoCollection.removeComplete();

myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("============================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());

// let tupled: [string, number];

// const tuples: typeof tupled[] = [];

// // tuples.push(["wow", 30]);
// tupled = ["", 0];

// console.log("qweqweqwe", tupled);

// console.log(tuples);

// let newTuple: (string | number)[] = [];

// newTuple.push("3", 5, 7);

// console.log(newTuple);
