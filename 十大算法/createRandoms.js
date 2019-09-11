let arr = [];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
for (let i = 0; i < 100000; i++) {
    arr.push(getRandomIntInclusive(1, 100000))
}

exports.randomArray = arr;

