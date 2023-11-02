class Solution {
    fun minEatingSpeed(piles: IntArray, h: Int): Int {
        var low = 1
        var high = piles.max() ?: 0

        while (low<high) {
            val mid = (low+high)/2
            if (!canEatAll(mid, piles, h)) low = mid+1
            else high = mid
        }

        return low
    }

    private fun canEatAll(k: Int, piles: IntArray, h: Int): Boolean {
        var hours = 0
        for (pile in piles) {
            hours += (pile/k) + if (pile%k > 0) 1 else 0
            if (hours>h) return false
        }
        return true
    }
}