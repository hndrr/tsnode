'use strict';

function fib(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const Length: number = 40;

for (let index = 0; index < Length; index++) {
    console.log(fib(index));
}
