process.nextTick(()=>{
    console.log('nextTick');
})

setTimeout(()=>{
    console.log('setTimeout');
},0)

const id = setInterval(()=>{
    console.log('setInterval');
},0)

setImmediate(()=>{
    console.log('immediate');
})

Promise.resolve().then(() =>
    console.log('promise1')
).then(()=>{
    console.log('promise2');
}).then(()=>{
    console.log('promise3');
}).then(()=>{
    setTimeout(()=>{
        console.log('promise4');
        clearInterval(id);
    },0)
})

console.log('end')