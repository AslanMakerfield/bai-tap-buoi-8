/**
* Viết chương trình đếm số chữ số của một số bằng LOOP.
* Ví dụ:
* +) Input: N = 12345
* +) Output: 5
*/
const N = 12345;
let temp = N;
let count = 0;
while (temp > 0) {
    count += 1;
    temp = Math.floor(temp / 10);
}
console.log("result: ", count);

let number = 0;
for(i = N; i > 0; i = Math.floor(i / 10)){
    number += 1;
}
console.log("result: ",number);

let step = N
let sum = 0;
do{
    sum += 1
    step = Math.floor(step / 10);
} while(step > 0);
console.log("result: ",sum);