class Solution {
    fun buildArray(target: IntArray, n: Int): List<String> {
        val operations = mutableListOf<String>()
        var currentIndex = 0
        var currentNumber = 1

        while(currentIndex < target.size) {
            operations.add("Push")
            
            if(target[currentIndex] == currentNumber) {
                currentIndex++
            }else{
                operations.add("Pop")
            }
            currentNumber++
            // if(currentNumber > n) {
            //     break
            // }
        }
        return operations
    }
}

// target = [1,3]    n=3
// stream = [1,2,3]
// stack = []
// operations =[push,push,pop,push]
// [1,3]
// push = pushes an integer to the top of the stack
// pop = removes an integer on the top of the stack

//idea is dual pointers
//starts from 1 and if target at index is not the same add operations push then pop to move then remove
//continues on until stack == target
// return operations

//target is strictly increaseing? means in order?
