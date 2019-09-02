let n = parseInt(readline());
let comp = [], dele = [];
let x = n;
while (x) {
    comp.push(readline().split(' ').map(v => parseInt(v)));
    x--;
}s
let q = parseInt(readline());
let y = q;
while (y) {
    dele.push(readline().split(' ').map(v => parseInt(v)));
    y--;
}
let result = [];
for (let i = 0; i < dele.length; i++) {
    //arr表示删除的公司行，k删几个公司
    let arr1 = [...comp];
    let arr = [...dele[i]];
    for (let i = 1; i < arr.length; i++) {
        arr1 = arr1.filter(v => v[0] !== arr[i]);
    }
    // for(let i = 0; i<arr1.length ; i++){
    //     let j = arr1[i];
    //     let 
    //     arr1 = arr1.filter((v,index) => {
    //         v[0] === j[0] && index === i
    //     } );
    // }
    print(arr1);
    let k = 0,index = 0;
    let label1 = arr1[0];
    let label2 = label1[1];
    for(let i = 0;i<arr1.length;i++){
        let label3 = arr1[i];
        if(label3 > label2){
            k = label3;
            index = i;
        }
    }
    print(index,k);
}
