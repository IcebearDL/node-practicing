/*
 * 快速排序是非线性时间比较类排序，是交换类排序，跟冒泡排序有些类似
 * 平均时间复杂度是O(nlogn),最好情况是O(nlogn),最坏情况是O(n2),空间复杂度是O(logn)
 * 是不稳定的排序，交换位置的过程中可能将小的放到大的后面（递归的应用）
 * 非常快算法，100000个{1,100000}随机数据排序，耗时520ms左右
 * 数据集越大，使用快排越有优势
 */
const ran = require('./createRandoms');
const data = ran.randomArray;
console.time();

function quickSort(array) {
    let len = array.length;
    let mid, pivot, left = [], right = [];
    if (len <= 1) return array;
    index = Math.floor(len / 2);
    //保存中间值，并删掉原数组中的中间值
    pivot = array.splice(index, 1);
    len--;

    for (let i = 0; i < len; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }
    //递归分割所有的数组
    return quickSort(left).concat(pivot, quickSort(right));
}
quickSort(data);
// process.stdout.write(quickSort(data).toString());

console.log('使用“归并排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();
