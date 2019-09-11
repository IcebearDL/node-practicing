/*
 * 简单插入排序是非线性时间比较类排序，插入排序的一种
 * 平均时间复杂度是O(n2),最好情况是O(n),最坏情况是O(n2),空间复杂度是O(1)
 * 是稳定的排序（每次都是将小的往最前面插入）
 * 最快算法，100000个{1,100000}随机数据排序，耗时4000ms左右
 */
const ran = require('./createRandoms');
const data = ran.randomArray;
console.time();

function insertionSort(array) {
    let temp;
    for (let i = 0; i < array.length - 1; i++) {
        temp = array[i + 1];
        //用while循环就不必break
        for (let j = i; j >= 0; j--) {
            if (temp < array[j]) {
                array[j + 1] = array[j];
                array[j] = temp;
            } else break;
        }
    }
    return array
}
insertionSort(data);
// process.stdout.write(insertionSort(data).toString());

console.log('使用“简单插入排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();
