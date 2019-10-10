let t = parseInt(readline());
while (t) {
    let n = parseInt(readline());
    let str = readline();
    let label = [], number = [], string = [];
    for (let s in str) {
        //是字符则为1,是数字则为0
        if (Object.is(parseInt(str[s]), NaN)) {
            label.push(1);
            string.push(str[s]);
        } else {
            label.push(0);
            number.push(parseInt(str[s]))
        }
    }
    //数字进行排序
    number.sort((a, b) => a - b);

    //字母进行排序
    let temp;
    for (let i = 0; i < string.length - 1; i++) {
        temp = string[i + 1];
        for (let j = i; j >= 0; j--) {
            if (temp.charCodeAt(0) < string[j].charCodeAt(0)) {
                string[j + 1] = string[j];
                string[j] = temp;
            } else break
        }
    }

    //准备输出
    let result = [];
    for (let k in label) {
        label[k] === 1 ? result.push(string.shift()) : result.push(number.shift())
    }

    print(result.join(''))
    t--;
}