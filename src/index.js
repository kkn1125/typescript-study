class TodoItem {
  constructor(id, task, complete) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetails() {
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "(complete)" : ""}`
    );
  }
}

// const data = [
//   {
//     id: 0,
//     task: "장보기",
//     complete: true,
//   },
//   {
//     id: 1,
//     task: "TS 학습하기",
//     complete: false,
//   },
// ];

// data.forEach((item) => {
//   const todoItem = new TodoItem(...Object.values(item));
//   todoItem.printDetails();
// });
