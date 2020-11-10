function howManydays(month) {
  let days
  switch (true) {
    case month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12:
      days = 31
      break
    case month === 4 || month === 6 || month === 9 || month === 11:
      days = 30
      break
    case month === 2:
      days = 28
      break
    default:
      return "not a month"
      break
  }
  return days
}

console.log(howManydays(1), 31)
console.log(howManydays(2), 28)
console.log(howManydays(3), 31)
console.log(howManydays(4), 30)
console.log(howManydays(12), 31)
console.log(howManydays(14), "not a month")
