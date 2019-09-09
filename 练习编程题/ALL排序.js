
function bullue(array){
    for ( var i=0;i<array.length-1;i++){
        //每轮比较次数，次数=长度-1-此时的轮数
        for (var j=0;j<array.length-1-i;j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[i];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } //end if
        }//end for 次数
    } //end for 轮数
    return array
}

//选择排序
function selsetSort(arr){
	var len = arr.length;
	var index;
	for(var i=0;i<len-1;i++){
		index=i;
		for(var j=i+1;j<len;j++){
			if(arr[index]>arr[j]){//寻找最小值
				index=j;//保存最小值的索引
			}
		}
		if(index!=i){
		var temp =arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
	}
	return arr;
}

//插入排序
function insertSort(arr) {
    var len =arr.length;
    for (var i=1;i<len; i++) {
        var temp=arr[i];
        var j=i-1;//默认已排序的元素
        while (j>=0 && arr[j]>temp) {  //在已排序好的队列中从后向前扫描
                arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
                j--;
            }
        arr[j+1]=temp;
        }
    return arr
 }

 // 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
function mergeArray(arr, first, mid, last, temp) {
    let i = first; 
    let m = mid;
    let j = mid+1;
    let n = last;
    let k = 0;
    while(i<=m && j<=n) {
      if(arr[i] < arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
      }
    }
    while(i<=m) {
      temp[k++] = arr[i++];
    }
    while(j<=n) {
      temp[k++] = arr[j++];
    } 
    for(let l=0; l<k; l++) {
      arr[first+l] = temp[l];
    }
    return arr;
  }
  // 递归实现归并排序
  function mergeSort(arr, first, last, temp) {
    if(first<last) {
      let mid = Math.floor((first+last)/2);
      mergeSort(arr, first, mid, temp);    // 左子数组有序
      mergeSort(arr, mid+1, last, temp);   // 右子数组有序
      arr = mergeArray(arr, first, mid, last, temp);  
    }
    return arr;
  }

  //js快速排序
function _quickSort(num, left, right) {
    if (left >= right) return; // 若左右指针相遇，待排序数组长度小宇1，即递归的终点，return(注意不能写成left==right，这里left是有可能大于right的)。
    var i = left, j = right, flag = left; // 定义可移动的左右指针 i，j，定义flag为基数下标。
    while (i < j) { // 在i<j时不断循环，i一旦与j碰头，则跳出循环。
        while (num[j] >= num[flag] && j > flag) j--; // j不断左移，找到在num[flag]右侧且比它大的数。
        if (i >= j) {
            break; // 由于j可能已被改变，需再次判断i与j是否碰头。
        }
        while (num[i] <= num[flag] && i < j) i++; // i不断右移，找到且比基数小的数，且i不能与j碰头。(由于两次交换已合并，此处不需要使得i在flag左侧)
        // num[flag] num[j] num[i]三者换位，可用ES6语法糖[num[flag],num[j],num[i]] = [num[j],num[i],num[flag]];
        let temp = num[flag]; 
        num[flag] = num[j];
        num[j] = num[i];
        num[i] = temp
        flag = i; // 基数已经在原num[i]的位置，flag同时也要赋值成i。
    }
    _quickSort(num, left, flag - 1); // 将flag左边数组作为待排序数组，递归调用。
    _quickSort(num, flag + 1, right); // 将flag右边数组作为待排序数组，递归调用。
}