/**
  * Viết chương trình in tất cả các số tự nhiên từ 1 đến N bằng LOOP.
  * Ví dụ:
  * +) Input: N = 10
  * +) Output: 1 2 3 4 5 6 7 8 9 10
  */

const N = 10;
for (i = 1; i <= N; i += 1) {
    console.log(i);
}

let step1 = 1
while (step1 <= N){
   console.log(step1);
   step1 += 1
}

let step2 = 0
do{
    step2 += 1
    console.log(step2);
} while(step2 < N);