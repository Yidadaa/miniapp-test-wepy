'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
        var _this2 = this;

        var that = this;
        var processValue = function processValue(val) {
          return Object.assign({}, val, {
            remarkShowText: val.remark.length > 50 ? val.remark.slice(0, 50) + '...' : val.remark, // 对remark文字进行截断处理
            textColor: _this2.getTextColor(val.value, val.range) // 计算文本颜色
          });
        };
        var list = this.detailList.map(function (v) {
          return Object.assign({}, v, {
            date: that.specialDay(v.date),
            data: v.data.map(function (data) {
              return Object.assign({}, data, {
                value: data.value.map ? data.value.map(processValue) : processValue(data.value)
              });
            }) // 对于数组和单个值分开处理
          });
        });
        // console.log(list)
        return list;
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

    /**
     * 获取某个值对应的颜色
     * @param {Number} value
     * @param {Object} range
     * @param {String} color
     */

  }, {
    key: 'getTextColor',
    value: function getTextColor(value, range) {
      var colorSet = {
        low: 'blue',
        normal: 'green',
        slight: 'dodgerblue',
        moderate: 'red',
        severe: 'darkred'
      };
      var inRange = null;
      Object.keys(range).forEach(function (v) {
        var _range$v = _slicedToArray(range[v], 2),
            min = _range$v[0],
            max = _range$v[1];

        if (value >= min && value < max) {
          inRange = v;
        }
      });
      // console.log(colorSet[inRange])
      return colorSet[inRange] || '#aaa';
    }
  }]);

  return Detail;
}(_wepy2.default.component);

