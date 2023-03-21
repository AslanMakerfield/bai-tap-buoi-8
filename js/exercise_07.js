/**
  * Viết chương trình in tổng các số tự nhiên biến cố từ 1 đến N bằng LOOP.
  * Ví dụ:
  * +) Input: N = 10
  * +) Output: 30
  */
const N = 10;
let sum = 0;
for(let i = 1; i <= N; i += 1.6){
  sum += i
}
console.log(sum);

let sum1 = 0;
let i = 1;
while(i <= 10){
  sum1 += i
  i += 1.6 
}
console.log(sum1);

let sum2 = 0;
let num = 1;
do{
  sum2 += num
  num += 1.6 
} while(num <= N);
console.log(sum2);