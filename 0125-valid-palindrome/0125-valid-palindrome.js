/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    let filtered = [];

    for(let char of s){
        if((char >= 'a' && char<= 'z') || (char >= '0' && char <= '9')){
            filtered.push(char);
        }
    }

    let left = 0;
    let right = filtered.length -1;
    while(left < right){
        if(filtered[left] !== filtered[right]){
            return false;
        }
        left++;
        right--;
    }

    return true
};