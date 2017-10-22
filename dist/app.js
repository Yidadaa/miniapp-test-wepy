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
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _this.globalData = {
      userInfo: null

      // constructor () {
      //   super()
      //   console.log('hello')
      //   this.use('requestfix')
      //   // TODO: requestfix有什么作用
      // }

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJnZXRVc2VySW5mbyIsInRoYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGFBREssQ0FEQTtBQUlQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBSkQsSyxRQVlUQyxVLEdBQWE7QUFDWEMsZ0JBQVU7O0FBR1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRhLEs7Ozs7Ozs7Ozs7Ozt1QkFZc0IsS0FBS0MsV0FBTCxFOzs7QUFBakMscUJBQUtGLFVBQUwsQ0FBZ0JDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xCOzs7Ozs7O2tDQUljO0FBQ1osVUFBTUUsT0FBTyxJQUFiO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFlBQUlILEtBQUtILFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCSSxrQkFBUUYsS0FBS0gsVUFBTCxDQUFnQkMsUUFBeEI7QUFDRCxTQUZELE1BRU87QUFDTCx5QkFBS0MsV0FBTCxDQUFpQjtBQUNmSyxxQkFBUyxzQkFBTztBQUNkRixzQkFBUUcsSUFBSVAsUUFBWjtBQUNEO0FBSGMsV0FBakI7QUFLRDtBQUNGLE9BVk0sQ0FBUDtBQVdEOzs7O0VBN0MwQixlQUFLUSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3RydWN0b3IgKCkge1xyXG4gIC8vICAgc3VwZXIoKVxyXG4gIC8vICAgY29uc29sZS5sb2coJ2hlbGxvJylcclxuICAvLyAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAvLyAgIC8vIFRPRE86IHJlcXVlc3RmaXjmnInku4DkuYjkvZznlKhcclxuICAvLyB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gYXdhaXQgdGhpcy5nZXRVc2VySW5mbygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSDljIXlkKvnlKjmiLfkv6Hmga/nmoRQcm9taXNl5a+56LGhXHJcbiAgICovXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgIHJlc29sdmUodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMudXNlckluZm8pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19