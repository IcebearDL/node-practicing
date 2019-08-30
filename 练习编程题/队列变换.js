/*
已知一个奇怪的队列，这个队列中有n个数，初始状态时，顺序是1,2,3,4,…n，是1-n按顺序排列。
这个队列只支持一种操作，就是把队列中的第i号元素提前到队首(1<i<=n)，如有4个元素，
初始为1，2，3，4,可以将3提前到队首，得到3，1，2，4 。  现在给出一个经过若干次操作之后的序列，
请你找出这个序列至少是由原序列操作了多少次得到的。
*/
let num = parseInt(readline());
let arr = [], count = 0;
while (line = readline()) {
    arr = arr.concat(line.split(' '))
}

for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
        count = i;
    }
}
    
print(count);