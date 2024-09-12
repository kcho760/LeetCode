/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const freq = new Array(26).fill(0);

    // Create a frequency array for allowed characters
    for (const char of allowed) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Iterate through each word
    let count = 0;
    for (const word of words) {
        let isConsistent = true;
        for (const char of word) {
            if (freq[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
                isConsistent = false;
                break;
            }
        }

        if (isConsistent) {
            count++;
        }
    }

    return count;
};