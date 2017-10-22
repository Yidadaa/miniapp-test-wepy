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
      Detail: _Detail2.default
    }, _this.data = {
      myInfo: null,
      userInfo: null,

      count: null, // 所有数据条目
      page: 0,
      pagesize: 10,
      detailList: [], // 用户动态详情

      isLoading: false,
      noMore: false
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
                this.$apply();
                this.afterLoad();
                _wepy2.default.hideLoading();

              case 14:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVXNlckluZm8iLCJEZXRhaWwiLCJkYXRhIiwibXlJbmZvIiwidXNlckluZm8iLCJjb3VudCIsInBhZ2UiLCJwYWdlc2l6ZSIsImRldGFpbExpc3QiLCJpc0xvYWRpbmciLCJub01vcmUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJsb2FkbW9yZSIsInRoYXQiLCIkYXBwbHkiLCJzZXRUaW1lb3V0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImRldGFpbCIsImxpc3QiLCJhZnRlckxvYWQiLCJoaWRlTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBcUQsc0JBQXFCLFFBQTFFLEVBQVosRUFBZ0csVUFBUyxFQUFDLDBCQUF5QixZQUExQixFQUF6RyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxrQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsSSxHQUFPO0FBQ0xDLGNBQVEsSUFESDtBQUVMQyxnQkFBVSxJQUZMOztBQUlMQyxhQUFPLElBSkYsRUFJUTtBQUNiQyxZQUFNLENBTEQ7QUFNTEMsZ0JBQVUsRUFOTDtBQU9MQyxrQkFBWSxFQVBQLEVBT1c7O0FBRWhCQyxpQkFBVyxLQVROO0FBVUxDLGNBQVE7QUFWSCxLLFFBYVBDLFEsR0FBVyxFLFFBdUJYQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNULFlBQU1DLE9BQU8sSUFBYjtBQUNBLGFBQUtMLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLTSxNQUFMO0FBQ0FDLG1CQUFXLFlBQVc7QUFDcEJGLGVBQUtMLFNBQUwsR0FBaUIsS0FBakI7QUFDQUssZUFBS0MsTUFBTDtBQUNELFNBSEQsRUFHRyxHQUhIO0FBSUQ7QUFUTyxLOzs7Ozs7Ozs7Ozs7QUFsQlIsK0JBQUtFLFdBQUwsQ0FBaUIsRUFBRUMsT0FBTyxNQUFULEVBQWpCO0FBQ0EscUJBQUtILE1BQUw7O3VCQUNvQixzQjs7O0FBQXBCLHFCQUFLWixNOzt1QkFDZ0IsMEI7OztBQUFmZ0Isc0I7O0FBQ04scUJBQUtmLFFBQUwsR0FBZ0IsaUJBQUtlLE9BQU9qQixJQUFaLEVBQWtCLENBQUMsUUFBRCxFQUFXLFVBQVgsRUFDaEMsT0FEZ0MsRUFDdkIsUUFEdUIsRUFDYixVQURhLEVBQ0QsV0FEQyxFQUNZLFNBRFosRUFDdUIsUUFEdkIsRUFDaUMsS0FEakMsQ0FBbEIsQ0FBaEI7QUFFQSxxQkFBS00sVUFBTCxHQUFrQlcsT0FBT2pCLElBQVAsQ0FBWWtCLElBQTlCO0FBQ0EscUJBQUtkLElBQUwsR0FBWSxFQUFaO0FBQ0EscUJBQUtTLE1BQUw7QUFDQSxxQkFBS00sU0FBTDtBQUNBLCtCQUFLQyxXQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1U7QUFDVixVQUFJLENBQUMsS0FBS2xCLFFBQVYsRUFBb0IsT0FBTyxJQUFQO0FBQ3BCLHFCQUFLbUIscUJBQUwsQ0FBMkIsRUFBRUwsT0FBTyxLQUFLZCxRQUFMLENBQWNvQixRQUF2QixFQUEzQjtBQUNEOzs7O0VBM0NnQyxlQUFLbEIsSTs7a0JBQW5CWCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8nXG4gIGltcG9ydCBEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWwnXG5cbiAgaW1wb3J0IHsgZ2V0VXNlckRldGFpbCwgZ2V0TXlJbmZvIH0gZnJvbSAnLi4vdXRpbHMvbW9jaydcbiAgaW1wb3J0IHsgcGljayB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVXNlckluZm9cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnVzZXJJbmZvLnN5bmNcIjpcInVzZXJJbmZvXCIsXCJ2LWJpbmQ6bXlJbmZvLnN5bmNcIjpcIm15SW5mb1wifSxcIkRldGFpbFwiOntcInYtYmluZDpkZXRhaWxMaXN0LnN5bmNcIjpcImRldGFpbExpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVXNlckluZm8sXG4gICAgICBEZXRhaWxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbXlJbmZvOiBudWxsLFxuICAgICAgdXNlckluZm86IG51bGwsXG5cbiAgICAgIGNvdW50OiBudWxsLCAvLyDmiYDmnInmlbDmja7mnaHnm65cbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlc2l6ZTogMTAsXG4gICAgICBkZXRhaWxMaXN0OiBbXSwgLy8g55So5oi35Yqo5oCB6K+m5oOFXG5cbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBub01vcmU6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfmraPlnKjliqDovb0nIH0pXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLm15SW5mbyA9IGF3YWl0IGdldE15SW5mbygpXG4gICAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCBnZXRVc2VyRGV0YWlsKClcbiAgICAgIHRoaXMudXNlckluZm8gPSBwaWNrKGRldGFpbC5kYXRhLCBbJ3VzZXJpZCcsICduaWNrbmFtZScsXG4gICAgICAgICdwaG90bycsICdnZW5kZXInLCAnYmlydGhkYXknLCAnd2FsbHBhcGVyJywgJ2Rpc2Vhc2UnLCAnZm9sbG93JywgJ2dwcyddKVxuICAgICAgdGhpcy5kZXRhaWxMaXN0ID0gZGV0YWlsLmRhdGEubGlzdFxuICAgICAgdGhpcy5wYWdlID0gMTFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHRoaXMuYWZ0ZXJMb2FkKClcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH1cblxuICAgIGFmdGVyTG9hZCgpIHtcbiAgICAgIGlmICghdGhpcy51c2VySW5mbykgcmV0dXJuIG51bGxcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IHRoaXMudXNlckluZm8ubmlja25hbWUgfSlcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgbG9hZG1vcmUoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhhdC5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19