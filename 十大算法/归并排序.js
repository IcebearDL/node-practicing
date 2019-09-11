/*
 * 归并排序是非线性时间比较类排序
 * 平均时间复杂度是O(nlogn),最好情况是O(nlogn),最坏情况是O(nlogn),空间复杂度是O(n)
 * 是稳定的排序（典型的分治法的应用）
 * 非常快算法，100000个{1,100000}随机数据排序，耗时240ms左右
 */
const ran = require('./createRandoms');
const data = ran.randomArray;
console.time();

function mergeSort(array) {
    if (array.length < 2) return array;
    let middle = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)))
}
function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}
mergeSort(data);
// process.stdout.write(mergeSort(data).toString());

console.log('使用“归并排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();
