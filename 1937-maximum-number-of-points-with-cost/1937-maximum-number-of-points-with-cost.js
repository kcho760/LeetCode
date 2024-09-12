/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length, m = points[0].length;
    let dp = new Array(m).fill(0);
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dp[j] += points[i][j];
            ans = Math.max(ans, dp[j]);
        }

        let maxi = 0;
        for (let j = 0; j < m; j++) {
            maxi = dp[j] = Math.max(dp[j], maxi - 1);
        }
        
        maxi = 0;
        for (let j = m - 1; j >= 0; j--) {
            maxi = dp[j] = Math.max(dp[j], maxi - 1);
        }
    }
    return ans;
};