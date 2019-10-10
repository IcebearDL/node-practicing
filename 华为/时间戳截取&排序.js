let n = parseInt(readline());
let arr = [];
while (n) {
    arr.push(readline());
    n--;
}

//先去重
arr = Array.from(new Set(arr));
let count = arr.length;

//找到第一个"-"
let label = [];
for (let k in arr) {
    label.push(arr[k].indexOf('-'));
}

//对每一个时间戳截取并转化
let timestamp = [];
for (let k in arr) {
    let timeStr = arr[k].slice(label[k] - 4, label[k] + 15)
    timestamp.push(+new Date(timeStr));
}

//找到时间戳最小的并输出
while (count) {
    let outputArr = [];
    let minLabel = 0;
    for (let i = 1; i < arr.length; i++) {
        if (timestamp[minLabel] > timestamp[i]) {
            minLabel = i;
            outputArr = [];
        } else if (timestamp[minLabel] === timestamp[i]) {
            outputArr.push(i);
        }
    }

    if (outputArr.length === 0) {
        print(arr[minLabel]);
        arr.splice(minLabel, 1);
        timestamp.splice(minLabel, 1);
        count--;
    } else {
        //比较ASCII码值
        outputArr.push(minLabel);
        let _arr = [];
        for (let k in outputArr) {
            _arr.push(arr[outputArr[k]])
        }
        
        (function judge(_arr) {
            let label = 0;
            let n = _arr.length;
            while (n) {
                for (let i = 1; i < _arr.length; i++) {
                    if (_arr[label].charCodeAt(0) > _arr[i].charCodeAt(0)) {
                        label = _arr[i];
                    }
                }
                print(_arr[label]);
                _arr.splice(label, 1);
                n--;
            }
        })(_arr);

        for (let k in outputArr) {
            arr.splice(outputArr[k], 1);
            timestamp.splice(outputArr[k], 1);
        }
        count -= outputArr.length;
    }
}


