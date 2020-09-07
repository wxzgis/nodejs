const Line = require('../line')

class Point {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }
  //#region get
  get x() { return this._x; }
  get y() { return this._y; }
  //#endregion

  //#region set
  set x(val) { 
    if(isNaN(val)) {
      throw 'Parameter is not a number!'
    }else {
      this._x = Number(val);
    }
  }
  set y(val) { 
    if(isNaN(val)) {
      throw 'Parameter is not a number!'
    }else {
      this._y = Number(val);
    }
  }
  //#endregion

  //#region 公有方法
  getX() { return this._x; }
  getY() { return this._y; }
  setX(val) { this.x = val }
  setY(val) { this.y = val }

  /** 判断点坐标是否与指定点坐标相等
   * @param {Point} point 相比较的点对象
   */
  equal(point) {
    return point.x == this._x && point.y == this._y;
  }

  

  //#endregion

  //#region 静态方法
  /** 计算两点的距离
   * @param {Point} point 其一点
   * @param {Point} anotherpoint 其二点
   * @param {String} [type=euclidean] 距离类型，manhattan或m为曼哈顿距离，其他为欧式距离，默认为欧式距离
   * @returns {Number} 返回两点距离值
   */
  static getDistance(point, anotherpoint, type = 'euclidean') {
    const { sqrt, pow, abs } = Math;
    const { x: x1, y: y1 } = point;
    const { x: x2, y: y2 } = anotherpoint;
    if(['manhattan', 'm'].indexOf(type) == -1) { // 欧式距离
      return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    }else { // 曼哈顿距离
      return abs(x2 - x1) + abs(y2 - y1);
    }
  }

  /**
   * 计算两点间的中心点
   * @param {Point} point 其一点
   * @param {Point} anotherpoint 其二点
   * @returns {Point} 返回中心点
   */
  static getCenterPoint(point, anotherpoint) {
    const { x: x1, y: y1 } = point;
    const { x: x2, y: y2 } = anotherpoint;
    const ave = (a, b) => { return (a + b) / 2; }
    return new Point(ave(x1, x2), ave(y1, y2));
  }
  //#endregion

}

module.exports = Point;