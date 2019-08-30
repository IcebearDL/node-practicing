let n;
while (n = read_line()) {
    let str = '', a = 0, arr = [];
    while (arr.length != n) {
        str += read_line();
        arr = str.split(' ');
    }
    a = +arr[0];
    arr = arr.map(v => +v).sort((a, b) => a - b);
    let output = 0;
    while (arr.indexOf(a) !== arr.length - 1) {
        arr[arr.indexOf(a)]++;
        arr[arr.length-1]--;
        a++;
        output++;
        arr.sort((a, b) => a - b)
    }
    print(output);
}