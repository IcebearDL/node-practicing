let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let outputArr = [1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10];
// 实现flatten方法使得flatten(givenArr)——>outputArr

//1.使用递归方法
function flatten(input){
    let output =[];
    for(let i = 0; i < input.length; i++){
        if(Array.isArray(input[i])){
            output = output.concat(flatten(input[i]))
        } else {
            output.push(input[i]);
        }
    }
    return output;
}

console.log(flatten(givenArr));

//2.使用扩展运算符，和数组连接运算concat
function flatten2(input){
    while(input.some(item=>Array.isArray(item))){
        input = [].concat(...input)
    }
    return input
}

//使用reduce
function flatten3(input){
    return input.reduce((arr,item)=>{
        return arr.concat(Array.isArray(item) ? flatten3(item) : item);
    },[])
}



console.log(flatten3(givenArr));

//排序数组 a-b 为按升序排列
// console.log(flatten2(givenArr).sort((a ,b) => a-b))