'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index'],
      window: {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "rgb(56, 57, 61)",
        "navigationBarTitleText": "我的相册",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": true
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUserInfo();

              case 2:
                this.globalData.userInfo = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref2.apply(this, arguments);
      }

      return onLaunch;
    }()

    /**
     * 获取用户信息
     * @return {Promise} 包含用户信息的Promise对象
     */

  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      var that = this;
      return new Promise(function (resolve, reject) {
        if (that.globalData.userInfo) {
          resolve(that.globalData.userInfo);
        } else {
          _wepy2.default.getUserInfo({
            success: function success(res) {
              resolve(res.userInfo);
            }
          });
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImdldFVzZXJJbmZvIiwidGhhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyxhQUFPLENBQ0wsYUFESyxDQURBO0FBSVBDLGNBQVE7QUFDTiwrQkFBc0IsT0FEaEI7QUFFTix3Q0FBZ0MsaUJBRjFCO0FBR04sa0NBQTBCLE1BSHBCO0FBSU4sa0NBQXlCLE9BSm5CO0FBS04saUNBQXlCO0FBTG5CO0FBSkQsSyxRQWFUQyxVLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLOzs7Ozs7Ozs7Ozs7dUJBS3NCLEtBQUtDLFdBQUwsRTs7O0FBQWpDLHFCQUFLRixVQUFMLENBQWdCQyxROzs7Ozs7Ozs7Ozs7Ozs7OztBQUdsQjs7Ozs7OztrQ0FJYztBQUNaLFVBQU1FLE9BQU8sSUFBYjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxZQUFJSCxLQUFLSCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1Qkksa0JBQVFGLEtBQUtILFVBQUwsQ0FBZ0JDLFFBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wseUJBQUtDLFdBQUwsQ0FBaUI7QUFDZksscUJBQVMsc0JBQU87QUFDZEYsc0JBQVFHLElBQUlQLFFBQVo7QUFDRDtBQUhjLFdBQWpCO0FBS0Q7QUFDRixPQVZNLENBQVA7QUFXRDs7OztFQXZDMEIsZUFBS1EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBcImJhY2tncm91bmRUZXh0U3R5bGVcIjpcImxpZ2h0XCIsXHJcbiAgICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOiBcInJnYig1NiwgNTcsIDYxKVwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjogXCLmiJHnmoTnm7jlhoxcIixcclxuICAgICAgXCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6XCJ3aGl0ZVwiLFxyXG4gICAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGF3YWl0IHRoaXMuZ2V0VXNlckluZm8oKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W55So5oi35L+h5oGvXHJcbiAgICogQHJldHVybiB7UHJvbWlzZX0g5YyF5ZCr55So5oi35L+h5oGv55qEUHJvbWlzZeWvueixoVxyXG4gICAqL1xyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICh0aGF0Lmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgICByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnVzZXJJbmZvKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==