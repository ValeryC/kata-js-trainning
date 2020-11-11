function splitAndMerge(str, s) {
  console.log(
    str
      .split(" ")
      .map(x => x.split("").join(s))
      .join(" ")
  )
  return str
    .split(" ")
    .map(x => x.split("").join(s))
    .join(" ")
}

console.log(splitAndMerge("My name is John", " "), "M y n a m e i s J o h n")
console.log(splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n")
console.log(splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!")
console.log(splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!")
