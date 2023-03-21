/**
  * Viết chương trình in tổng các số tự nhiên từ 1 đến N bằng LOOP.
  * Ví dụ:
  * +) Input: N = 10
  * +) Output: 55
  */
const N = 10;
let sum = 0;
for (let i = 1; i <= N; i += 1) {
  sum += i;
}

console.log(sum);

let sum1 = 0;
let i = 1;
while (i <= N) {
  sum1 += i;
  i += 1;
}
console.log(sum1);

let sum2 = 0;
let num = 0;
do{
  sum2 += num
  num += 1;
} while(num <= N);
console.log(sum2)