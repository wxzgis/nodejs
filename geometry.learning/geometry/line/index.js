const Point = require('../point');

class Line {
  constructor(stratPoint, endPoint) {
    this._stratPoint = stratPoint;
    this._endPoint = endPoint;
  }

  //#region 公有方法
  getStartPoint() { return this._stratPoint; }
  getEndPoint() {  return this._endPoint; }

  /**
   * 获得线段长度
   * @returns {Number} 返回线段长度
   */
  getLength() {
    return Point.getDistance(this._stratPoint, this._endPoint);
  }

  /**
   * 获得线段的中点
   * @returns {Point} 返回线段中点
   */
  getCenterPoint() {
    return Point.getCenterPoint(this._stratPoint, this._endPoint);
  }

  /**
   * 获得线段的斜率
   * @returns {Number} 返回线段斜率，返回NaN时，线段与X轴平行
   */
  getSlope() {
    const { x: x1, y: y1 } = this._stratPoint;
    const { x: x2, y: y2 } = this._endPoint;
    if(x1 == x2) return NaN;
    else return (y2 - y1) / (x2 - x1);
  }

  //#endregion

}

module.exports = Line