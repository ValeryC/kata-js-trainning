function cutIt(arr) {
  //coding here...
  const a = arr.map(x => x.length)
  const b = Math.min(...a)
  console.log(a)
  console.log(b)
  const c = arr.map(X => X.slice(0, b))

  return c
}

console.log(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"])
console.log(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"])
console.log(cutIt(["codewars", "javascript", "java"]), ["code", "java", "java"])
