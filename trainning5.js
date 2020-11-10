let obj3 = { name: "rabbit", legs: 4, color: "gray" }
let obj2 = { name: "cock", legs: 2, color: "red" }
let obj = { name: "dog", legs: 4, color: "white" }
const animal = object =>
  `This ${object.color} ${object.name} has ${object.legs} legs.`

console.log(animal(obj), "This white dog has 4 legs.")
console.log(animal(obj2), "This red cock has 2 legs.")
console.log(animal(obj3), "This gray rabbit has 4 legs.")
