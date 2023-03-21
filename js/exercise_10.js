/**
 * Viết chương trình hoán đổi tất cả các chữ số trong số đã cho bằng LOOP.
 * Ví dụ:
 * +) Input: N = 12345
 * +) Output: 54321
 */
const N = 12345;
let temp = N;
let result = 0;

do {
    result = result * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
} while (temp > 0);

console.log("result: ", result);

let sum = 0
for(i = N; i > 0; i = Math.floor(i / 10)){
    sum = sum * 10 + (i % 10);
}
console.log("result: ", sum);

let step = N
let num = 0
while(step > 0){
    num = num * 10 + (step % 10);
    step = Math.floor(step / 10)
}
console.log("result: ", num);