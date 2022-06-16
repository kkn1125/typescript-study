import Point from "./Point";

class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    let point2d = super.add(point);
    return new Point3D(point2d.x, point2d.y, this.z + point.z);
  }
}

export default Point3D;
