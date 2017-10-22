"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 模拟数据接口方法
 * @author Yidadaa
 */
var img = '../assets/bg.jpg';

var userInfo = {
  "userid": "1002", //用户id
  "nickname": "张韶涵",
  "gender": "2", //选择：1:男 2：女
  "birthday": "1988-03-29", //生日
  "photo": img, //头像
  "wallpaper": img, //背景图
  "disease": ["高血糖", "高血压"], //用户监控疾病名字
  "follow": true, //是否关注  
  "gps": { "x": 23, "y": 123 } //城市gps
};

var myInfo = {
  "userid": "1001",
  "nickname": "东方不败",
  "photo": img,
  "gender": 1, //1：男2：女
  "birthday": "1990-12-26",
  "height": 180,
  "phonenumber": "13156234521",
  "remark": "Lucy"

  /**
   * 返回n以内的整数
   * @param {*Number} n 
   */
};function rand(n) {
  return parseInt(Math.random() * n);
}

/**
 * 模仿实际请求中的延迟
 * @param {Object} data 需要返回的数据
 * @return {Promise} 包装后的Promise
 */
var response = function response(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data);
    }, Math.random() * 1000);
  });
};

/**
 * 生成某一天的假数据
 * @param {Number} 距今天几天
 */
var getDateList = function getDateList(n) {
  var data = {
    "recordid": "xxxxxxxxxxx", //记录id
    "date": new Date(new Date() - n * 24 * 3600 * 1000), //记录日期
    "text": "xxxxxxxx", //系统建议 
    "data": []
  };
  var item = function item(n) {
    return new Array(n).fill({
      "type": "blood", // blood/sugar/weight/medindex
      "value": [{ //blood时是[lowpress,highpress,heart],其他都是单个
        "value": 12, //具体指标 的值
        "para": "", //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(10) + 10).fill('今天头痛').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213", //指标
        "name": "高压", //空腹血糖，饭前血糖
        "range": {
          "low": [0, 1], // 过低
          "normal": [1, 2], // 正常
          "slight": [2, 3], // 轻度
          "moderate": [3, 4], // 中度
          "severe": [4, 5] // 重度
        }
      }]
    });
  };
  return Object.assign({}, data, {
    data: item(1)
  });
};

/**
 * 生成用户的假数据
 */
function getUserDetail() {
  return response({
    "status": 0,
    "msg": "",
    "data": Object.assign({
      "ctime": "2016-11-10 15:55:59", //时间 最新一天一条指标发布的时间
      "count": 10, //总记录数
      "currentpage": 1, //当前页
      "totalpage": 5, //每页显示数
      "list": new Array(10).fill(0).map(function (v, i) {
        return getDateList(i);
      })
    }, userInfo)
  });
}

