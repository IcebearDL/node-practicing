let [line1, line2] = [readline(), readline()];
let a1, a2, b1, b2;
a1 = parseInt(line1.split('+')[0]);
if(line1.split('+')[1] === 'i'){
    a2 = 1
}else if(line1.split('+')[1] === '-i'){
    a2 = -1
}else{
    a2 = parseInt(line1.split('+')[1].slice(0, -1));
}
b1 = parseInt(line2.split('+')[0]);
if(line2.split('+')[1] === 'i'){
    b2 = 1
}else if(line2.split('+')[1] === '-i'){
    b2 = -1
}else{
    b2 = parseInt(line2.split('+')[1].slice(0, -1));
}
// if (line1.indexOf('+') !== -1) {
//     a1 = parseInt(line1.split('+')[0]);
//     if(line1.split('+')[1] === 'i'){
//         a2 = 1;
//     } else if(line1.split('+')[1] === '-i'){
//         a2 = -1;
//     }else{
//         a2 = parseInt(line1.split('+')[1].slice(0, -1))
//     }
// } else if (line1[line1.length - 1] === 'i') {
//     a1 = 0;
//     if(line1 === 'i'){
//         a2 = 1
//     }else if(line1 = '-i'){
//         a2 = -1
//     }else{
//         a2 = parseInt(line1.slice(0, -1));
//     }
// } else{
//     a1 = parseInt(line1);
//     a2 = 0;
// }
// if (line2.indexOf('+') !== -1) {
//     b1 = parseInt(line2.split('+')[0]);
//     if(line2.split('+')[1] === 'i'){
//         b2 = 1;
//     } else if(line2.split('+')[1] === '-i'){
//         b2 = -1;
//     }else{
//         b2 = parseInt(line2.split('+')[1].slice(0, -1))
//     }
    
// } else if (line2[line2.length - 1] === 'i') {
//     b1 = 0;
//     if(line2 === 'i'){
//         b2 = 1
//     }else if(line2 = '-i'){
//         b2 = -1
//     }else{
//         b2 = parseInt(line2.slice(0, -1));
//     }
// } else{
//     b1 = parseInt(line2);
//     b2 = 0;
// }
let a = a1 * b1 - a2 * b2;
let b = a1 * b2 + a2 * b1;
print(a + '+' + b + 'i')