exports.default = Detail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJwcm9wcyIsImRldGFpbExpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJsaXN0IiwidGhhdCIsInByb2Nlc3NWYWx1ZSIsIk9iamVjdCIsImFzc2lnbiIsInZhbCIsInJlbWFya1Nob3dUZXh0IiwicmVtYXJrIiwibGVuZ3RoIiwic2xpY2UiLCJ0ZXh0Q29sb3IiLCJnZXRUZXh0Q29sb3IiLCJ2YWx1ZSIsInJhbmdlIiwibWFwIiwidiIsImRhdGUiLCJzcGVjaWFsRGF5IiwiZGF0YSIsInRkYXRlIiwidG9kYXkiLCJEYXRlIiwidE1vbnRoIiwiZ2V0TW9udGgiLCJ0RGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZGF5IiwiZGljdCIsImlzU3BlYyIsInRleHQiLCJjb2xvclNldCIsImxvdyIsIm5vcm1hbCIsInNsaWdodCIsIm1vZGVyYXRlIiwic2V2ZXJlIiwiaW5SYW5nZSIsImtleXMiLCJmb3JFYWNoIiwibWluIiwibWF4IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLEtBREk7QUFFVkMsaUJBQVM7QUFGQztBQUROLEssUUFPUkMsUSxHQUFXO0FBQ1RDLFVBRFMsa0JBQ0Y7QUFBQTs7QUFDTCxZQUFNQyxPQUFPLElBQWI7QUFDQSxZQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxpQkFBT0MsT0FBT0MsTUFBUCxDQUMxQixFQUQwQixFQUN0QkMsR0FEc0IsRUFFMUI7QUFDRUMsNEJBQWdCRCxJQUFJRSxNQUFKLENBQVdDLE1BQVgsR0FBb0IsRUFBcEIsR0FDWkgsSUFBSUUsTUFBSixDQUFXRSxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEVBQXBCLElBQTBCLEtBRGQsR0FDc0JKLElBQUlFLE1BRjVDLEVBRW9EO0FBQ2xERyx1QkFBVyxPQUFLQyxZQUFMLENBQWtCTixJQUFJTyxLQUF0QixFQUE2QlAsSUFBSVEsS0FBakMsQ0FIYixDQUdxRDtBQUhyRCxXQUYwQixDQUFQO0FBQUEsU0FBckI7QUFRQSxZQUFNYixPQUFPLEtBQUtMLFVBQUwsQ0FBZ0JtQixHQUFoQixDQUFvQixhQUFLO0FBQ3BDLGlCQUFPWCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlcsQ0FBbEIsRUFBcUI7QUFDMUJDLGtCQUFNZixLQUFLZ0IsVUFBTCxDQUFnQkYsRUFBRUMsSUFBbEIsQ0FEb0I7QUFFMUJFLGtCQUFNSCxFQUFFRyxJQUFGLENBQU9KLEdBQVAsQ0FBVztBQUFBLHFCQUFRWCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQmMsSUFBbEIsRUFBd0I7QUFDL0NOLHVCQUFPTSxLQUFLTixLQUFMLENBQVdFLEdBQVgsR0FBaUJJLEtBQUtOLEtBQUwsQ0FBV0UsR0FBWCxDQUFlWixZQUFmLENBQWpCLEdBQWdEQSxhQUFhZ0IsS0FBS04sS0FBbEI7QUFEUixlQUF4QixDQUFSO0FBQUEsYUFBWCxDQUZvQixDQUl0QjtBQUpzQixXQUFyQixDQUFQO0FBTUQsU0FQWSxDQUFiO0FBUUE7QUFDQSxlQUFPWixJQUFQO0FBQ0Q7QUFyQlEsSzs7Ozs7OztBQXdCWDs7Ozs7Ozs7OzsrQkFVV21CLEssRUFBTztBQUNoQixVQUFNQyxRQUFRLElBQUlDLElBQUosRUFBZDtBQUNBLFVBQU1MLE9BQU8sSUFBSUssSUFBSixDQUFTRixLQUFULENBQWI7QUFDQSxVQUFNRyxTQUFTRixNQUFNRyxRQUFOLEtBQW1CLENBQWxDO0FBQ0EsVUFBTUMsT0FBT0osTUFBTUssT0FBTixFQUFiO0FBQ0EsVUFBTUMsUUFBUVYsS0FBS08sUUFBTCxLQUFrQixDQUFoQztBQUNBLFVBQU1JLE1BQU1YLEtBQUtTLE9BQUwsRUFBWjtBQUNBLFVBQU1HLE9BQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFiO0FBQ0EsVUFBSU4sV0FBV0ksS0FBWCxJQUFvQkYsT0FBT0csR0FBUCxJQUFjLENBQXRDLEVBQXlDO0FBQ3ZDLGVBQU87QUFDTEUsa0JBQVEsSUFESDtBQUVMQyxnQkFBTUYsS0FBS0osT0FBT0csR0FBWjtBQUZELFNBQVA7QUFJRCxPQUxELE1BS087QUFDTCxlQUFPO0FBQ0xFLGtCQUFRLEtBREg7QUFFTEgsc0JBRks7QUFHTEMsZUFBS0EsTUFBTSxFQUFOLFNBQWVBLEdBQWYsR0FBdUJBO0FBSHZCLFNBQVA7QUFLRDtBQUNGOztBQUVEOzs7Ozs7Ozs7aUNBTWFmLEssRUFBT0MsSyxFQUFPO0FBQ3pCLFVBQU1rQixXQUFXO0FBQ2ZDLGFBQUssTUFEVTtBQUVmQyxnQkFBUSxPQUZPO0FBR2ZDLGdCQUFRLFlBSE87QUFJZkMsa0JBQVUsS0FKSztBQUtmQyxnQkFBUTtBQUxPLE9BQWpCO0FBT0EsVUFBSUMsVUFBVSxJQUFkO0FBQ0FsQyxhQUFPbUMsSUFBUCxDQUFZekIsS0FBWixFQUFtQjBCLE9BQW5CLENBQTJCLGFBQUs7QUFBQSxzQ0FDWDFCLE1BQU1FLENBQU4sQ0FEVztBQUFBLFlBQ3ZCeUIsR0FEdUI7QUFBQSxZQUNsQkMsR0FEa0I7O0FBRTlCLFlBQUk3QixTQUFTNEIsR0FBVCxJQUFnQjVCLFFBQVE2QixHQUE1QixFQUFpQztBQUMvQkosb0JBQVV0QixDQUFWO0FBQ0Q7QUFDRixPQUxEO0FBTUE7QUFDQSxhQUFPZ0IsU0FBU00sT0FBVCxLQUFxQixNQUE1QjtBQUNEOzs7O0VBdkZpQyxlQUFLSyxTOztrQkFBcEJqRCxNIiwiZmlsZSI6IkRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgZGV0YWlsTGlzdDoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgbGlzdCgpIHtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgICAgY29uc3QgcHJvY2Vzc1ZhbHVlID0gdmFsID0+IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge30sIHZhbCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZW1hcmtTaG93VGV4dDogdmFsLnJlbWFyay5sZW5ndGggPiA1MFxyXG4gICAgICAgICAgICA/IHZhbC5yZW1hcmsuc2xpY2UoMCwgNTApICsgJy4uLicgOiB2YWwucmVtYXJrLCAvLyDlr7lyZW1hcmvmloflrZfov5vooYzmiKrmlq3lpITnkIZcclxuICAgICAgICAgIHRleHRDb2xvcjogdGhpcy5nZXRUZXh0Q29sb3IodmFsLnZhbHVlLCB2YWwucmFuZ2UpIC8vIOiuoeeul+aWh+acrOminOiJslxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICBjb25zdCBsaXN0ID0gdGhpcy5kZXRhaWxMaXN0Lm1hcCh2ID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdiwge1xyXG4gICAgICAgICAgZGF0ZTogdGhhdC5zcGVjaWFsRGF5KHYuZGF0ZSksXHJcbiAgICAgICAgICBkYXRhOiB2LmRhdGEubWFwKGRhdGEgPT4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZS5tYXAgPyBkYXRhLnZhbHVlLm1hcChwcm9jZXNzVmFsdWUpIDogcHJvY2Vzc1ZhbHVlKGRhdGEudmFsdWUpXHJcbiAgICAgICAgICB9KSkgLy8g5a+55LqO5pWw57uE5ZKM5Y2V5Liq5YC85YiG5byA5aSE55CGXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2cobGlzdClcclxuICAgICAgcmV0dXJuIGxpc3RcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreaXpeacn+aYr+WQpuS4uuS7iuWkqeWSjOaYjuWkqeeahOeJueauiuaXtumXtFxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gdGRhdGVcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9ID0+IHtcclxuICAgKiAgICBpc1NwZWM6IEJvb2xlYW4gLy8g5piv5ZCm5Li654m55q6K5pe26Ze0XHJcbiAgICogICAgdGV4dDogU3RyaW5nIC8vIOS7iuWkqeaIluaYjuWkqVxyXG4gICAqICAgIG1vbnRoOiBTdHJpbmcgLy8g5pyI5Lu9XHJcbiAgICogICAgZGF5OiBTdHJpbmcgLy8g5pel5pyfXHJcbiAgICogIH1cclxuICAgKi9cclxuICBzcGVjaWFsRGF5KHRkYXRlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0ZGF0ZSlcclxuICAgIGNvbnN0IHRNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgICBjb25zdCB0RGF5ID0gdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICBjb25zdCBkaWN0ID0gWyfku4rlpKknLCAn5pio5aSpJ11cclxuICAgIGlmICh0TW9udGggPT09IG1vbnRoICYmIHREYXkgLSBkYXkgPD0gMSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzU3BlYzogdHJ1ZSxcclxuICAgICAgICB0ZXh0OiBkaWN0W3REYXkgLSBkYXldXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNTcGVjOiBmYWxzZSxcclxuICAgICAgICBtb250aCxcclxuICAgICAgICBkYXk6IGRheSA8IDEwID8gYDAke2RheX1gIDogZGF5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluafkOS4quWAvOWvueW6lOeahOminOiJslxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByYW5nZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvclxyXG4gICAqL1xyXG4gIGdldFRleHRDb2xvcih2YWx1ZSwgcmFuZ2UpIHtcclxuICAgIGNvbnN0IGNvbG9yU2V0ID0ge1xyXG4gICAgICBsb3c6ICdibHVlJyxcclxuICAgICAgbm9ybWFsOiAnZ3JlZW4nLFxyXG4gICAgICBzbGlnaHQ6ICdkb2RnZXJibHVlJyxcclxuICAgICAgbW9kZXJhdGU6ICdyZWQnLFxyXG4gICAgICBzZXZlcmU6ICdkYXJrcmVkJ1xyXG4gICAgfVxyXG4gICAgbGV0IGluUmFuZ2UgPSBudWxsXHJcbiAgICBPYmplY3Qua2V5cyhyYW5nZSkuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgY29uc3QgW21pbiwgbWF4XSA9IHJhbmdlW3ZdXHJcbiAgICAgIGlmICh2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPCBtYXgpIHtcclxuICAgICAgICBpblJhbmdlID0gdlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coY29sb3JTZXRbaW5SYW5nZV0pXHJcbiAgICByZXR1cm4gY29sb3JTZXRbaW5SYW5nZV0gfHwgJyNhYWEnXHJcbiAgfVxyXG59XHJcbiJdfQ==