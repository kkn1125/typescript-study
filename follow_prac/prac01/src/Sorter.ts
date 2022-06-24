import NumbersCollection from "./NumbersCollection";

// type collection = number[] | string;

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class KimsonSorter {
  constructor(private collection: Sortable) {}

  // get getCollection() {
  //   return this.collection;
  // }

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (typeof this.collection === "string") {
        //   if (
        //     this.collection[j].toLowerCase() >
        //     this.collection[j + 1].toLowerCase()
        //   ) {
        //     const characters = this.collection.split("");
        //     const temp = characters[j];
        //     characters[j] = characters[j + 1];
        //     characters[j + 1] = temp;
        //     this.collection = characters.join("");
        //   }
        // }
        // if (this.collection instanceof Array<number>) {
        //   if (this.collection[j] > this.collection[j + 1]) {
        //     // swap
        //     const temp = this.collection[j];
        //     this.collection[j] = this.collection[j + 1];
        //     this.collection[j + 1] = temp;
        //   }
        // }
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    // return this.collection;
  }

  printCollection(): void {
    console.log(this.collection);
  }
}

export default KimsonSorter;
