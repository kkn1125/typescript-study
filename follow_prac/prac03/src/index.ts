// import Point from "./Point";
// import Point3D from "./Point3D";

// const point = new Point(3, 5);

// const addPoint = new Point(5, 8);

// const point3D = new Point3D(1, 3, 5);

// console.log(point3D.add(new Point3D(2, 3, 5)));

// console.log(point.add(addPoint));

interface Animal {
  name: string;
  say(): void;
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

const animals: Animal[] = [new Cat("nabi"), new Dog("coco")];

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
