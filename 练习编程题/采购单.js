let line = read_line();
while(line){
    let priceNum = line.split(' ')[0];
    let itemNum = line.split(' ')[1];
    let p = [],itemArray = [];
    let str = '';
    while(p.length != priceNum){
        str += read_line();
        p = str.split(' ');
    }
    p = p.map(item => parseInt(item));
    while(itemArray.length != itemNum){
        itemArray.push(read_line())
    }
    
    let itemLable = {};
    let q = [];
    for(let i = 0; i < itemArray.length; i++){
        if(!itemLable[itemArray[i]]){
            itemLable[itemArray[i]] = 1;
        }else {
            itemLable[itemArray[i]]++;
        }
    }
    for(let k in itemLable){
        q.push(itemLable[k])
    }

    let minPrice = 0,maxPrice = 0; 
    q.sort((a,b) => a-b);
    p.sort((a,b) => a-b);

    for(let i = 0; i < q.length;i++){
        minPrice += q[q.length-1-i]*p[i]
    }

    for(let i = 0; i < q.length;i++){
        maxPrice += q[q.length-1-i]*p[p.length-1-i]
    }

    print(minPrice,maxPrice)
    line = read_line();
}