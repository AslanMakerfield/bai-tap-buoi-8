/**
  * Viết chương trình in ngược tất cả các số tự nhiên từ 1 đến N bằng LOOP.
  * Ví dụ:
  * +) Input: N = 10
  * +) Output: 10 9 ... 2 1
  */

const N = 10;
for (i = N; i >= 1; i -= 1){
    console.log(i);
}

let step1 = N;
while(step1 >= 1){
    console.log(step1);
    step1 -= 1
}

let step2 = 11;
do{
    step2 -= 1
    console.log(step2);
} while(step2 > 1);