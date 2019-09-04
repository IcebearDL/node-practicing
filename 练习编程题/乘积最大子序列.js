let arr = [-1,-2,-10];
let result1 = arr[0], result2 = arr[0], output = arr[0];
for (let i = 1; i < arr.length; i++) {
    result1 = Math.max(arr[i] * result2, Math.max(arr[i], arr[i] * result1));
    result2 = Math.min(arr[i] * result2, Math.min(arr[i], arr[i] * result1));
    output = Math.max(result1, output);
}
print(output);