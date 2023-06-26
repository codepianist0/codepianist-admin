// 本地存储信息的获取
export function localGet(key) {
  // 获取到本地存储的数据
  const value = window.localStorage.getItem(key)
  try {
    // 如果可以进行json的解析，则返回json解析的数据
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    // 如果不能进行json解析，则直接返回结果，因为获取到的不一定为json，所以进行判断
    return value
  }
}

// 将数据保存到本地
export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

// 删除数据
export function localRemove(key) {
  window.localStorage.removeItem(key)
}