let str = '', line, arr;
while (line = readline()) {
    str += line;
}
arr = str.split(',').map(v => parseInt(v));
let sum = [], outArr = [];
let label = 0;
for (let i = 0; i < arr.length; i++) { sum[i] = 0, outArr[i] = [] }
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum[label] += arr[i];
        outArr[label].push(arr[i]);
    } else {
        label++;
    }
}
let a = 0, array;
for (let i = 0; i < sum.length; i++) {
    if (sum[i] > a) {
        a = sum[i];
        array = outArr[i];
    }
}
print()