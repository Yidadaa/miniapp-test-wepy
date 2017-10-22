/**
 * @file 一些工具方法
 * @author Yidadaa
 */

function pick(obj, list) {
  let ret = {}
  list.forEach(v => ret[v] = obj[v])
  return ret
}

export {
  pick
}