function getMyInfo() {
  return response(myInfo);
}
exports.getUserDetail = getUserDetail;
exports.getMyInfo = getMyInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2suanMiXSwibmFtZXMiOlsiaW1nIiwidXNlckluZm8iLCJteUluZm8iLCJyYW5kIiwibiIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsInJlc3BvbnNlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldERhdGVMaXN0IiwiRGF0ZSIsIml0ZW0iLCJBcnJheSIsImZpbGwiLCJqb2luIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0VXNlckRldGFpbCIsIm1hcCIsInYiLCJpIiwiZ2V0TXlJbmZvIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUEsSUFBTUEsTUFBTSxrQkFBWjs7QUFFQSxJQUFNQyxXQUFXO0FBQ2YsWUFBVSxNQURLLEVBQ0k7QUFDbkIsY0FBWSxLQUZHO0FBR2YsWUFBVSxHQUhLLEVBR2E7QUFDNUIsY0FBWSxZQUpHLEVBSWM7QUFDN0IsV0FBU0QsR0FMTSxFQUtVO0FBQ3pCLGVBQWFBLEdBTkUsRUFNRztBQUNsQixhQUFXLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FQSSxFQU9ZO0FBQzNCLFlBQVUsSUFSSyxFQVFhO0FBQzVCLFNBQU8sRUFBRSxLQUFLLEVBQVAsRUFBVyxLQUFLLEdBQWhCLEVBVFEsQ0FTa0I7QUFUbEIsQ0FBakI7O0FBWUEsSUFBTUUsU0FBUztBQUNiLFlBQVUsTUFERztBQUViLGNBQVksTUFGQztBQUdiLFdBQVNGLEdBSEk7QUFJYixZQUFVLENBSkcsRUFJRTtBQUNmLGNBQVksWUFMQztBQU1iLFlBQVUsR0FORztBQU9iLGlCQUFlLGFBUEY7QUFRYixZQUFVOztBQUdaOzs7O0FBWGUsQ0FBZixDQWVBLFNBQVNHLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQjtBQUNmLFNBQU9DLFNBQVNDLEtBQUtDLE1BQUwsS0FBZ0JILENBQXpCLENBQVA7QUFDRDs7QUFFRDs7Ozs7QUFLQSxJQUFNSSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFNBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMxREMsZUFBVyxZQUFZO0FBQ3JCRixjQUFRRixJQUFSO0FBQ0QsS0FGRCxFQUVHSCxLQUFLQyxNQUFMLEtBQWdCLElBRm5CO0FBR0QsR0FKMEIsQ0FBVjtBQUFBLENBQWpCOztBQU1BOzs7O0FBSUEsSUFBTU8sY0FBYyxTQUFkQSxXQUFjLElBQUs7QUFDdkIsTUFBTUwsT0FBTztBQUNYLGdCQUFZLGFBREQsRUFDa0I7QUFDN0IsWUFBUSxJQUFJTSxJQUFKLENBQVMsSUFBSUEsSUFBSixLQUFhWCxJQUFJLEVBQUosR0FBUyxJQUFULEdBQWdCLElBQXRDLENBRkcsRUFFaUQ7QUFDNUQsWUFBUSxVQUhHLEVBR2lCO0FBQzVCLFlBQVE7QUFKRyxHQUFiO0FBTUEsTUFBTVksT0FBTyxTQUFQQSxJQUFPLElBQUs7QUFDaEIsV0FBTyxJQUFJQyxLQUFKLENBQVViLENBQVYsRUFBYWMsSUFBYixDQUFrQjtBQUN2QixjQUFRLE9BRGUsRUFDTDtBQUNsQixlQUFTLENBQUMsRUFBRTtBQUNWLGlCQUFTLEVBREQsRUFDUztBQUNqQixnQkFBUSxFQUZBLEVBRVU7QUFDbEIsa0JBQVUsSUFBSUQsS0FBSixDQUFVZCxLQUFLLEVBQUwsSUFBVyxFQUFyQixFQUF5QmUsSUFBekIsQ0FBOEIsTUFBOUIsRUFBc0NDLElBQXRDLENBQTJDLEVBQTNDLENBSEY7QUFJUixpQkFBUyxxQkFKRDtBQUtSLGlCQUFTLGNBTEQsRUFLbUI7QUFDM0IsZ0JBQVEsSUFOQSxFQU1RO0FBQ2hCLGlCQUFTO0FBQ1AsaUJBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixDQURBLEVBQ1U7QUFDakIsb0JBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZILEVBRVk7QUFDbkIsb0JBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUhILEVBR1k7QUFDbkIsc0JBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUpMLEVBSVk7QUFDbkIsb0JBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxILENBS1k7QUFMWjtBQVBELE9BQUQ7QUFGYyxLQUFsQixDQUFQO0FBa0JELEdBbkJEO0FBb0JBLFNBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWixJQUFsQixFQUF3QjtBQUM3QkEsVUFBTU8sS0FBSyxDQUFMO0FBRHVCLEdBQXhCLENBQVA7QUFHRCxDQTlCRDs7QUFnQ0E7OztBQUdBLFNBQVNNLGFBQVQsR0FBeUI7QUFDdkIsU0FBT2QsU0FBUztBQUNkLGNBQVUsQ0FESTtBQUVkLFdBQU8sRUFGTztBQUdkLFlBQVFZLE9BQU9DLE1BQVAsQ0FBYztBQUNwQixlQUFTLHFCQURXLEVBQ1k7QUFDaEMsZUFBUyxFQUZXLEVBRVU7QUFDOUIscUJBQWUsQ0FISyxFQUdVO0FBQzlCLG1CQUFhLENBSk8sRUFJVTtBQUM5QixjQUFRLElBQUlKLEtBQUosQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JLLEdBQXRCLENBQTBCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVYLFlBQVlXLENBQVosQ0FBVjtBQUFBLE9BQTFCO0FBTFksS0FBZCxFQU1MeEIsUUFOSztBQUhNLEdBQVQsQ0FBUDtBQVdEOztBQUVELFNBQVN5QixTQUFULEdBQXFCO0FBQ25CLFNBQU9sQixTQUFTTixNQUFULENBQVA7QUFDRDtRQUVDb0IsYSxHQUFBQSxhO1FBQWVJLFMsR0FBQUEsUyIsImZpbGUiOiJtb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaooeaLn+aVsOaNruaOpeWPo+aWueazlVxyXG4gKiBAYXV0aG9yIFlpZGFkYWFcclxuICovXHJcbmNvbnN0IGltZyA9ICcuLi9hc3NldHMvYmcuanBnJztcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0ge1xyXG4gIFwidXNlcmlkXCI6IFwiMTAwMlwiLCAgLy/nlKjmiLdpZFxyXG4gIFwibmlja25hbWVcIjogXCLlvKDpn7bmtrVcIixcclxuICBcImdlbmRlclwiOiBcIjJcIiwgICAgICAgICAgICAgIC8v6YCJ5oup77yaMTrnlLcgMu+8muWls1xyXG4gIFwiYmlydGhkYXlcIjogXCIxOTg4LTAzLTI5XCIsICAgIC8v55Sf5pelXHJcbiAgXCJwaG90b1wiOiBpbWcsICAgICAgICAgICAgLy/lpLTlg49cclxuICBcIndhbGxwYXBlclwiOiBpbWcsIC8v6IOM5pmv5Zu+XHJcbiAgXCJkaXNlYXNlXCI6IFtcIumrmOihgOezllwiLCBcIumrmOihgOWOi1wiXSwgLy/nlKjmiLfnm5Hmjqfnlr7nl4XlkI3lrZdcclxuICBcImZvbGxvd1wiOiB0cnVlLCAgICAgICAgICAgICAvL+aYr+WQpuWFs+azqCAgXHJcbiAgXCJncHNcIjogeyBcInhcIjogMjMsIFwieVwiOiAxMjMgfSwgICAgLy/ln47luIJncHNcclxufVxyXG5cclxuY29uc3QgbXlJbmZvID0ge1xyXG4gIFwidXNlcmlkXCI6IFwiMTAwMVwiLFxyXG4gIFwibmlja25hbWVcIjogXCLkuJzmlrnkuI3otKVcIixcclxuICBcInBob3RvXCI6IGltZyxcclxuICBcImdlbmRlclwiOiAxLCAgIC8vMe+8mueUtzLvvJrlpbNcclxuICBcImJpcnRoZGF5XCI6IFwiMTk5MC0xMi0yNlwiLFxyXG4gIFwiaGVpZ2h0XCI6IDE4MCxcclxuICBcInBob25lbnVtYmVyXCI6IFwiMTMxNTYyMzQ1MjFcIixcclxuICBcInJlbWFya1wiOiBcIkx1Y3lcIlxyXG59XHJcblxyXG4vKipcclxuICog6L+U5ZuebuS7peWGheeahOaVtOaVsFxyXG4gKiBAcGFyYW0geypOdW1iZXJ9IG4gXHJcbiAqL1xyXG5mdW5jdGlvbiByYW5kKG4pIHtcclxuICByZXR1cm4gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIG4pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmqKHku7/lrp7pmYXor7fmsYLkuK3nmoTlu7bov59cclxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEg6ZyA6KaB6L+U5Zue55qE5pWw5o2uXHJcbiAqIEByZXR1cm4ge1Byb21pc2V9IOWMheijheWQjueahFByb21pc2VcclxuICovXHJcbmNvbnN0IHJlc3BvbnNlID0gKGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc29sdmUoZGF0YSlcclxuICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMClcclxufSlcclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDmn5DkuIDlpKnnmoTlgYfmlbDmja5cclxuICogQHBhcmFtIHtOdW1iZXJ9IOi3neS7iuWkqeWHoOWkqVxyXG4gKi9cclxuY29uc3QgZ2V0RGF0ZUxpc3QgPSBuID0+IHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgXCJyZWNvcmRpZFwiOiBcInh4eHh4eHh4eHh4XCIsICAgLy/orrDlvZVpZFxyXG4gICAgXCJkYXRlXCI6IG5ldyBEYXRlKG5ldyBEYXRlKCkgLSBuICogMjQgKiAzNjAwICogMTAwMCksICAgICAgICAvL+iusOW9leaXpeacn1xyXG4gICAgXCJ0ZXh0XCI6IFwieHh4eHh4eHhcIiwgICAgICAgICAvL+ezu+e7n+W7uuiuriBcclxuICAgIFwiZGF0YVwiOiBbXVxyXG4gIH1cclxuICBjb25zdCBpdGVtID0gbiA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KG4pLmZpbGwoe1xyXG4gICAgICBcInR5cGVcIjogXCJibG9vZFwiLCAgLy8gYmxvb2Qvc3VnYXIvd2VpZ2h0L21lZGluZGV4XHJcbiAgICAgIFwidmFsdWVcIjogW3sgLy9ibG9vZOaXtuaYr1tsb3dwcmVzcyxoaWdocHJlc3MsaGVhcnRdLOWFtuS7lumDveaYr+WNleS4qlxyXG4gICAgICAgIFwidmFsdWVcIjogMTIsICAgICAvL+WFt+S9k+aMh+aghyDnmoTlgLxcclxuICAgICAgICBcInBhcmFcIjogXCJcIiwgICAgICAgLy/kvZPph43kvKBCTUnvvIzooYDns5bkvKBtZWFsX3R5cGXvvIzlhbbku5bkuI3kvKBcclxuICAgICAgICBcInJlbWFya1wiOiBuZXcgQXJyYXkocmFuZCgxMCkgKyAxMCkuZmlsbCgn5LuK5aSp5aS055ebJykuam9pbignJyksXHJcbiAgICAgICAgXCJjdGltZVwiOiBcIjIwMTYtMDEtMTIgMTI6MDA6MTJcIixcclxuICAgICAgICBcImJtZXNoXCI6IFwibG9pbmMtMTIzMjEzXCIsICAgLy/mjIfmoIdcclxuICAgICAgICBcIm5hbWVcIjogXCLpq5jljotcIiwgICAvL+epuuiFueihgOezlu+8jOmlreWJjeihgOezllxyXG4gICAgICAgIFwicmFuZ2VcIjoge1xyXG4gICAgICAgICAgXCJsb3dcIjogWzAsIDFdLCAgIC8vIOi/h+S9jlxyXG4gICAgICAgICAgXCJub3JtYWxcIjogWzEsIDJdLCAgLy8g5q2j5bi4XHJcbiAgICAgICAgICBcInNsaWdodFwiOiBbMiwgM10sICAvLyDovbvluqZcclxuICAgICAgICAgIFwibW9kZXJhdGVcIjogWzMsIDRdLC8vIOS4reW6plxyXG4gICAgICAgICAgXCJzZXZlcmVcIjogWzQsIDVdICAgLy8g6YeN5bqmXHJcbiAgICAgICAgfVxyXG4gICAgICB9XVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XHJcbiAgICBkYXRhOiBpdGVtKDEpXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOeUqOaIt+eahOWBh+aVsOaNrlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VXNlckRldGFpbCgpIHtcclxuICByZXR1cm4gcmVzcG9uc2Uoe1xyXG4gICAgXCJzdGF0dXNcIjogMCxcclxuICAgIFwibXNnXCI6IFwiXCIsXHJcbiAgICBcImRhdGFcIjogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIFwiY3RpbWVcIjogXCIyMDE2LTExLTEwIDE1OjU1OjU5XCIsIC8v5pe26Ze0IOacgOaWsOS4gOWkqeS4gOadoeaMh+agh+WPkeW4g+eahOaXtumXtFxyXG4gICAgICBcImNvdW50XCI6IDEwLCAgICAgICAgICAgICAgICAgIC8v5oC76K6w5b2V5pWwXHJcbiAgICAgIFwiY3VycmVudHBhZ2VcIjogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgXCJ0b3RhbHBhZ2VcIjogNSwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsFxyXG4gICAgICBcImxpc3RcIjogbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCgodiwgaSkgPT4gZ2V0RGF0ZUxpc3QoaSkpXHJcbiAgICB9LCB1c2VySW5mbylcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNeUluZm8oKSB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlKG15SW5mbylcclxufVxyXG5leHBvcnQge1xyXG4gIGdldFVzZXJEZXRhaWwsIGdldE15SW5mb1xyXG59Il19