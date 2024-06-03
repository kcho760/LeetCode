/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let ind1 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (ind1 < t.length && s[i] === t[ind1]) {
            ind1++;
        }
    }
    
    return t.length - ind1;
};