/**
 * 
 * 题目：

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 

You should return [1, 3, 4].
 */


 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function (root) {
    const number = [];
    //如果输入为空
    if (root === null) {
        return number;
    }

    //队列储存
    const queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        const len = queue.length;
        while (len > 0) {
            //长度大于0时，弹出元素
            let cur = queue.shift();

            //将左右孩子加入队列
            if (cur.left)
                queue.push(cur.left);
            if (cur.right)
                queue.push(cur.right);

            len--;
            //如果队列一行的元素弹空，则最后一个即为最右侧的元素
            if (len == 0)
            number.push(cur.val);
        }
    }

    return number;
};