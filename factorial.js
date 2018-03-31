/* The factorial of a whole number n is written n! and defined as the product of all positive whole numbers less than or equal to n.
For example, the value of 3! (read: three factorial) is 6 which is calculated by multiplying together all whole numbers less than or equal to 3:
factorial(3) = 3! = 3 * 2 * 1 = 6
The value of 10 factorial, for example, can be calculated by:
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
Write a function that uses recursion to calculate the factorial of a number. */

function factorial(n) {
    if (n < 0) {
        return console.log("no negative number factorial");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(10));