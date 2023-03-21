// // bài 4
// // * Viết chương trình in tất cả các số tự nhiên chẵn từ 0 đến N bằng LOOP.
// //  * Ví dụ:
// //  * +) Input: N = 20
// //  * +) Output: 0 2 4 6 ... 20
const N = 20;
for (i = 0; i <= N; i += 2){
    console.log(i);
}

let step1 = 0
while(step1 <= N) {
    console.log(step1);
    step1 += 2
}

let step2 = -2
do{
    step2 += 2
    console.log(step2);
} while(step2 < N);