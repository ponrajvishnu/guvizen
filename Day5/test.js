let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); 


// let arr = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let a = function (num){
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return num !== 1;
// }

// let result = arr.filter(a);
// console.log(result);

//1
// 2
// 2
// 3
// 2
// 4
// 2
// 4
// 3
// 2

