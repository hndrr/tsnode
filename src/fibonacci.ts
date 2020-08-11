'use strict';

//メモ化 連想配列を作って覚えさせる
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n: number): number {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value: number = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const Length: number = 40;

for (let index = 0; index < Length; index++) {
    console.log(fib(index));
}
