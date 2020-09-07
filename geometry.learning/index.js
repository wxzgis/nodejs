const { Point, Line } = require('./geometry');

const pt1 = new Point();
const pt2 = new Point(1, 0);
const line1 = new Line(pt1, pt2);
console.log(line1.getSlope());

