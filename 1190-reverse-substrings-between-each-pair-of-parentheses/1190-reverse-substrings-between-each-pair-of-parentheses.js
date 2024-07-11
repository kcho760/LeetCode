/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {

        if (s[i] ===')') {
      
            const queue = []
            while (stack.at(-1) !== '(') {
                queue.push(stack.pop())
            }
            stack.pop()
            for (let j = 0; j < queue.length; j++) {
                stack.push(queue[j])
            }

        } else {
            stack.push(s[i])
        }

    }
    return stack.join('')
};