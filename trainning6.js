// const trueOrFalse = val => {
//   if (val == false || val == null) return "false"
//   else return "true"
// }

const trueOrFalse = val => (val ? "true" : "false")

//test for equations and inequalities
const a = 1,
  b = 2,
  c = 1
console.log(trueOrFalse(a > b), "false")
console.log(trueOrFalse(a === b), "false")
console.log(trueOrFalse(a < b), "true")
console.log(trueOrFalse(a !== b), "true")
console.log(trueOrFalse(b > c), "true")
console.log(trueOrFalse(b === c), "false")
console.log(trueOrFalse(b < c), "false")
console.log(trueOrFalse(b !== c), "true")
console.log(trueOrFalse(a === c), "true")
console.log(trueOrFalse(a !== c), "false")
//test for logical operators and bitwise operators
const t = true,
  f = false
console.log(trueOrFalse(t && f), "false")
console.log(trueOrFalse(f && f), "false")
console.log(trueOrFalse(t && t), "true")
console.log(trueOrFalse(t || f), "true")
console.log(trueOrFalse(t || t), "true")
console.log(trueOrFalse(f || f), "false")
console.log(trueOrFalse(t & f), "false")
console.log(trueOrFalse(t & t), "true")
console.log(trueOrFalse(f & f), "false")
console.log(trueOrFalse(t | f), "true")
console.log(trueOrFalse(t | t), "true")
console.log(trueOrFalse(f | f), "false")
console.log(trueOrFalse(!t), "false")
console.log(trueOrFalse(!f), "true")
console.log(trueOrFalse(t ^ f), "true")
console.log(trueOrFalse(t ^ t), "false")
console.log(trueOrFalse(f ^ f), "false")
//test for implicit conversion
console.log(trueOrFalse(true), "true")
console.log(trueOrFalse(123), "true")
console.log(trueOrFalse("123"), "true")
console.log(trueOrFalse(["123"]), "true")
console.log(trueOrFalse("false"), "true")
console.log(trueOrFalse(false), "false")
console.log(trueOrFalse(0), "false")
console.log(trueOrFalse(""), "false")
console.log(trueOrFalse(null), "false")
console.log(trueOrFalse([].length), "false")
console.log(trueOrFalse(undefined), "false")
