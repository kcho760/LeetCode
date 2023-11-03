/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    var result = 0
    fun averageOfSubtree(root: TreeNode?): Int {
        visitNode(root!!)
        return result   
    }

    fun visitNode(node: TreeNode): Int {
        var nodes = 1
        val value = node.`val`
        if(node.left != null) {
            nodes += visitNode(node.left)
            node.`val` += node.left.`val`
        }
        if(node.right != null) {
            nodes += visitNode(node.right)
            node.`val` += node.right.`val`
        }
        if(value == node.`val` / nodes) {
            result ++
        }
        return nodes
    }

}