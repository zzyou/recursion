/* Write a recursive function isPalindrome(aString) that returns true if aString is a palindrome. 
A palindrome is any string that is the same read forwards or backwards. */

function isPalindrome(aString) {
    if (typeof aString === 'string') {
        aString = aString.split('');
    }
    if (aString.length === 1 || aString.length === 0) {
        return true;
    }
    if (aString.shift() === aString.pop()) {
        return isPalindrome(aString);
    }
    return false;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('step on no pets')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('goat')); // false