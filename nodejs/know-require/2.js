require('./3')
module.exports = (function () {
  let str
  return {
    setPrintString (tempStr) {
      str = tempStr
    },
    hello () {
      console.log(str)
    }
  }
})()