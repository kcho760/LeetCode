import java.util.PriorityQueue

class SeatManager(n: Int) {
    private val availableSeats = PriorityQueue<Int>()

    init {
        // Initialize the priority queue with all available seat numbers
        (1..n).forEach { availableSeats.add(it) }
    }

    fun reserve(): Int {
        // Poll the queue to get the smallest available seat number
        return availableSeats.poll()
    }

    fun unreserve(seatNumber: Int) {
        // Add the unreserved seat number back to the queue
        availableSeats.add(seatNumber)
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
