/*
 * 冒泡排序是非线性时间比较类排序
 * 平均时间复杂度是O(n2),最好情况是O(n),最坏情况是O(n2),空间复杂度是O(1)
 * 是稳定的排序
 * 很慢的算法，只是名字比较有意思，100000个{1,100000}随机数据排序，耗时34800ms左右
 */
const ran = require('./createRandoms');
const arr = ran.randomArray;
console.time();

function bubbleSort(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array
}
bubbleSort(arr);

console.log('使用“冒泡排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();
// process.stdout.write(bubbleSort(arr).toString())

