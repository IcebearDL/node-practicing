/*题目描述：开心消消乐；
给定一个一维的正整数数组，逐次选择其中一个数做消除，消除所获得的分数为当前数字和左右相邻数字的乘积（当左边或者右边没有数字可以认为是1）。
e.g. 输入数组：[3, 1, 5, 8]
step1：消除1 ，获得分数 15 = 3x1x5，数组变为 [3, 5, 8]
step2：消除5，获得分数 120 = 3x5x8，数组变为 [3, 8]
step3：消除3，获得分数 24 = 3x8，数组变为[8]
step4：消除8，获得分数 8 = 8，数组变为[]
最终获得分数：15+120+24+8 = 167
求消除能够获取的最大分数
*/

//法一，用递归
function getScore(inputArr){
    let score = 0;
    if(inputArr.length === 0){
        score = 0
    }else if(inputArr.length === 1){
        score = inputArr[0]
    }else if(inputArr.length === 2){
        score = inputArr[0]*inputArr[1]+inputArr[1]
    }else{
        let kscore = inputArr[1]*inputArr[0]*inputArr[2];
        //删除数组 用splice
        inputArr = inputArr.filter((value,index) => index !== 1);
        //使用递归
        score = kscore + getScore(inputArr);
    }
    return score;
}

console.log(getScore([3,1,5,8]))


//方法二
function displaya(arr){
    let sum=0;
    while(arr.length>2){
        sum+=arr[0]*arr[1]*arr[2];
        arr.splice(1,1);
    }
      sum+=arr[0]*arr[1]+arr[1];
    console.log(sum);
  }