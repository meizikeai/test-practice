/**
 * 判断参数类型
 * @param  {any}    param
 * @param  {string} type
 */

module.exports = (param, type) => Object.prototype.toString.call(param) === `[object ${type}]`
