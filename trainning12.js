function giveMeFive(obj) {
  //coding here
  const five = []

  for (let key in obj) {
    if (key.length == 5) {
      five.push(key)
    }

    if (obj[key].length == 5) {
      five.push(obj[key])
    }
  }

  return five
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), [
  "earth",
  "world"
])
console.log(
  giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }),
  ["Ihave", "money", "model"]
)
console.log(giveMeFive({ Pears: "than", apple: "sweet" }), [
  "Pears",
  "apple",
  "sweet"
])
