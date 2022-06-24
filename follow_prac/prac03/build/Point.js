class Point {
    static q = 0;
    x;
    y;
    constructor(x, y, test) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
export default Point;
