/**
 * 模拟数据接口方法
 * @author Yidadaa
 */
const img = '../assets/bg.jpg';

const userInfo = {
  "userid": "1002",  //用户id
  "nickname": "张韶涵",
  "gender": "2",              //选择：1:男 2：女
  "birthday": "1988-03-29",    //生日
  "photo": img,            //头像
  "wallpaper": img, //背景图
  "disease": ["高血糖", "高血压"], //用户监控疾病名字
  "follow": true,             //是否关注  
  "gps": { "x": 23, "y": 123 },    //城市gps
}

const myInfo = {
  "userid": "1001",
  "nickname": "东方不败",
  "photo": img,
  "gender": 1,   //1：男2：女
  "birthday": "1990-12-26",
  "height": 180,
  "phonenumber": "13156234521",
  "remark": "Lucy"
}

/**
 * 模仿实际请求中的延迟
 * @param {Object} data 需要返回的数据
 * @return {Promise} 包装后的Promise
 */
const response = (data) => new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(data)
  }, Math.random() * 1000)
})

/**
 * 生成某一天的假数据
 */
const getDateList = () => {
  const data = {
    "recordid": "xxxxxxxxxxx",   //记录id
    "date": "2016-11-23",        //记录日期
    "text": "xxxxxxxx",         //系统建议 
    "data": []
  }
  const item = n => {
    return new Array(n).fill({
      "type": "blood",  // blood/sugar/weight/medindex
      "value": [{ //blood时是[lowpress,highpress,heart],其他都是单个
        "value": 12,     //具体指标 的值
        "para": "",       //体重传BMI，血糖传meal_type，其他不传
        "remark": "今天头痛",
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "高压",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 1],   // 过低
          "normal": [1, 2],  // 正常
          "slight": [2, 3],  // 轻度
          "moderate": [3, 4],// 中度
          "severe": [4, 5]   // 重度
        }
      }]
    });
  }
  return Object.assign({}, data, {
    data: item(5)
  })
}

function getUserDetail() {
  return response({
    "status": 0,
    "msg": "",
    "data": Object.assign({
      "ctime": "2016-11-10 15:55:59", //时间 最新一天一条指标发布的时间
      "count": 10,                  //总记录数
      "currentpage": 1,             //当前页
      "totalpage": 5,               //每页显示数
      "list": getDateList()
    }, userInfo)
  })
}

function getMyInfo() {
  return response(myInfo)
}
export {
  getUserDetail, getMyInfo
}