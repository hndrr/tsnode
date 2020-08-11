'use strict';
//メモ化 連想配列を作って覚えさせる
const tmemo = new Map();
tmemo.set(0, 0);
tmemo.set(1, 0);
tmemo.set(2, 1);
function trib(n) {
    if (tmemo.has(n)) {
        return tmemo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    tmemo.set(n, value);
    return value;
}
const tlength = 40;
for (let index = 0; index < tlength; index++) {
    console.log(trib(index));
}
//# sourceMappingURL=tribonacci.js.map