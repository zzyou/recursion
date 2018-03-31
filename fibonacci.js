/* The fibonacci sequence appears in unexpected places all over mathematics and nature. 
It is defined by the following three rules:
The first Fibonacci number is 1,
The second Fibonacci number is 1,
Every other Fibonacci number is the sum of the previous two Fibonacci numbers.
For example, the first few numbers in the Fibonacci sequence are:
1, 1, 2, 3, 5, 8, 13, 21, ...
The next Fibonacci number is:
13 + 21 = 34
Write a method fib(n) that calculates the nth Fibonacci number (starting from n = 1). */

function fib(n) {
    if (n < 1) {
        return;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

console.log(fib(7));
console.log(fib(8));