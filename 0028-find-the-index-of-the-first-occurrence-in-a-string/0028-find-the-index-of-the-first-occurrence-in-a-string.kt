class Solution {
    fun strStr(haystack: String, needle: String): Int {
        val m = haystack.length
        val n = needle.length

        if(n == 0) {
            return 0
        }else if (n > m){
            return -1
        }

        for(index in 0..(m-n)) {
            val end = index + n - 1
            val sub = haystack.substring(index, end + 1)
            if(needle == sub) {
                return index
            }
        }

        return -1

    }
}