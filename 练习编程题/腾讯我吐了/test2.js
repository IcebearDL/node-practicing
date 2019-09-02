let n = parseInt(readline());
let arr = [], line;
while (line = readline()) {
    arr.push(line.split(' ').map(v => parseInt(v)))
}
function mergeArr(arr) {
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return sort(mergeArr(left), mergeArr(right), middle);
}

function sort(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
}

function countPoints(arr) {

}