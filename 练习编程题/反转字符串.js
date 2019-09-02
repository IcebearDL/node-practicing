/**
 * 现在有一个字符串，你要对这个字符串进行 n 次操作，
 * 每次操作给出两个数字：(p, l) 表示当前字符串中从下标为 p 的字符开始的长度为 l 的一个子串。
 * 你要将这个子串左右翻转后插在这个子串原来位置的正后方，求最后得到的字符串是什么。
 * 字符串的下标是从 0 开始的，你可以从样例中得到更多信息。
 */
let str = readline();
let n = parseInt(readline());
let p, l, line;
while (line = readline()) {
    p = parseInt(line.split(' ')[0]);
    l = parseInt(line.split(' ')[1]);
    str = str.substring(0, p + l) + str.substring(p, p + l).split('').reverse().join('') + str.substring(p + l + 1);
}
print(str);