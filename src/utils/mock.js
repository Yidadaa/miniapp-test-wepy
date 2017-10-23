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
 * 返回n以内的整数
 * @param {*Number} n 
 */
function rand(n) {
  return parseInt(Math.random() * n)
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
 * @param {Number} 距今天几天
 */
const getDateList = n => {
  const data = {
    "recordid": "xxxxxxxxxxx",   //记录id
    "date": new Date(new Date() - n * 24 * 3600 * 1000),        //记录日期
    "text": "xxxxxxxx",         //系统建议 
    "data": []
  }
  const blood = () => {
    return {
      "type": "blood",  // blood/sugar/weight/medindex
      "value": [{ //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(100) + 20,     //具体指标 的值
        "para": "",       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(10) + 10).fill('血压').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "高压",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 30],   // 过低
          "normal": [30, 50],  // 正常
          "slight": [50, 90],  // 轻度
          "moderate": [90, 110],// 中度
          "severe": [110, 200]   // 重度
        }
      }, { //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(100) + 50,     //具体指标 的值
        "para": "",       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(10) + 10).fill('今天头痛').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "低压",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 30],   // 过低
          "normal": [30, 50],  // 正常
          "slight": [50, 90],  // 轻度
          "moderate": [90, 110],// 中度
          "severe": [110, 200]   // 重度
        }
      }, { //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(150) + 50,     //具体指标 的值
        "para": "",       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(10) + 10).fill('今天头痛').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "心率",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 50],   // 过低
          "normal": [50, 100],  // 正常
          "slight": [100, 120],  // 轻度
          "moderate": [120, 140],// 中度
          "severe": [140, 200]   // 重度
        }
      }]
    }
  }

  const sugar = () => {
    return {
      "type": "sugar",  // blood/sugar/weight/medindex
      "value": { //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(100) + 50,     //具体指标 的值
        "para": "餐前",       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(10) + 10).fill('血糖').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "餐前",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 30],   // 过低
          "normal": [30, 50],  // 正常
          "slight": [60, 70],  // 轻度
          "moderate": [70, 110],// 中度
          "severe": [110, 200]   // 重度
        }
      }
    }
  }

  const weight = () => {
    return {
      "type": "weight",  // blood/sugar/weight/medindex
      "value": { //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(100) + 50,     //具体指标 的值
        "para": rand(10) + 15,       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(5) + 2).fill('体重').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "餐前",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 30],   // 过低
          "normal": [30, 50],  // 正常
          "slight": [60, 70],  // 轻度
          "moderate": [70, 110],// 中度
          "severe": [110, 200]   // 重度
        }
      }
    }
  }

  const medindex = () => {
    return {
      "type": "medindex",  // blood/sugar/weight/medindex
      "value": { //blood时是[lowpress,highpress,heart],其他都是单个
        "value": rand(100) + 50,     //具体指标 的值
        "para": 'mmol/L',       //体重传BMI，血糖传meal_type，其他不传
        "remark": new Array(rand(5) + 2).fill('医学指标').join(''),
        "ctime": "2016-01-12 12:00:12",
        "bmesh": "loinc-123213",   //指标
        "name": "甘油三酯(GT)",   //空腹血糖，饭前血糖
        "range": {
          "low": [0, 30],   // 过低
          "normal": [30, 50],  // 正常
          "slight": [60, 70],  // 轻度
          "moderate": [70, 110],// 中度
          "severe": [110, 200]   // 重度
        }
      }
    }
  }

  const type = { blood, sugar, weight, medindex }
  const types = Object.keys(type)
  const item = n => {
    return new Array(n).fill(0).map((v, i) => type[types[i % types.length]]())
  }
  return Object.assign({}, data, {
    data: item(types.length)
  })
}

/**
 * 生成用户的假数据
 */
function getUserDetail() {
  return response({
    "status": 0,
    "msg": "",
    "data": Object.assign({
      "ctime": "2016-11-10 15:55:59", //时间 最新一天一条指标发布的时间
      "count": 10,                  //总记录数
      "currentpage": 1,             //当前页
      "totalpage": 5,               //每页显示数
      "list": new Array(10).fill(0).map((v, i) => getDateList(i))
    }, userInfo)
  })
}

function getMyInfo() {
  return response(myInfo)
}
export {
  getUserDetail, getMyInfo
}