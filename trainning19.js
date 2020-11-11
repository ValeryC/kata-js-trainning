// function alienLanguage(str) {
//   //coding here...
//   console.log(str)
//   console.log(str.split(" "))
//   const c = str.split(" ")
//   console.log(
//     c.map(x => x.toUpperCase().slice(0, -1) + x.toLowerCase().slice(-1))
//   )
//   const result = c
//     .map(x => x.toUpperCase().slice(0, -1) + x.toLowerCase().slice(-1))
//     .join(" ")
//   return result
// }

function alienLanguage(str) {
  //coding here...

  let words = str.split(" ")
  for (var i = 0; i < words.length; i++) {
    words[i] =
      words[i].toUpperCase().slice(0, -1) + words[i].toLowerCase().slice(-1)
  }
  return words.join(" ")
}

console.log(alienLanguage("My name is John"), "My NAMe Is JOHn")
console.log(alienLanguage("this is an example"), "THIs Is An EXAMPLe")
console.log(alienLanguage("Hello World"), "HELLo WORLd")
console.log(alienLanguage("HELLO WORLD"), "HELLo WORLd")
