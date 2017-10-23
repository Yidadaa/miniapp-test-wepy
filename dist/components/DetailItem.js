'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailItem = function (_wepy$component) {
  _inherits(DetailItem, _wepy$component);

  function DetailItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DetailItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DetailItem.__proto__ || Object.getPrototypeOf(DetailItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      item: {
        type: Object,
        default: {}
      }
    }, _this.computed = {
      value: function value() {
        console.log(this.item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return DetailItem;
}(_wepy2.default.component);

exports.default = DetailItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRldGFpbEl0ZW0uanMiXSwibmFtZXMiOlsiRGV0YWlsSXRlbSIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTDtBQURBLEssUUFPUkMsUSxHQUFXO0FBQ1RDLFdBRFMsbUJBQ0Q7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLUCxJQUFqQjtBQUNEO0FBSFEsSzs7OztFQVIyQixlQUFLUSxTOztrQkFBeEJWLFUiLCJmaWxlIjoiRGV0YWlsSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGl0ZW06IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICB2YWx1ZSgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=