/**用来获取和设置localStorage存储**/
let local = {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  }
}

export default {
  install: function (vm) {
    vm.prototype.$local = local
  }
}
