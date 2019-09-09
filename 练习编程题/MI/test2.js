var output = '';
function solution(input) {
    class Node {
        constructor(value) {
            this.value = value
            this.left = null;
            this.right = null;
        }
    }
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] === '('){
            arr.push = new Node(input[i-1]);
            if(input[i+1] !== ',') arr[arr.length-1].left = new Node(input[i+1]);
        }else if(input[i] === ',' && input[i+1] !== ')'){
            
        }
    }
    let middle = '';
    while (input[i] === '(') {
        middle = input[i - 1];
        return solution(input)

        i++;
    }
}