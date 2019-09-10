let data = readline().split(' ');
data.pop();
let k = parseInt(readline());
if (k > data.length) {
    print(data.join('->'))
} else if (k === data.length) {
    print(data.reverse().join('->'))
} else {
    let round = Math.floor(data.length / k);
    let newDate = [];
    for (let i = 0; i < round; i++) {
        newDate = newDate.concat(data.slice(i * k, i * k + k).reverse())
    }
    newDate = newDate.concat(data.slice(round * k))
    print(newDate.join('->'))
}