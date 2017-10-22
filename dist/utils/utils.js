"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 一些工具方法
 * @author Yidadaa
 */

function pick(obj, list) {
  var ret = {};
  list.forEach(function (v) {
    return ret[v] = obj[v];
  });
  return ret;
}

exports.pick = pick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbInBpY2siLCJvYmoiLCJsaXN0IiwicmV0IiwiZm9yRWFjaCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7O0FBS0EsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixNQUFJQyxNQUFNLEVBQVY7QUFDQUQsT0FBS0UsT0FBTCxDQUFhO0FBQUEsV0FBS0QsSUFBSUUsQ0FBSixJQUFTSixJQUFJSSxDQUFKLENBQWQ7QUFBQSxHQUFiO0FBQ0EsU0FBT0YsR0FBUDtBQUNEOztRQUdDSCxJLEdBQUFBLEkiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGUg5LiA5Lqb5bel5YW35pa55rOVXHJcbiAqIEBhdXRob3IgWWlkYWRhYVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHBpY2sob2JqLCBsaXN0KSB7XHJcbiAgbGV0IHJldCA9IHt9XHJcbiAgbGlzdC5mb3JFYWNoKHYgPT4gcmV0W3ZdID0gb2JqW3ZdKVxyXG4gIHJldHVybiByZXRcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBwaWNrXHJcbn0iXX0=