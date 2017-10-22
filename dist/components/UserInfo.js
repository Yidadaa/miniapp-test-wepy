'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mock = require('./../utils/mock.js');

var _underscore = require('./../npm/underscore/underscore.js');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
* 用户个人信息展示
* @author Yidadaa
*/


var UserInfo = function (_wepy$component) {
  _inherits(UserInfo, _wepy$component);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      showButtons: true,
      myInfo: null,
      userInfo: null,
      isLoading: true
    }, _this.computed = {
      showButtons: function showButtons() {
        // 判断是否是在看自己的动态
        return !!this.myInfo && !!this.userInfo && this.myInfo.userid !== this.userInfo.userid;
      },
      disease: function disease() {
        return this.userInfo ? this.userInfo.disease.join(', ') : '';
      },
      age: function age() {
        if (!this.userInfo) return '';
        var birthday = new Date(this.userInfo.birthday);
        return new Date().getFullYear() - birthday.getFullYear();
      },
      gender: function gender() {
        if (!this.userInfo) return '';
        var dict = { '1': '♂', '2': '♀' };
        return dict[this.userInfo.gender];
      },
      follow: function follow() {
        if (!this.userInfo) return '';
        return this.userInfo.follow ? '√ 已关注' : '+ 关注';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserInfo, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var detail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                this.$apply();
                _context.next = 4;
                return (0, _mock.getMyInfo)();

              case 4:
                this.myInfo = _context.sent;
                _context.next = 7;
                return (0, _mock.getUserDetail)();

              case 7:
                detail = _context.sent;

                this.userInfo = _underscore2.default.pick(detail.data, 'userid', 'nickname', 'photo', 'gender', 'birthday', 'wallpaper', 'disease', 'follow', 'gps');

                this.$apply();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return UserInfo;
}(_wepy2.default.component);

exports.default = UserInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbIlVzZXJJbmZvIiwiZGF0YSIsInNob3dCdXR0b25zIiwibXlJbmZvIiwidXNlckluZm8iLCJpc0xvYWRpbmciLCJjb21wdXRlZCIsInVzZXJpZCIsImRpc2Vhc2UiLCJqb2luIiwiYWdlIiwiYmlydGhkYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZW5kZXIiLCJkaWN0IiwiZm9sbG93IiwiJGFwcGx5IiwiZGV0YWlsIiwicGljayIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0U7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQU5BOzs7Ozs7SUFRcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSSxHQUFPO0FBQ0xDLG1CQUFhLElBRFI7QUFFTEMsY0FBUSxJQUZIO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsaUJBQVc7QUFKTixLLFFBT1BDLFEsR0FBVztBQUNUSixpQkFEUyx5QkFDSztBQUNaO0FBQ0EsZUFBTyxDQUFDLENBQUMsS0FBS0MsTUFBUCxJQUNMLENBQUMsQ0FBQyxLQUFLQyxRQURGLElBRUwsS0FBS0QsTUFBTCxDQUFZSSxNQUFaLEtBQXVCLEtBQUtILFFBQUwsQ0FBY0csTUFGdkM7QUFHRCxPQU5RO0FBUVRDLGFBUlMscUJBUUM7QUFDUixlQUFPLEtBQUtKLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjSSxPQUFkLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUFoQixHQUFtRCxFQUExRDtBQUNELE9BVlE7QUFZVEMsU0FaUyxpQkFZSDtBQUNKLFlBQUksQ0FBQyxLQUFLTixRQUFWLEVBQW9CLE9BQU8sRUFBUDtBQUNwQixZQUFNTyxXQUFXLElBQUlDLElBQUosQ0FBUyxLQUFLUixRQUFMLENBQWNPLFFBQXZCLENBQWpCO0FBQ0EsZUFBTyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkJGLFNBQVNFLFdBQVQsRUFBbEM7QUFDRCxPQWhCUTtBQWtCVEMsWUFsQlMsb0JBa0JBO0FBQ1AsWUFBSSxDQUFDLEtBQUtWLFFBQVYsRUFBb0IsT0FBTyxFQUFQO0FBQ3BCLFlBQU1XLE9BQU8sRUFBRSxLQUFLLEdBQVAsRUFBWSxLQUFLLEdBQWpCLEVBQWI7QUFDQSxlQUFPQSxLQUFLLEtBQUtYLFFBQUwsQ0FBY1UsTUFBbkIsQ0FBUDtBQUNELE9BdEJRO0FBd0JURSxZQXhCUyxvQkF3QkE7QUFDUCxZQUFJLENBQUMsS0FBS1osUUFBVixFQUFvQixPQUFPLEVBQVA7QUFDcEIsZUFBTyxLQUFLQSxRQUFMLENBQWNZLE1BQWQsR0FBdUIsT0FBdkIsR0FBaUMsTUFBeEM7QUFDRDtBQTNCUSxLOzs7Ozs7Ozs7Ozs7QUErQlQscUJBQUtYLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxxQkFBS1ksTUFBTDs7dUJBQ29CLHNCOzs7QUFBcEIscUJBQUtkLE07O3VCQUNnQiwwQjs7O0FBQWZlLHNCOztBQUNOLHFCQUFLZCxRQUFMLEdBQWdCLHFCQUFFZSxJQUFGLENBQU9ELE9BQU9qQixJQUFkLEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCLEVBQ2QsT0FEYyxFQUNMLFFBREssRUFDSyxVQURMLEVBQ2lCLFdBRGpCLEVBQzhCLFNBRDlCLEVBQ3lDLFFBRHpDLEVBQ21ELEtBRG5ELENBQWhCOztBQUdBLHFCQUFLZ0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlDa0MsZUFBS0csUzs7a0JBQXRCcEIsUSIsImZpbGUiOiJVc2VySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC8qKlxyXG4gICog55So5oi35Liq5Lq65L+h5oGv5bGV56S6XHJcbiAgKiBAYXV0aG9yIFlpZGFkYWFcclxuICAqL1xyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgZ2V0VXNlckRldGFpbCwgZ2V0TXlJbmZvIH0gZnJvbSAnLi4vdXRpbHMvbW9jaydcclxuICBpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHNob3dCdXR0b25zOiB0cnVlLFxyXG4gICAgICBteUluZm86IG51bGwsXHJcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIHNob3dCdXR0b25zKCkge1xyXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+WcqOeci+iHquW3seeahOWKqOaAgVxyXG4gICAgICAgIHJldHVybiAhIXRoaXMubXlJbmZvICYmXHJcbiAgICAgICAgICAhIXRoaXMudXNlckluZm8gJiZcclxuICAgICAgICAgIHRoaXMubXlJbmZvLnVzZXJpZCAhPT0gdGhpcy51c2VySW5mby51c2VyaWRcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGRpc2Vhc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckluZm8gPyB0aGlzLnVzZXJJbmZvLmRpc2Vhc2Uuam9pbignLCAnKSA6ICcnXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvKSByZXR1cm4gJydcclxuICAgICAgICBjb25zdCBiaXJ0aGRheSA9IG5ldyBEYXRlKHRoaXMudXNlckluZm8uYmlydGhkYXkpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoZGF5LmdldEZ1bGxZZWFyKClcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckluZm8pIHJldHVybiAnJ1xyXG4gICAgICAgIGNvbnN0IGRpY3QgPSB7ICcxJzogJ+KZgicsICcyJzogJ+KZgCcgfVxyXG4gICAgICAgIHJldHVybiBkaWN0W3RoaXMudXNlckluZm8uZ2VuZGVyXVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZm9sbG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VySW5mbykgcmV0dXJuICcnXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckluZm8uZm9sbG93ID8gJ+KImiDlt7LlhbPms6gnIDogJysg5YWz5rOoJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgdGhpcy5teUluZm8gPSBhd2FpdCBnZXRNeUluZm8oKVxyXG4gICAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCBnZXRVc2VyRGV0YWlsKClcclxuICAgICAgdGhpcy51c2VySW5mbyA9IF8ucGljayhkZXRhaWwuZGF0YSwgJ3VzZXJpZCcsICduaWNrbmFtZScsXHJcbiAgICAgICAgJ3Bob3RvJywgJ2dlbmRlcicsICdiaXJ0aGRheScsICd3YWxscGFwZXInLCAnZGlzZWFzZScsICdmb2xsb3cnLCAnZ3BzJylcclxuICAgICAgXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==