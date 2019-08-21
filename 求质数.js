function getNum(){
    let arr = [1,2,3,5,7];
    for(let i = 10; i <= 1000;i++){
        let key = false;
        for(let j = 2; j < i; j++){
            if(i % j !== 0){
                key = true
            } else {
                key = false;
                break;
            }
        }
        if(key) arr.push(i);
    }
    return arr;
}

function result(num){
    let count = 0;
    let arr = getNum();
    let result = [];

    let key = 0;
    while(arr[key] <= num){
        key++;
    }

    for(let i = 0; i < key; i++){
        for(let j = i; j < key; j++){
            if(arr[i] + arr[j] === num){
                result.push('(' + arr[i] + ',' + arr[j] + ')');
                count++;
            }
        }
    }

    console.log('共有' + count + ' 对质数和相加为 ' + num + ' , ' + '分别是 ' + result.join(','));
}

result(1000);