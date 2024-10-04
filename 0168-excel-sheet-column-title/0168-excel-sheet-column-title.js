/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {

    const Letter = "ZABCDEFGHIJKLMNOPQRSTUVWXY"
    let str = ""
    while (columnNumber > 0) {
        str = Letter.charAt(columnNumber % 26) + str
        columnNumber -= columnNumber % 26 == 0 ? 26 : columnNumber % 26
        columnNumber /= 26
    }
    return str
};