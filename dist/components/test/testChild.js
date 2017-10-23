'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestChild = function (_wepy$component) {
  _inherits(TestChild, _wepy$component);

  function TestChild() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TestChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestChild.__proto__ || Object.getPrototypeOf(TestChild)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      hello: String
    }, _this.computed = {
      world: function world() {
        return this.hello + '_';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TestChild;
}(_wepy2.default.component);

exports.default = TestChild;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJUZXN0Q2hpbGQiLCJwcm9wcyIsImhlbGxvIiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJ3b3JsZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DO0FBREQsSyxRQUlSQyxRLEdBQVc7QUFDVEMsV0FEUyxtQkFDRDtBQUNOLGVBQU8sS0FBS0gsS0FBTCxHQUFhLEdBQXBCO0FBQ0Q7QUFIUSxLOzs7O0VBTDBCLGVBQUtJLFM7O2tCQUF2Qk4sUyIsImZpbGUiOiJ0ZXN0Q2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RDaGlsZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGhlbGxvOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgd29ybGQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhlbGxvICsgJ18nXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==