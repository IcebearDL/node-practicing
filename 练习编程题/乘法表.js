let n = read_line();
let m = parseInt(n.split(' ')[1]);
let k = parseInt(n.split(' ')[2]);
n = parseInt(n.split(' ')[0]);
let arr = [],stop = false;
for (let i = 1; i <= n; i++) {
    if(stop) break;
    for (let j = 1; j <= m; j++) {
        arr.push(i * j);
        arr.sort((a, b) => a - b);
        if(k === arr.length){
            print(arr[arr.length-1]);
            stop = true;
            break;
        }
    }
}
