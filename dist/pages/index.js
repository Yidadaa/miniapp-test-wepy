'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _UserInfo = require('./../components/UserInfo.js');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _Detail = require('./../components/Detail.js');

var _Detail2 = _interopRequireDefault(_Detail);

var _testChild = require('./../components/testChild.js');

var _testChild2 = _interopRequireDefault(_testChild);

var _mock = require('./../utils/mock.js');

var _utils = require('./../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "UserInfo": { "xmlns:v-bind": "", "v-bind:userInfo.sync": "userInfo", "v-bind:myInfo.sync": "myInfo" }, "Detail": { "v-bind:detailList.sync": "detailList" } }, _this.$events = {}, _this.components = {
      UserInfo: _UserInfo2.default,
      Detail: _Detail2.default,
      TestChild: _testChild2.default
    }, _this.data = {
      myInfo: null,
      userInfo: null,

      count: null, // 所有数据条目
      page: 0,
      pagesize: 10,
      detailList: [], // 用户动态详情

      isLoading: false,
      noMore: false,

      dataFuck: 0
    }, _this.computed = {}, _this.methods = {
      loadmore: function loadmore() {
        var that = this;
        this.isLoading = true;
        this.$apply();
        setTimeout(function () {
          that.isLoading = false;
          that.$apply();
        }, 500);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var detail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _wepy2.default.showLoading({ title: '正在加载' });
                this.$apply();
                _context.next = 4;
                return (0, _mock.getMyInfo)();

              case 4:
                this.myInfo = _context.sent;
                _context.next = 7;
                return (0, _mock.getUserDetail)();

              case 7:
                detail = _context.sent;

                this.userInfo = (0, _utils.pick)(detail.data, ['userid', 'nickname', 'photo', 'gender', 'birthday', 'wallpaper', 'disease', 'follow', 'gps']);
                this.detailList = detail.data.list;
                this.page = 11;
                console.log(this.page);
                this.$apply();
                this.afterLoad();
                _wepy2.default.hideLoading();

              case 15:
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
  }, {
    key: 'afterLoad',
    value: function afterLoad() {
      if (!this.userInfo) return null;
      _wepy2.default.setNavigationBarTitle({ title: this.userInfo.nickname });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVXNlckluZm8iLCJEZXRhaWwiLCJUZXN0Q2hpbGQiLCJkYXRhIiwibXlJbmZvIiwidXNlckluZm8iLCJjb3VudCIsInBhZ2UiLCJwYWdlc2l6ZSIsImRldGFpbExpc3QiLCJpc0xvYWRpbmciLCJub01vcmUiLCJkYXRhRnVjayIsImNvbXB1dGVkIiwibWV0aG9kcyIsImxvYWRtb3JlIiwidGhhdCIsIiRhcHBseSIsInNldFRpbWVvdXQiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiZGV0YWlsIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJhZnRlckxvYWQiLCJoaWRlTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixVQUExQyxFQUFxRCxzQkFBcUIsUUFBMUUsRUFBWixFQUFnRyxVQUFTLEVBQUMsMEJBQXlCLFlBQTFCLEVBQXpHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGtDQURRO0FBRVJDLDhCQUZRO0FBR1JDO0FBSFEsSyxRQU1WQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGdCQUFVLElBRkw7O0FBSUxDLGFBQU8sSUFKRixFQUlRO0FBQ2JDLFlBQU0sQ0FMRDtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGtCQUFZLEVBUFAsRUFPVzs7QUFFaEJDLGlCQUFXLEtBVE47QUFVTEMsY0FBUSxLQVZIOztBQVlMQyxnQkFBVTtBQVpMLEssUUFlUEMsUSxHQUFXLEUsUUFzQlhDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsWUFBTUMsT0FBTyxJQUFiO0FBQ0EsYUFBS04sU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtPLE1BQUw7QUFDQUMsbUJBQVcsWUFBVztBQUNwQkYsZUFBS04sU0FBTCxHQUFpQixLQUFqQjtBQUNBTSxlQUFLQyxNQUFMO0FBQ0QsU0FIRCxFQUdHLEdBSEg7QUFJRDtBQVRPLEs7Ozs7Ozs7Ozs7OztBQW5CUiwrQkFBS0UsV0FBTCxDQUFpQixFQUFFQyxPQUFPLE1BQVQsRUFBakI7QUFDQSxxQkFBS0gsTUFBTDs7dUJBQ29CLHNCOzs7QUFBcEIscUJBQUtiLE07O3VCQUNnQiwwQjs7O0FBQWZpQixzQjs7QUFDTixxQkFBS2hCLFFBQUwsR0FBZ0IsaUJBQUtnQixPQUFPbEIsSUFBWixFQUFrQixDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQ2hDLE9BRGdDLEVBQ3ZCLFFBRHVCLEVBQ2IsVUFEYSxFQUNELFdBREMsRUFDWSxTQURaLEVBQ3VCLFFBRHZCLEVBQ2lDLEtBRGpDLENBQWxCLENBQWhCO0FBRUEscUJBQUtNLFVBQUwsR0FBa0JZLE9BQU9sQixJQUFQLENBQVltQixJQUE5QjtBQUNBLHFCQUFLZixJQUFMLEdBQVksRUFBWjtBQUNBZ0Isd0JBQVFDLEdBQVIsQ0FBWSxLQUFLakIsSUFBakI7QUFDQSxxQkFBS1UsTUFBTDtBQUNBLHFCQUFLUSxTQUFMO0FBQ0EsK0JBQUtDLFdBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVTtBQUNWLFVBQUksQ0FBQyxLQUFLckIsUUFBVixFQUFvQixPQUFPLElBQVA7QUFDcEIscUJBQUtzQixxQkFBTCxDQUEyQixFQUFFUCxPQUFPLEtBQUtmLFFBQUwsQ0FBY3VCLFFBQXZCLEVBQTNCO0FBQ0Q7Ozs7RUE3Q2dDLGVBQUtyQixJOztrQkFBbkJaLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mbydcbiAgaW1wb3J0IERldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL0RldGFpbCdcbiAgaW1wb3J0IFRlc3RDaGlsZCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3RDaGlsZCdcblxuICBpbXBvcnQgeyBnZXRVc2VyRGV0YWlsLCBnZXRNeUluZm8gfSBmcm9tICcuLi91dGlscy9tb2NrJ1xuICBpbXBvcnQgeyBwaWNrIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJVc2VySW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dXNlckluZm8uc3luY1wiOlwidXNlckluZm9cIixcInYtYmluZDpteUluZm8uc3luY1wiOlwibXlJbmZvXCJ9LFwiRGV0YWlsXCI6e1widi1iaW5kOmRldGFpbExpc3Quc3luY1wiOlwiZGV0YWlsTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBVc2VySW5mbyxcbiAgICAgIERldGFpbCxcbiAgICAgIFRlc3RDaGlsZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBteUluZm86IG51bGwsXG4gICAgICB1c2VySW5mbzogbnVsbCxcblxuICAgICAgY291bnQ6IG51bGwsIC8vIOaJgOacieaVsOaNruadoeebrlxuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2VzaXplOiAxMCxcbiAgICAgIGRldGFpbExpc3Q6IFtdLCAvLyDnlKjmiLfliqjmgIHor6bmg4VcblxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIG5vTW9yZTogZmFsc2UsXG5cbiAgICAgIGRhdGFGdWNrOiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuICBcbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfmraPlnKjliqDovb0nIH0pXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLm15SW5mbyA9IGF3YWl0IGdldE15SW5mbygpXG4gICAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCBnZXRVc2VyRGV0YWlsKClcbiAgICAgIHRoaXMudXNlckluZm8gPSBwaWNrKGRldGFpbC5kYXRhLCBbJ3VzZXJpZCcsICduaWNrbmFtZScsXG4gICAgICAgICdwaG90bycsICdnZW5kZXInLCAnYmlydGhkYXknLCAnd2FsbHBhcGVyJywgJ2Rpc2Vhc2UnLCAnZm9sbG93JywgJ2dwcyddKVxuICAgICAgdGhpcy5kZXRhaWxMaXN0ID0gZGV0YWlsLmRhdGEubGlzdFxuICAgICAgdGhpcy5wYWdlID0gMTFcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHRoaXMuYWZ0ZXJMb2FkKClcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH1cblxuICAgIGFmdGVyTG9hZCgpIHtcbiAgICAgIGlmICghdGhpcy51c2VySW5mbykgcmV0dXJuIG51bGxcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IHRoaXMudXNlckluZm8ubmlja25hbWUgfSlcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgbG9hZG1vcmUoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhhdC5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19