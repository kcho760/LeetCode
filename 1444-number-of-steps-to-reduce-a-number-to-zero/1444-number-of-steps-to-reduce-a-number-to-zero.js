/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;
    let current = num;
    while(current !== 0){
        if(current%2 === 0){
            current /= 2;
            step += 1;
        }else{
            current -= 1;
            step += 1;
        }
    }

    return step;
};