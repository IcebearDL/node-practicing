//非递归
function getNthFibonacci(count) {
    if(count<0) return 0;
    if(count<=1) return 1;
    var first = 1;
    var second = 1;
    var third = 0;
    for(var i = 2; i <= count; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}

//递归
function getNthFibonacci(count) {
    if(count ===1 || count === 2) return 1;
    return getNthFibonacci(count-1)+getNthFibonacci(count-2);
}