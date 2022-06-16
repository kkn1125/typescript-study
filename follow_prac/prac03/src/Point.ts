class Point {
  static q: number = 0;
  x: number;
  y: number;
  constructor(x: number, y: number, test?: string) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

export default Point;
