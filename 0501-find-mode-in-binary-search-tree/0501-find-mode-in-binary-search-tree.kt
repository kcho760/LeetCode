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
    val map = mutableMapOf<Int, Int>()

    fun findMode(root: TreeNode?): IntArray {
        inOrder(root)
        val maxFrequency = map.values.maxOrNull()
        val modes = map.filter{it.value == maxFrequency}.keys.toList()
        return modes.toIntArray()
    }

    fun inOrder(root: TreeNode?) {
        if(root == null) return 

        inOrder(root.left)

        map[root.`val`] = map.getOrDefault(root.`val`, 0) + 1

        inOrder(root.right)
    }
}