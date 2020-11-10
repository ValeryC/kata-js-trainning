function colorOf(r, g, b) {
  //coding here
  r = ("0" + r.toString(16)).slice(-2)
  // console.log((0 + r.toString(16)).slice(-2))
  console.log(r.toString(16))
  g = ("0" + g.toString(16)).slice(-2)
  // console.log((0 + g.toString(16)).slice(-2))

  b = ("0" + b.toString(16)).slice(-2)
  // console.log((0 + b.toString(16)).slice(-2))

  return "#" + r + g + b
}

console.log(colorOf(255, 0, 0), "#ff0000")

console.log(colorOf(0, 111, 0), "#006f00")

console.log(colorOf(1, 2, 3), "#010203")
