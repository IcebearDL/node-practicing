/*作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。
为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），
在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。手串上的颜色一共有c种。
现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。
请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。

输入描述:
第一行输入n，m，c三个数，用空格隔开。(1 <= n <= 10000, 1 <= m <= 1000, 1 <= c <= 50) 
接下来n行每行的第一个数num_i(0 <= num_i <= c)表示第i颗珠子有多少种颜色。
接下来依次读入num_i个数字，每个数字x表示第i颗柱子上包含第x种颜色(1 <= x <= c)

输出描述:
一个非负整数，表示该手链上有多少种颜色不符需求。

输入例子1:
5 2 3
3 1 2 3
0
2 2 3
1 2
1 3

输出例子1:
2
*/

let pearlNum = 0, pearlKey = 0, colorNum = 0;
let colorClos = [];
function handleData(input) {
    let data = [];
    //这里过滤不能用value=> typeof parseInt(value) !== 'number' 因为typeof NaN 值是'number'
    //先按换行符分隔开
    input.split('\n').forEach(item => data.push(...item.split(' ')));
    // data = input.split(' ').filter(value => parseInt(value) === 0 || Boolean(parseInt(value)));
    //forEach不会改变原数组，map返回新数组
    data = data.map(value => value = parseInt(value));
    pearlNum = data[0];
    pearlKey = data[1];
    colorNum = data[2];
    //剩余参数分组
    for (let i = 3; i < data.length; i = i + data[i] + 1) {
        let str = [data[i]];
        for (let j = 0; j < data[i]; j++) {
            str.push(data[i + j + 1]);
        }
        colorClos.push(str);
    }
}

function output() {
    //初始化每个颜色的串珠序列号数组，并遍历colorClos求出
    let sameColorArr = [];
    for (let i = 0; i < colorNum; i++) {
        sameColorArr[i] = [];
    }
    colorClos.forEach((item, index) => {
        for (let i = 1; i < item.length; i++) {
            sameColorArr[item[i] - 1].push(index)
        }
    })

    //最后一步，对sameColorArr解析
    let count = 0;
    for (let i = 0; i < sameColorArr.length; i++) {
        let arr = sameColorArr[i];
        if (arr.length === 1) continue
        else if (arr[0] === 0 && arr[arr.length - 1] === pearlNum - 1) {
            count++;
        } else {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] - arr[j + 1] === -1) {
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}

handleData(
    `100 10 50
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
1 49
0
0
0
0
0
0
0
0
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
1 48
0
0
0
0
1 42
0
0
1 28
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
0
0
0
0
0
1 39
0
0
1 47
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
1 45
0
0
1 34
0
0
0
0
0
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
0
0
0
0
0
0
0
0
1 26
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
0
0
0
0
0
0
0
0
0
50 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50`);

console.log(output());