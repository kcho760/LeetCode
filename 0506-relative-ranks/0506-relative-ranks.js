/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let map = new Map();

    let sorted = [...score].sort(((a,b) => b - a));
    //highest first

    sorted.forEach((value, index) => {
        if(index === 0) {
            map.set(value, "Gold Medal")
        }else if (index === 1){
            map.set(value, "Silver Medal")
        }else if (index === 2) {
            map.set(value, "Bronze Medal")
        }else{
            map.set(value, (index + 1).toString());
        }
    });

    return score.map(s => map.get(s));
};