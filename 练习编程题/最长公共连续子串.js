//最长公共连续子串
let str1 = read_line().toLowerCase();
let str2 = read_line().toLowerCase();

let label = 0, count = 0;

let i = 0; j = 0;
while (i < str1.length) {
    if (str1[i] === str2[j]) {
        label++;
        i++;
        j === str2.length - 1 ? j = 0 : j++;
    } else {
        count = Math.max(count, label);
        label = 0;
        if (j === str2.length - 1) {
            i++;
            j = 0;
        } else {
            j++;
        }
    }
}
print(Math.max(count , label));