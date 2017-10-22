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
   * 模仿实际请求中的延迟
   * @param {Object} data 需要返回的数据
   * @return {Promise} 包装后的Promise
   */
};var response = function response(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data);
    }, Math.random() * 1000);
  });
};

/**
 * 生成某一天的假数据
 */
var getDateList = function getDateList() {
  var data = {
    "recordid": "xxxxxxxxxxx", //记录id
    "date": "2016-11-23", //记录日期
    "text": "xxxxxxxx", //系统建议 
    "data": []
  };
  var item = function item(n) {
    return new Array(n).fill({
      "type": "blood", // blood/sugar/weight/medindex
      "value": [{ //blood时是[lowpress,highpress,heart],其他都是单个
        "value": 12, //具体指标 的值
        "para": "", //体重传BMI，血糖传meal_type，其他不传
        "remark": "今天头痛",
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
    data: item(5)
  });
};

function getUserDetail() {
  return response({
    "status": 0,
    "msg": "",
    "data": Object.assign({
      "ctime": "2016-11-10 15:55:59", //时间 最新一天一条指标发布的时间
      "count": 10, //总记录数
      "currentpage": 1, //当前页
      "totalpage": 5, //每页显示数
      "list": getDateList()
    }, userInfo)
  });
}

function getMyInfo() {
  return response(myInfo);
}
exports.getUserDetail = getUserDetail;
exports.getMyInfo = getMyInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2suanMiXSwibmFtZXMiOlsiaW1nIiwidXNlckluZm8iLCJteUluZm8iLCJyZXNwb25zZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJNYXRoIiwicmFuZG9tIiwiZ2V0RGF0ZUxpc3QiLCJpdGVtIiwiQXJyYXkiLCJuIiwiZmlsbCIsIk9iamVjdCIsImFzc2lnbiIsImdldFVzZXJEZXRhaWwiLCJnZXRNeUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFJQSxJQUFNQSxNQUFNLGtCQUFaOztBQUVBLElBQU1DLFdBQVc7QUFDZixZQUFVLE1BREssRUFDSTtBQUNuQixjQUFZLEtBRkc7QUFHZixZQUFVLEdBSEssRUFHYTtBQUM1QixjQUFZLFlBSkcsRUFJYztBQUM3QixXQUFTRCxHQUxNLEVBS1U7QUFDekIsZUFBYUEsR0FORSxFQU1HO0FBQ2xCLGFBQVcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQVBJLEVBT1k7QUFDM0IsWUFBVSxJQVJLLEVBUWE7QUFDNUIsU0FBTyxFQUFFLEtBQUssRUFBUCxFQUFXLEtBQUssR0FBaEIsRUFUUSxDQVNrQjtBQVRsQixDQUFqQjs7QUFZQSxJQUFNRSxTQUFTO0FBQ2IsWUFBVSxNQURHO0FBRWIsY0FBWSxNQUZDO0FBR2IsV0FBU0YsR0FISTtBQUliLFlBQVUsQ0FKRyxFQUlFO0FBQ2YsY0FBWSxZQUxDO0FBTWIsWUFBVSxHQU5HO0FBT2IsaUJBQWUsYUFQRjtBQVFiLFlBQVU7O0FBR1o7Ozs7O0FBWGUsQ0FBZixDQWdCQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFNBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMxREMsZUFBVyxZQUFZO0FBQ3JCRixjQUFRRixJQUFSO0FBQ0QsS0FGRCxFQUVHSyxLQUFLQyxNQUFMLEtBQWdCLElBRm5CO0FBR0QsR0FKMEIsQ0FBVjtBQUFBLENBQWpCOztBQU1BOzs7QUFHQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNUCxPQUFPO0FBQ1gsZ0JBQVksYUFERCxFQUNrQjtBQUM3QixZQUFRLFlBRkcsRUFFa0I7QUFDN0IsWUFBUSxVQUhHLEVBR2lCO0FBQzVCLFlBQVE7QUFKRyxHQUFiO0FBTUEsTUFBTVEsT0FBTyxTQUFQQSxJQUFPLElBQUs7QUFDaEIsV0FBTyxJQUFJQyxLQUFKLENBQVVDLENBQVYsRUFBYUMsSUFBYixDQUFrQjtBQUN2QixjQUFRLE9BRGUsRUFDTDtBQUNsQixlQUFTLENBQUMsRUFBRTtBQUNWLGlCQUFTLEVBREQsRUFDUztBQUNqQixnQkFBUSxFQUZBLEVBRVU7QUFDbEIsa0JBQVUsTUFIRjtBQUlSLGlCQUFTLHFCQUpEO0FBS1IsaUJBQVMsY0FMRCxFQUttQjtBQUMzQixnQkFBUSxJQU5BLEVBTVE7QUFDaEIsaUJBQVM7QUFDUCxpQkFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBREEsRUFDVTtBQUNqQixvQkFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRkgsRUFFWTtBQUNuQixvQkFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSEgsRUFHWTtBQUNuQixzQkFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSkwsRUFJWTtBQUNuQixvQkFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEgsQ0FLWTtBQUxaO0FBUEQsT0FBRDtBQUZjLEtBQWxCLENBQVA7QUFrQkQsR0FuQkQ7QUFvQkEsU0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLElBQWxCLEVBQXdCO0FBQzdCQSxVQUFNUSxLQUFLLENBQUw7QUFEdUIsR0FBeEIsQ0FBUDtBQUdELENBOUJEOztBQWdDQSxTQUFTTSxhQUFULEdBQXlCO0FBQ3ZCLFNBQU9mLFNBQVM7QUFDZCxjQUFVLENBREk7QUFFZCxXQUFPLEVBRk87QUFHZCxZQUFRYSxPQUFPQyxNQUFQLENBQWM7QUFDcEIsZUFBUyxxQkFEVyxFQUNZO0FBQ2hDLGVBQVMsRUFGVyxFQUVVO0FBQzlCLHFCQUFlLENBSEssRUFHVTtBQUM5QixtQkFBYSxDQUpPLEVBSVU7QUFDOUIsY0FBUU47QUFMWSxLQUFkLEVBTUxWLFFBTks7QUFITSxHQUFULENBQVA7QUFXRDs7QUFFRCxTQUFTa0IsU0FBVCxHQUFxQjtBQUNuQixTQUFPaEIsU0FBU0QsTUFBVCxDQUFQO0FBQ0Q7UUFFQ2dCLGEsR0FBQUEsYTtRQUFlQyxTLEdBQUFBLFMiLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmqKHmi5/mlbDmja7mjqXlj6Pmlrnms5VcclxuICogQGF1dGhvciBZaWRhZGFhXHJcbiAqL1xyXG5jb25zdCBpbWcgPSAnLi4vYXNzZXRzL2JnLmpwZyc7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IHtcclxuICBcInVzZXJpZFwiOiBcIjEwMDJcIiwgIC8v55So5oi3aWRcclxuICBcIm5pY2tuYW1lXCI6IFwi5byg6Z+25ra1XCIsXHJcbiAgXCJnZW5kZXJcIjogXCIyXCIsICAgICAgICAgICAgICAvL+mAieaLqe+8mjE655S3IDLvvJrlpbNcclxuICBcImJpcnRoZGF5XCI6IFwiMTk4OC0wMy0yOVwiLCAgICAvL+eUn+aXpVxyXG4gIFwicGhvdG9cIjogaW1nLCAgICAgICAgICAgIC8v5aS05YOPXHJcbiAgXCJ3YWxscGFwZXJcIjogaW1nLCAvL+iDjOaZr+WbvlxyXG4gIFwiZGlzZWFzZVwiOiBbXCLpq5jooYDns5ZcIiwgXCLpq5jooYDljotcIl0sIC8v55So5oi355uR5o6n55a+55eF5ZCN5a2XXHJcbiAgXCJmb2xsb3dcIjogdHJ1ZSwgICAgICAgICAgICAgLy/mmK/lkKblhbPms6ggIFxyXG4gIFwiZ3BzXCI6IHsgXCJ4XCI6IDIzLCBcInlcIjogMTIzIH0sICAgIC8v5Z+O5biCZ3BzXHJcbn1cclxuXHJcbmNvbnN0IG15SW5mbyA9IHtcclxuICBcInVzZXJpZFwiOiBcIjEwMDFcIixcclxuICBcIm5pY2tuYW1lXCI6IFwi5Lic5pa55LiN6LSlXCIsXHJcbiAgXCJwaG90b1wiOiBpbWcsXHJcbiAgXCJnZW5kZXJcIjogMSwgICAvLzHvvJrnlLcy77ya5aWzXHJcbiAgXCJiaXJ0aGRheVwiOiBcIjE5OTAtMTItMjZcIixcclxuICBcImhlaWdodFwiOiAxODAsXHJcbiAgXCJwaG9uZW51bWJlclwiOiBcIjEzMTU2MjM0NTIxXCIsXHJcbiAgXCJyZW1hcmtcIjogXCJMdWN5XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaooeS7v+WunumZheivt+axguS4reeahOW7tui/n1xyXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSDpnIDopoHov5Tlm57nmoTmlbDmja5cclxuICogQHJldHVybiB7UHJvbWlzZX0g5YyF6KOF5ZCO55qEUHJvbWlzZVxyXG4gKi9cclxuY29uc3QgcmVzcG9uc2UgPSAoZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzb2x2ZShkYXRhKVxyXG4gIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOafkOS4gOWkqeeahOWBh+aVsOaNrlxyXG4gKi9cclxuY29uc3QgZ2V0RGF0ZUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIFwicmVjb3JkaWRcIjogXCJ4eHh4eHh4eHh4eFwiLCAgIC8v6K6w5b2VaWRcclxuICAgIFwiZGF0ZVwiOiBcIjIwMTYtMTEtMjNcIiwgICAgICAgIC8v6K6w5b2V5pel5pyfXHJcbiAgICBcInRleHRcIjogXCJ4eHh4eHh4eFwiLCAgICAgICAgIC8v57O757uf5bu66K6uIFxyXG4gICAgXCJkYXRhXCI6IFtdXHJcbiAgfVxyXG4gIGNvbnN0IGl0ZW0gPSBuID0+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkobikuZmlsbCh7XHJcbiAgICAgIFwidHlwZVwiOiBcImJsb29kXCIsICAvLyBibG9vZC9zdWdhci93ZWlnaHQvbWVkaW5kZXhcclxuICAgICAgXCJ2YWx1ZVwiOiBbeyAvL2Jsb29k5pe25pivW2xvd3ByZXNzLGhpZ2hwcmVzcyxoZWFydF0s5YW25LuW6YO95piv5Y2V5LiqXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiAxMiwgICAgIC8v5YW35L2T5oyH5qCHIOeahOWAvFxyXG4gICAgICAgIFwicGFyYVwiOiBcIlwiLCAgICAgICAvL+S9k+mHjeS8oEJNSe+8jOihgOezluS8oG1lYWxfdHlwZe+8jOWFtuS7luS4jeS8oFxyXG4gICAgICAgIFwicmVtYXJrXCI6IFwi5LuK5aSp5aS055ebXCIsXHJcbiAgICAgICAgXCJjdGltZVwiOiBcIjIwMTYtMDEtMTIgMTI6MDA6MTJcIixcclxuICAgICAgICBcImJtZXNoXCI6IFwibG9pbmMtMTIzMjEzXCIsICAgLy/mjIfmoIdcclxuICAgICAgICBcIm5hbWVcIjogXCLpq5jljotcIiwgICAvL+epuuiFueihgOezlu+8jOmlreWJjeihgOezllxyXG4gICAgICAgIFwicmFuZ2VcIjoge1xyXG4gICAgICAgICAgXCJsb3dcIjogWzAsIDFdLCAgIC8vIOi/h+S9jlxyXG4gICAgICAgICAgXCJub3JtYWxcIjogWzEsIDJdLCAgLy8g5q2j5bi4XHJcbiAgICAgICAgICBcInNsaWdodFwiOiBbMiwgM10sICAvLyDovbvluqZcclxuICAgICAgICAgIFwibW9kZXJhdGVcIjogWzMsIDRdLC8vIOS4reW6plxyXG4gICAgICAgICAgXCJzZXZlcmVcIjogWzQsIDVdICAgLy8g6YeN5bqmXHJcbiAgICAgICAgfVxyXG4gICAgICB9XVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XHJcbiAgICBkYXRhOiBpdGVtKDUpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlckRldGFpbCgpIHtcclxuICByZXR1cm4gcmVzcG9uc2Uoe1xyXG4gICAgXCJzdGF0dXNcIjogMCxcclxuICAgIFwibXNnXCI6IFwiXCIsXHJcbiAgICBcImRhdGFcIjogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIFwiY3RpbWVcIjogXCIyMDE2LTExLTEwIDE1OjU1OjU5XCIsIC8v5pe26Ze0IOacgOaWsOS4gOWkqeS4gOadoeaMh+agh+WPkeW4g+eahOaXtumXtFxyXG4gICAgICBcImNvdW50XCI6IDEwLCAgICAgICAgICAgICAgICAgIC8v5oC76K6w5b2V5pWwXHJcbiAgICAgIFwiY3VycmVudHBhZ2VcIjogMSwgICAgICAgICAgICAgLy/lvZPliY3pobVcclxuICAgICAgXCJ0b3RhbHBhZ2VcIjogNSwgICAgICAgICAgICAgICAvL+avj+mhteaYvuekuuaVsFxyXG4gICAgICBcImxpc3RcIjogZ2V0RGF0ZUxpc3QoKVxyXG4gICAgfSwgdXNlckluZm8pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TXlJbmZvKCkge1xyXG4gIHJldHVybiByZXNwb25zZShteUluZm8pXHJcbn1cclxuZXhwb3J0IHtcclxuICBnZXRVc2VyRGV0YWlsLCBnZXRNeUluZm9cclxufSJdfQ==