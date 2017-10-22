'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$component) {
  _inherits(Detail, _wepy$component);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      detailList: {
        type: Array,
        default: []
      }
    }, _this.computed = {
      list: function list() {
        var that = this;
        return this.detailList.map(function (v) {
          return Object.assign({}, v, {
            date: that.specialDay(v.date),
            data: v.data.map(function (data) {
              return Object.assign({}, data, {
                value: data.value.map(function (val) {
                  return Object.assign({}, val, { remarkShowText: val.remark.length > 50 ? val.remark.slice(0, 50) + '...' : val.remark });
                })
              });
            })
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'specialDay',


    /**
     * 判断日期是否为今天和明天的特殊时间
     * @param {Date} tdate
     * @return {Object} => {
     *    isSpec: Boolean // 是否为特殊时间
     *    text: String // 今天或明天
     *    month: String // 月份
     *    day: String // 日期
     *  }
     */
    value: function specialDay(tdate) {
      var today = new Date();
      var date = new Date(tdate);
      var tMonth = today.getMonth() + 1;
      var tDay = today.getDate();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var dict = ['今天', '昨天'];
      if (tMonth === month && tDay - day <= 1) {
        return {
          isSpec: true,
          text: dict[tDay - day]
        };
      } else {
        return {
          isSpec: false,
          month: month,
          day: day < 10 ? '0' + day : day
        };
      }
    }
  }]);

  return Detail;
}(_wepy2.default.component);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJwcm9wcyIsImRldGFpbExpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJsaXN0IiwidGhhdCIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsInYiLCJkYXRlIiwic3BlY2lhbERheSIsImRhdGEiLCJ2YWx1ZSIsInZhbCIsInJlbWFya1Nob3dUZXh0IiwicmVtYXJrIiwibGVuZ3RoIiwic2xpY2UiLCJ0ZGF0ZSIsInRvZGF5IiwiRGF0ZSIsInRNb250aCIsImdldE1vbnRoIiwidERheSIsImdldERhdGUiLCJtb250aCIsImRheSIsImRpY3QiLCJpc1NwZWMiLCJ0ZXh0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxjQUFNQyxLQURJO0FBRVZDLGlCQUFTO0FBRkM7QUFETixLLFFBT1JDLFEsR0FBVztBQUNUQyxVQURTLGtCQUNGO0FBQ0wsWUFBTUMsT0FBTyxJQUFiO0FBQ0EsZUFBTyxLQUFLTixVQUFMLENBQWdCTyxHQUFoQixDQUFvQixhQUFLO0FBQzlCLGlCQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDMUJDLGtCQUFNTCxLQUFLTSxVQUFMLENBQWdCRixFQUFFQyxJQUFsQixDQURvQjtBQUUxQkUsa0JBQU1ILEVBQUVHLElBQUYsQ0FBT04sR0FBUCxDQUFXO0FBQUEscUJBQVFDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSSxJQUFsQixFQUF3QjtBQUMvQ0MsdUJBQU9ELEtBQUtDLEtBQUwsQ0FBV1AsR0FBWCxDQUFlO0FBQUEseUJBQU9DLE9BQU9DLE1BQVAsQ0FDM0IsRUFEMkIsRUFDdkJNLEdBRHVCLEVBRTNCLEVBQUNDLGdCQUFnQkQsSUFBSUUsTUFBSixDQUFXQyxNQUFYLEdBQW9CLEVBQXBCLEdBQ2JILElBQUlFLE1BQUosQ0FBV0UsS0FBWCxDQUFpQixDQUFqQixFQUFvQixFQUFwQixJQUEwQixLQURiLEdBQ3FCSixJQUFJRSxNQUQxQyxFQUYyQixDQUFQO0FBQUEsaUJBQWY7QUFEd0MsZUFBeEIsQ0FBUjtBQUFBLGFBQVg7QUFGb0IsV0FBckIsQ0FBUDtBQVVELFNBWE0sQ0FBUDtBQVlEO0FBZlEsSzs7Ozs7OztBQWtCWDs7Ozs7Ozs7OzsrQkFVV0csSyxFQUFPO0FBQ2hCLFVBQU1DLFFBQVEsSUFBSUMsSUFBSixFQUFkO0FBQ0EsVUFBTVgsT0FBTyxJQUFJVyxJQUFKLENBQVNGLEtBQVQsQ0FBYjtBQUNBLFVBQU1HLFNBQVNGLE1BQU1HLFFBQU4sS0FBbUIsQ0FBbEM7QUFDQSxVQUFNQyxPQUFPSixNQUFNSyxPQUFOLEVBQWI7QUFDQSxVQUFNQyxRQUFRaEIsS0FBS2EsUUFBTCxLQUFrQixDQUFoQztBQUNBLFVBQU1JLE1BQU1qQixLQUFLZSxPQUFMLEVBQVo7QUFDQSxVQUFNRyxPQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBYjtBQUNBLFVBQUlOLFdBQVdJLEtBQVgsSUFBb0JGLE9BQU9HLEdBQVAsSUFBYyxDQUF0QyxFQUF5QztBQUN2QyxlQUFPO0FBQ0xFLGtCQUFRLElBREg7QUFFTEMsZ0JBQU1GLEtBQUtKLE9BQU9HLEdBQVo7QUFGRCxTQUFQO0FBSUQsT0FMRCxNQUtPO0FBQ0wsZUFBTztBQUNMRSxrQkFBUSxLQURIO0FBRUxILHNCQUZLO0FBR0xDLGVBQUtBLE1BQU0sRUFBTixTQUFlQSxHQUFmLEdBQXVCQTtBQUh2QixTQUFQO0FBS0Q7QUFDRjs7OztFQXhEaUMsZUFBS0ksUzs7a0JBQXBCbEMsTSIsImZpbGUiOiJEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGRldGFpbExpc3Q6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIGxpc3QoKSB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHJldHVybiB0aGlzLmRldGFpbExpc3QubWFwKHYgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB2LCB7XHJcbiAgICAgICAgICBkYXRlOiB0aGF0LnNwZWNpYWxEYXkodi5kYXRlKSxcclxuICAgICAgICAgIGRhdGE6IHYuZGF0YS5tYXAoZGF0YSA9PiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlLm1hcCh2YWwgPT4gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICB7fSwgdmFsLFxyXG4gICAgICAgICAgICAgIHtyZW1hcmtTaG93VGV4dDogdmFsLnJlbWFyay5sZW5ndGggPiA1MFxyXG4gICAgICAgICAgICAgICAgPyB2YWwucmVtYXJrLnNsaWNlKDAsIDUwKSArICcuLi4nIDogdmFsLnJlbWFya31cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3ml6XmnJ/mmK/lkKbkuLrku4rlpKnlkozmmI7lpKnnmoTnibnmrorml7bpl7RcclxuICAgKiBAcGFyYW0ge0RhdGV9IHRkYXRlXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSA9PiB7XHJcbiAgICogICAgaXNTcGVjOiBCb29sZWFuIC8vIOaYr+WQpuS4uueJueauiuaXtumXtFxyXG4gICAqICAgIHRleHQ6IFN0cmluZyAvLyDku4rlpKnmiJbmmI7lpKlcclxuICAgKiAgICBtb250aDogU3RyaW5nIC8vIOaciOS7vVxyXG4gICAqICAgIGRheTogU3RyaW5nIC8vIOaXpeacn1xyXG4gICAqICB9XHJcbiAgICovXHJcbiAgc3BlY2lhbERheSh0ZGF0ZSkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGRhdGUpXHJcbiAgICBjb25zdCB0TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMVxyXG4gICAgY29uc3QgdERheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgY29uc3QgZGljdCA9IFsn5LuK5aSpJywgJ+aYqOWkqSddXHJcbiAgICBpZiAodE1vbnRoID09PSBtb250aCAmJiB0RGF5IC0gZGF5IDw9IDEpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpc1NwZWM6IHRydWUsXHJcbiAgICAgICAgdGV4dDogZGljdFt0RGF5IC0gZGF5XVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzU3BlYzogZmFsc2UsXHJcbiAgICAgICAgbW9udGgsXHJcbiAgICAgICAgZGF5OiBkYXkgPCAxMCA/IGAwJHtkYXl9YCA6IGRheVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==