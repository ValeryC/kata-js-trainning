// const whatNumberIsIt = n => {
//   if (n == 1 / 0) {
//     return "Input number is Number.POSITIVE_INFINITY"
//   } else if (n == 100) {
//     return "Input number is 100"
//   } else if (n == 1.7976931348623157e308) {
//     return "Input number is Number.MAX_VALUE"
//   } else if (n == 5e-324) {
//     return "Input number is Number.MIN_VALUE"
//   } else if (n == -Number.MAX_VALUE * 2) {
//     return "Input number is Number.NEGATIVE_INFINITY"
//   } else if (isNaN(n)) {
//     return "Input num1§ber is Number.NaN"
//   } else if (n == Infinity + 1) {
//     return "Input number is Number.POSITIVE_INFINITY"
//   }
// }

const whatNumberIsIt = n => {
  //coding here
  let str
  switch (!isNaN(n) && n) {
    case Infinity:
      str = "Input number is Number.POSITIVE_INFINITY"
      break

    case -Infinity:
      str = "Input number is Number.NEGATIVE_INFINITY"
      break

    case Number.MAX_VALUE:
      str = "Input number is Number.MAX_VALUE"
      break

    case Number.MIN_VALUE:
      str = "Input number is Number.MIN_VALUE"
      break

    case false:
      str = "Input number is Number.NaN"
      break

    default:
      str = "Input number is " + n
  }
  return str
}

console.log(whatNumberIsIt(1 / 0), "Input number is Number.POSITIVE_INFINITY")
console.log(whatNumberIsIt(100), "Input number is 100")
console.log(
  whatNumberIsIt(1.7976931348623157e308),
  "Input number is Number.MAX_VALUE"
)
console.log(whatNumberIsIt(5e-324), "Input number is Number.MIN_VALUE")
console.log(
  whatNumberIsIt(-Number.MAX_VALUE * 2),
  "Input number is Number.NEGATIVE_INFINITY"
)
console.log(whatNumberIsIt(NaN), "Input number is Number.NaN")
console.log(
  whatNumberIsIt(Infinity + 1),
  "Input number is Number.POSITIVE_INFINITY"
)
