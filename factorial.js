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