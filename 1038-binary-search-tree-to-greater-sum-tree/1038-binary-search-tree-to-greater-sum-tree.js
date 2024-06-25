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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    var sum=0;
    recursion = function(root){
        if(root == null)
            return;
        
        recursion(root.right);
        sum+=root.val;
        root.val=sum;
        recursion(root.left);
    };
    
    recursion(root);

    return root;
};