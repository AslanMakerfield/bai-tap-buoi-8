// Bài 3
/**
 * Viết chương trình in tất cả các số tự nhiên từ START đến END bằng LOOP.
 * Ví dụ:
 * +) Input: START = 10, END = 20
 * +) Output: 10 11 ... 20
 */

const START = 10, END  = 20;
for (let i = START; i <= END; i += 1){
    console.log(i);
}

let step1 = START
while (step1 <= END) {
    console.log(step1);
    step1 += 1
}

let step2 = 9
do{
    step2 += 1
    console.log(step2);
} while (step2 <= 19);