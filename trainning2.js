let v1 = 50
;(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250)

const equal1 = () => {
  const a = v1
  const b = v1
  return a + b
}
//Please refer to the example above to complete the following functions
const equal2 = () => {
  const a = v3 //set number value to a
  const b = v1 //set number value to b
  return a - b
}

const equal3 = () => {
  const a = v1 //set number value to a
  const b = v5 //set number value to b
  return a * b
}
const equal4 = () => {
  const a = v4 //set number value to a
  const b = v5 //set number value to b
  return a / b
}
const equal5 = () => {
  const a = v2 //set number value to a
  const b = v3 //set number value to b
  return a % b
}

console.log(equal1(), 100, "value of a+b is not equal to 100")
console.log(equal2(), 100, "value of a-b is not equal to 100")
console.log(equal3(), 100, "value of a*b is not equal to 100")
console.log(equal4(), 100, "value of a/b is not equal to 100")
console.log(equal5(), 100, "value of a%b is not equal to 100")
