/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let n = arr.length;
    let prefix = new Array(n);
    let ans = [];

    // Fill the prefix XOR array
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] ^ arr[i];
    }

    // Process each query
    for (let [left, right] of queries) {
        if (left === 0) {
            ans.push(prefix[right]);
        } else {
            ans.push(prefix[right] ^ prefix[left - 1]);
        }
    }

    return ans;
};