import Point from "./Point";
class Point3D extends Point {
    z;
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(point) {
        let point2d = super.add(point);
        return new Point3D(point2d.x, point2d.y, this.z + point.z);
    }
}
export default Point3D;
