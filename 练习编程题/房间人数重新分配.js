/*
有n个房间，现在i号房间里的人需要被重新分配，分配的规则是这样的：
先让i号房间里的人全都出来，接下来按照 i+1, i+2, i+3, ... 的顺序依此往这些房间里放一个人，
n号房间的的下一个房间是1号房间，直到所有的人都被重新分配。

现在告诉你分配完后每个房间的人数以及最后一个人被分配的房间号x，
你需要求出分配前每个房间的人数。数据保证一定有解，若有多解输出任意一个解。
*/
let line = readline().split(' ');
let n = +line[0], x = +line[1], arr = [];
while (line = readline()) {
    arr = arr.concat(line.split(' '))
}
arr = arr.map(v => parseInt(v));
let count = 0;
let arrA = arr.slice(0, x);
let k = arrA.lastIndexOf(0);
if (k !== -1) {
    arr = arr.slice(0, k).concat(x - k - 1, arrA.slice(k + 1).map(v => v - 1), arr.slice(x));
} else{
    while (arr[x - 1] !== 0) {
        arr[x - 1]--;
        count++;
        x === 1 ? x = n : x--;
    }
    arr[x - 1] = count;
}
print(arr.join(' '));
