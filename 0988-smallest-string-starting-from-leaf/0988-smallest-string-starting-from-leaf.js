/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let smallest = '{';  // Use a character that is lexicographically larger than 'z'

    function dfs(node, path) {
        if (node === null) {
            return;
        }

        // Prepend current character to path
        path = String.fromCharCode(97 + node.val) + path;

        // Check if it's a leaf node
        if (!node.left && !node.right) {
            // Update smallest if the current path is lexicographically smaller
            if (path < smallest) {
                smallest = path;
            }
        }

        // Continue DFS on child nodes
        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, '');

    return smallest;
};