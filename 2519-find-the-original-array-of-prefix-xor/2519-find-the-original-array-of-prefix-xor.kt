class Solution {
    fun findArray(pref: IntArray): IntArray {
        val n = pref.size
        val arr = IntArray(n)

        // The first element in arr is the same as the first element in pref
        arr[0] = pref[0]

        // Compute the rest of the elements in arr using XOR
        for (i in 1 until n) {
            arr[i] = pref[i] xor pref[i - 1]
        }

        return arr
    }
}