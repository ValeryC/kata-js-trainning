function grabDoll(dolls) {
  var bag = []
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i])
    }
    if (bag.length === 3) {
      break
    }
    continue
  }

  return bag
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), [
  "Hello Kitty"
])
console.log(
  grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]),
  ["Hello Kitty", "Hello Kitty"]
)
console.log(
  grabDoll([
    "Mickey Mouse",
    "Hello Kitty",
    "Hello Kitty",
    "Barbie doll",
    "Snow white"
  ]),
  ["Hello Kitty", "Hello Kitty", "Barbie doll"]
)
console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white"
  ]),
  ["Barbie doll", "Hello Kitty", "Hello Kitty"]
)
