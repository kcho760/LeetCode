/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let sorted = happiness.sort((a,b) => b-a);
    let sum = 0;
    let decrement = 0;
    for(let i = 0; i < k; i++){
        let current = happiness[i] - decrement;
        if(current > 0){
            sum += current
        }
        
        decrement++
    }
    return sum
};