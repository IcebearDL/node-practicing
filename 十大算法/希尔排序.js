/*
 * 希尔排序是非线性时间比较类排序,插入排序的一种,是插入排序的改进,第一种突破n2时间复杂度的算法
 * 平均时间复杂度是O(n2),最好情况是O(nlog2n),最坏情况是O(nlog2n),空间复杂度是O(1)
 * 是不稳定的排序（动态改变步长的插入方法）
 * 大数据情况比简单插入排序慢
 * 比简单插入排序稍慢，100000个{1,100000}随机数据排序，耗时5500ms左右
 */
const ran = require('./createRandoms');
const data = ran.randomArray;
console.time();

function shellSort(array) {
    let step = array.length;
    let temp;
    while (step > 1) {
        step = Math.floor(step / 2);
        for (let i = 0; i <= array.length - step; i += step) {
            temp = array[i + step];
            for (let j = i; j >= 0; j -= step) {
                if (temp < array[j]) {
                    array[j + step] = array[j];
                    array[j] = temp;
                } else break;
            }
        }
    }
    return array
}
shellSort(data);
// process.stdout.write(shellSort(data).toString());

console.log('使用“希尔排序”对10000个随机数据进行排序，所花时间：');
console.timeEnd();
