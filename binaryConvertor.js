/* Write a function converting a number to a binary number.
6 = 1* 4 + 1 * 2 + 1 * 1 => 110
5 = 1 * 4 + 0 * 2 + 1 * 1 => 101
4 = 1 * 4 + 0 * 2 + 0 * 0 => 100
3 = 1 * 2 + 1 * 1 => 11
13 = 1 * 8 + 1 * 4 + 0 * 2 + 1 * 1 => 1101
*/

function binaryConvertor(num) {
    if (num < 0) {
        return console.log("I don't want a negative number");
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    let power = Math.floor(Math.sqrt(num));
    return Math.pow(10, power) + binaryConvertor(num - Math.pow(2, power));
}

// another method:
function binaryConvertor(num) {
    if (num >= 1) {
        return binaryConvertor(num / 2) + (num % 2);
    }
    return '';
}


binaryConvertor(13); // 1101
binaryConvertor(6); // 110
binaryConvertor(5); // 101
binaryConvertor(4); // 100
binaryConvertor(3); // 11
