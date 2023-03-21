// // Bài 5
// /**
//  * Viết chương trình in tất cả các số tự nhiên lẻ từ 0 đến N bằng LOOP.
//  * Ví dụ:
//  * +) Input: N = 20
//  * +) Output: 1 3 5 ... 19
//  */
 const N = 20;
 for (i = 1; i < N; i += 2){
    console.log(i);
}

let step1 = 1
while (step1 < N) {
    console.log(step1);
    step1 += 2
}

let step2 = 1
do{
    console.log(step2);
    step2 += 2
} while(step2 < N);