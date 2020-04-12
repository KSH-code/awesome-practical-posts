let i = 0
Number.prototype.valueOf = function () {
  return ++i
}
const a = new Number(0)
if (a == 1 && a == 2 && a == 3) console.log(a) // [Number: 4]