/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    if (n % 2 === 0) { //even case
        const temp = myPow(x, n / 2);
        return temp * temp;
    } else { //odd case
        return x * myPow(x, n - 1);
    }
};


// var myPow = function(x, n) {

//   if (n === 0) return 1;
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
  
//   let result = 1;
  
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
  
//   return result;
// }