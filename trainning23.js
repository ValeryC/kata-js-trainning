function infiniteLoop(arr, d, n) {
  //coding here...
  for (let i = 1; i <= n; i++) {
    if (d === "right") {
      arr[2].unshift(arr[1].pop())
      arr[1].unshift(arr[0].pop())
      arr[0].unshift(arr[2].pop())
    }
    if (d === "left") {
      arr[2].push(arr[0].shift())
      arr[1].push(arr[2].shift())
      arr[0].push(arr[1].shift())
    }
  }
  return arr
}

console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1), [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1]
])
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1), [
  [9, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
])
console.log(infiniteLoop([[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]], "left", 2), [
  [3, 4],
  [5, 6, 7, 8],
  [9, 10, 1, 2]
])
