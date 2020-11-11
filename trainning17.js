function firstToLast(str, c) {
  //coding here..

  const first = str.indexOf(c)
  const last = str.lastIndexOf(c)

  if (first == -1 || last == -1) {
    return -1
  } else return last - first
}

console.log(firstToLast("ababc", "a"), 2)
console.log(firstToLast("ababc", "c"), 0)
console.log(firstToLast("ababc", "d"), -1)
