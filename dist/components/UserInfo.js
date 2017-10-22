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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      userInfo: {
        type: Object,
        default: null
      },
      myInfo: {
        type: Object,
        default: null
      }
    }, _this.computed = {
      showButtons: function showButtons() {
        // 判断是否显示私信、关注按钮
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
    }, _this.methods = {
      onFollowBtn: function onFollowBtn() {
        if (this.showButtons && this.userInfo.follow) {
          _wepy2.default.showModal({
            title: '确认',
            content: '确认取消关注该用户？',
            success: function success() {
              // TODO: 触发取消关注请求
              console.log('unfollow user!');
            }
          });
        }
      },
      onChatBtn: function onChatBtn() {
        console.log('chat button pressed!');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return UserInfo;
}(_wepy2.default.component);

exports.default = UserInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbIlVzZXJJbmZvIiwicHJvcHMiLCJ1c2VySW5mbyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwibXlJbmZvIiwiY29tcHV0ZWQiLCJzaG93QnV0dG9ucyIsInVzZXJpZCIsImRpc2Vhc2UiLCJqb2luIiwiYWdlIiwiYmlydGhkYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZW5kZXIiLCJkaWN0IiwiZm9sbG93IiwibWV0aG9kcyIsIm9uRm9sbG93QnRuIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYXRCdG4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLRTs7Ozs7Ozs7Ozs7QUFKQTs7Ozs7O0lBTXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNQyxNQURFO0FBRVJDLGlCQUFTO0FBRkQsT0FESjtBQUtOQyxjQUFRO0FBQ05ILGNBQU1DLE1BREE7QUFFTkMsaUJBQVM7QUFGSDtBQUxGLEssUUFXUkUsUSxHQUFXO0FBQ1RDLGlCQURTLHlCQUNLO0FBQ1o7QUFDQSxlQUFPLENBQUMsQ0FBQyxLQUFLRixNQUFQLElBQ0wsQ0FBQyxDQUFDLEtBQUtKLFFBREYsSUFFTCxLQUFLSSxNQUFMLENBQVlHLE1BQVosS0FBdUIsS0FBS1AsUUFBTCxDQUFjTyxNQUZ2QztBQUdELE9BTlE7QUFRVEMsYUFSUyxxQkFRQztBQUNSLGVBQU8sS0FBS1IsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNRLE9BQWQsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQWhCLEdBQW1ELEVBQTFEO0FBQ0QsT0FWUTtBQVlUQyxTQVpTLGlCQVlIO0FBQ0osWUFBSSxDQUFDLEtBQUtWLFFBQVYsRUFBb0IsT0FBTyxFQUFQO0FBQ3BCLFlBQU1XLFdBQVcsSUFBSUMsSUFBSixDQUFTLEtBQUtaLFFBQUwsQ0FBY1csUUFBdkIsQ0FBakI7QUFDQSxlQUFPLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQkYsU0FBU0UsV0FBVCxFQUFsQztBQUNELE9BaEJRO0FBa0JUQyxZQWxCUyxvQkFrQkE7QUFDUCxZQUFJLENBQUMsS0FBS2QsUUFBVixFQUFvQixPQUFPLEVBQVA7QUFDcEIsWUFBTWUsT0FBTyxFQUFFLEtBQUssR0FBUCxFQUFZLEtBQUssR0FBakIsRUFBYjtBQUNBLGVBQU9BLEtBQUssS0FBS2YsUUFBTCxDQUFjYyxNQUFuQixDQUFQO0FBQ0QsT0F0QlE7QUF3QlRFLFlBeEJTLG9CQXdCQTtBQUNQLFlBQUksQ0FBQyxLQUFLaEIsUUFBVixFQUFvQixPQUFPLEVBQVA7QUFDcEIsZUFBTyxLQUFLQSxRQUFMLENBQWNnQixNQUFkLEdBQXVCLE9BQXZCLEdBQWlDLE1BQXhDO0FBQ0Q7QUEzQlEsSyxRQThCWEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osWUFBSSxLQUFLWixXQUFMLElBQW9CLEtBQUtOLFFBQUwsQ0FBY2dCLE1BQXRDLEVBQThDO0FBQzVDLHlCQUFLRyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sSUFETTtBQUViQyxxQkFBUyxZQUZJO0FBR2JDLHFCQUFTLG1CQUFNO0FBQ2I7QUFDQUMsc0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBTlksV0FBZjtBQVFEO0FBQ0YsT0FaTztBQWFSQyxlQWJRLHVCQWFJO0FBQ1ZGLGdCQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDRDtBQWZPLEs7Ozs7RUExQzBCLGVBQUtFLFM7O2tCQUF0QjVCLFEiLCJmaWxlIjoiVXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvKipcclxuICAqIOeUqOaIt+S4quS6uuS/oeaBr+WxleekulxyXG4gICogQGF1dGhvciBZaWRhZGFhXHJcbiAgKi9cclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIG15SW5mbzoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgc2hvd0J1dHRvbnMoKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5pi+56S656eB5L+h44CB5YWz5rOo5oyJ6ZKuXHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5teUluZm8gJiZcclxuICAgICAgICAgICEhdGhpcy51c2VySW5mbyAmJlxyXG4gICAgICAgICAgdGhpcy5teUluZm8udXNlcmlkICE9PSB0aGlzLnVzZXJJbmZvLnVzZXJpZFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZGlzZWFzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VySW5mbyA/IHRoaXMudXNlckluZm8uZGlzZWFzZS5qb2luKCcsICcpIDogJydcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGFnZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckluZm8pIHJldHVybiAnJ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5ID0gbmV3IERhdGUodGhpcy51c2VySW5mby5iaXJ0aGRheSlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gYmlydGhkYXkuZ2V0RnVsbFllYXIoKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ2VuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VySW5mbykgcmV0dXJuICcnXHJcbiAgICAgICAgY29uc3QgZGljdCA9IHsgJzEnOiAn4pmCJywgJzInOiAn4pmAJyB9XHJcbiAgICAgICAgcmV0dXJuIGRpY3RbdGhpcy51c2VySW5mby5nZW5kZXJdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBmb2xsb3coKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvKSByZXR1cm4gJydcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VySW5mby5mb2xsb3cgPyAn4oiaIOW3suWFs+azqCcgOiAnKyDlhbPms6gnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvbkZvbGxvd0J0bigpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93QnV0dG9ucyAmJiB0aGlzLnVzZXJJbmZvLmZvbGxvdykge1xyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+ehruiupCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTlj5bmtojlhbPms6jor6XnlKjmiLfvvJ8nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gVE9ETzog6Kem5Y+R5Y+W5raI5YWz5rOo6K+35rGCXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZm9sbG93IHVzZXIhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2hhdEJ0bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hhdCBidXR0b24gcHJlc3NlZCEnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=