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
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("kimson");
console.log(greeter.greet());
console.log(greeter.greeting);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "red" } as SquareConfig);
console.log(mySquare);

// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...");
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Sam"];

let myStr: string = myArray[0];

class Animal {
  name: string = "";
}

class Dog extends Animal {
  breed: string = "";
}

interface NotOkay {
  // [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number; // 먼저 지정했기 때문에 더 이상 하위에서 값의 타입을 변경할 수 없다.
  length: number;
  name: number;
}

type index = "a" | "b" | "c";

type FormIndex = {
  [k in index]?: number;
};

const good: FormIndex = { b: 2, c: 3 };

const bad: FormIndex = {
  c: 3,
  // d: 5,
};

interface NestedCSS {
  color: string;
  nest: {
    [selector: string]: NestedCSS;
  };
}

const example: NestedCSS = {
  color: "red",
  nest: {
    ".subclass": {
      color: "blue",
    },
  },
};

const failsSilently: NestedCSS = {
  colour: "red", // No error as `colour` is a valid string selector
};
