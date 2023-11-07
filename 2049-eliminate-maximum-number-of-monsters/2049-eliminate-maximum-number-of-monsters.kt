class Solution {
    fun eliminateMaximum(dist: IntArray, speed: IntArray): Int {
        val n = dist.size
        var arrival = IntArray(n)

        for (i in dist.indices) {
            arrival[i] = (dist[i] + speed[i] - 1) / speed[i]
        }

        arrival.sort()

        for(i in 1..dist.size - 1) {
            if(arrival[i] <= i) {
                return i
            }
        }
        return n
    }
}
// calculating by arrival time
// create a new int array based on arrival time
// sort the array and check if arrival[i] == arival[i+1]
/// if so return i