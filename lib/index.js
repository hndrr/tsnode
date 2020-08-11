'use strict';
var number = process.argv[2] || 0;
var sum = 0;
for (var i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
