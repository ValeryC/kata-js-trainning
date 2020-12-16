function threeInOne(arr) {
  let arrResult = []

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 == 0) arrResult.push(arr[i] + arr[i + 1] + arr[i + 2])
  }
  return arrResult
}

console.log(threeInOne([1, 2, 3]), [6])
console.log(threeInOne([1, 2, 3, 4, 5, 6]), [6, 15])
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]), [6, 15, 24])
var arr1 = [1, 3, 5, 2, 4, 6, 7, 7, 7],
  copy = arr1.slice()
console.log(threeInOne(arr1), [9, 12, 21])
console.log(arr1, copy)
