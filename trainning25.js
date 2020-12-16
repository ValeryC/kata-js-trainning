function sortIt(arr) {
  const newArr = arr.slice()
  console.log(newArr + "first")
  const numCount = {}
  console.log(numCount + "second")
}

console.log(sortIt([1, 1, 1, 2, 2, 3]), [3, 2, 2, 1, 1, 1])
console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]), [3, 3, 3, 2, 2, 2, 1, 1, 1])
console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]), [3, 2, 1, 6, 6, 5, 5, 4, 4])
var arr1 = [1, 3, 3, 5, 2, 2, 4, 6, 6, 7, 7, 7],
  copy = arr1.slice()
console.log(sortIt(arr1), [5, 4, 1, 6, 6, 3, 3, 2, 2, 7, 7, 7])
console.log(arr1, copy, "You should not modify the original array")
