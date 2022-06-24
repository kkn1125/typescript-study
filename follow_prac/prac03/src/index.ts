// import Point from "./Point";
// import Point3D from "./Point3D";

// const point = new Point(3, 5);

// const addPoint = new Point(5, 8);

// const point3D = new Point3D(1, 3, 5);

// console.log(point3D.add(new Point3D(2, 3, 5)));

// console.log(point.add(addPoint));

interface AnimalType {
  name: string;
  say(): void;
}

class Animal {
  constructor(public name: string) {}
  say(): void {
    console.log(`This animal is ${name}`);
  }
}

class Dog implements Animal {
  constructor(public name: string) {}

  say(): void {
    console.log("dogdog!");
  }
}

class Cat implements Animal {
  constructor(public name: string) {}

  say(): void {
    console.log("MyaMya!");
  }
}

const x = [0, 1, null];

const arr = [new Cat("koko"), new Dog("kiki")];

const animals = [new Animal("wowo"), new Cat("nabi"), new Dog("coco")];

const t = [0, 1, 3];
console.log(arr);
console.log(animals);

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log();
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));

function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

@ClassDeco
class A {
  b: string = "Hello";

  get c(): string {
    return `${this.b} World!`;
  }

  d(e: string): void {
    console.log(e);
  }
}

function ClassDeco(constructor: typeof A) {
  console.log(constructor);
  console.log(constructor.prototype);
}

const sym: Symbol = Symbol("test");
console.log(sym);

const test = () => {};

type AB = "A" | "B";
type AB12 = "A" | "B" | 12;
type AB12_2 = AB | 12;

let a: AB12_2 = 12 as AB12;

type Identified = {
  id: string;
};

interface Person {
  name: string;
  python?: string;
  javascript?: string;
}

interface Study {
  javascript: string;
  python?: string;
}

type PersonSpan = Person & Study;

type K = keyof (Person | Study);

const b: PersonSpan = {
  name: "doritos",
  javascript: "good",
};

const c: K = "python";

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1));

  return vals;
}

function sorter<K extends keyof T, T>(vals: T[], key: K) {
  return vals.sort((a, b) =>
    a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1
  );
}
console.log(
  sorter(
    [
      ["name", 0],
      ["age", 2],
      ["birth", 5],
      ["test", 15],
    ],
    10
  )
);

console.log(
  [
    ["name", 0],
    ["age", 2],
    ["birth", 5],
    ["test", 15],
  ].sort()
);

type NoneZeroNums = Exclude<number | string | Date, string>;

const date: NoneZeroNums = new Date().getTime();

interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: (Person | Developer)[] = [person, expert];

