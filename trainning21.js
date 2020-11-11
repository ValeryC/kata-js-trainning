function fiveLine(s) {
  //coding here...
  s = s.trim()
  // console.log(s)
  let arr = []

  for (let i = 1; i <= 5; i++) {
    arr.push(s.repeat(i))
  }
  return arr.join("\n")
}

console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa")
console.log(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy")
console.log(
  fiveLine("           Ok               "),
  "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
)
