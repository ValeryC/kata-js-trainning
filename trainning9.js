function padIt(str, n) {
  //coding here
  while (n > 0) {
    if (n % 2 == 0) {
      str = str + "*"
    } else {
      str = "*" + str
    }
    n--
  }
  return str
}

console.log(padIt("a", 1), "*a")
console.log(padIt("a", 2), "*a*")
console.log(padIt("a", 3), "**a*")
console.log(padIt("a", 4), "**a**")
console.log(padIt("a", 5), "***a**")
console.log(padIt("a", 20))
