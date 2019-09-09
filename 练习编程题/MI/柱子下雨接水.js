
let line = '', str = '';
while (line = readline()) {
    str += line
}
// let str = '88,15,81,64,42,19,7,57,26,94,49,83,32,38,40,55,63,77,47,51,89,81,50,12,0,73,18,63,7,18,76,98,63,92,76,42,51,46,93,1,82,96,69,96,72,15,12,66,23,45,38,96,29,1,41,25,59,27,17,27,2,53,48,82,24,89,55,73,91,42,72,35,86,62,36,43,18,65,68,59,46,6,14,10,31,65,51,79,16,22,42,35,33,86,43,5,86,70,94,32';
let data = str.split(',').map(v => parseInt(v));

let water = 0, leftMax = 0, rightMax = 0;
for (let i = 1; i < data.length - 1; i++) {
    leftMax = Math.max(...data.slice(0, i));    
    rightMax = Math.max(...data.slice(i + 1));
    water += Math.max(Math.min(leftMax, rightMax) - data[i], 0);
}
print(water);
// console.log(water)