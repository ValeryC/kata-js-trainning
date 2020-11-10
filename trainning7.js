// function saleHotdogs(n){
//   if(n<5){return n*100}
//   else if( n>=5 && n<10) {return n*95 }
// else{
//   return n*90
// }
// }

const saleHotdogs = n =>
  n < 5 ? (n = n * 100) : n >= 5 && n < 10 ? (n = n * 95) : (n = n * 90)

console.log(saleHotdogs(1), 100)
console.log(saleHotdogs(4), 400)
console.log(saleHotdogs(5), 475)
console.log(saleHotdogs(9), 855)
console.log(saleHotdogs(10), 900)
console.log(saleHotdogs(100), 9000)
