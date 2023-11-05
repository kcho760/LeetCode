class Solution {
    fun getWinner(arr: IntArray, k: Int): Int {
        var wins: Int = 0
        var winner = arr[0]

        for(i in 1 until arr.size) {
            if(winner > arr[i]) {
                wins++
            }else{
                winner = arr[i]
                wins = 1
            }
            if(wins == k) return winner
        }
        return winner
    }
}