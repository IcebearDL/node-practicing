//考察let在for循环中的块级作用域
const obj = {
    name:'jsCoder',
    skill:['es6','react','angluar'],
    say:function(){
        for(let i = 0; i<this.skill.length; i++){
            setTimeout(()=>{
                console.log('NO.'+(i+1)+this.name);
                console.log(this.skill[i]);
                console.log('----------------------')
            },0);
            console.log(i+1);
        }
    }
};
obj.say();