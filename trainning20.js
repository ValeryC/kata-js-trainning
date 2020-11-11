function topSecret(str) {
  //coding here...
  console.log(str)
  let normal = "abcdefghijklmnopqrstuvwxyz"
  normal += normal.toUpperCase()
  console.log(normal)
  let encode = "xyzabcdefghijklmnopqrstuvw"
  encode += encode.toUpperCase()
  console.log(encode)
  let result = []
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    result.push(encode[normal.indexOf(str[i])])
    if (str[i] == " " || str[i] == "!") {
      result.push(str[i])
    }
  }
  const r = result.join("")
  console.log(result.join(""))
  return r
}
//question1: The top secret file number is...
const answer1 = "3745"
//question2: Super agent's name is...
const answer2 = "RILc"
//question3: He stole the treasure is...
const answer3 = "Expired biscuits"

console.log(topSecret("Pb qdph lv Mrkq"), "My name is John")
console.log(topSecret("wklv lv dq hadpsoh"), "this is an example")
console.log(topSecret("Khoor Zruog!"), "Hello World!")
