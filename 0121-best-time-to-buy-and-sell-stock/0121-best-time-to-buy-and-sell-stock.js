/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let maxProfit = 0;
    for(i = 1; i < prices.length; i++){
        profit = Math.max(0, profit + prices[i] - prices[i - 1]);
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
};