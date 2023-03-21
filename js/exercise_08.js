/**
 * Viết chương trình in bảng nhân của một số đã cho. * Ví dụ:
 * +) Input: N = 5
 * +) Output:
 * 5 x 1 = 5
 * 5 x 2 = 5
 * 5 x 3 = 5
 * ...
 * 5 x 10 = 10
 *
 */
const N = 5;
for(i = 1; i <= 10; i += 1){
    console.log(`${N} x ${i} = ${N * i}`);
}

let step1 = 1;
while(step1 <= 10){
    console.log(`${N} x ${step1} = ${N * step1}`);
    step1 += 1
}

let step2 = 0
do{
    step2 += 1
    console.log(`${N} x ${step2} = ${N * step2}`);
}while(step2 < 10);