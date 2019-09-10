/*
 * 选择排序是非线性时间比较类排序
 * 平均时间复杂度是O(n2),最好情况是O(n2),最坏情况是O(n2),空间复杂度是O(1)
 * 是不稳定的排序（因为选择排序用了交换，可能将小的交换到大的后面）
 */
const ran = require('./createRandoms');
const data = ran.randomArray;
console.time();

function selectSort(array) {
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}
selectSort(data);

console.log('使用“选择排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();