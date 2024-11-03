/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let n=s.length
    for(let i=0;i<n;i++){
        s=s.split("")
        let firstString=s.shift()
        s.push(firstString)
        s=s.join("")
        if(s===goal){
            return true
        }
    }
    return false
};