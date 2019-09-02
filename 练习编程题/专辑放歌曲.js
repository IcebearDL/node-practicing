/**
 * 你作为一名出道的歌手终于要出自己的第一份专辑了，
 * 你计划收录 n 首歌而且每首歌的长度都是 s 秒，每首歌必须完整地收录于一张 CD 当中。
 * 每张 CD 的容量长度都是 L 秒，而且你至少得保证同一张 CD 内相邻两首歌中间至少要隔 1 秒。
 * 为了辟邪，你决定任意一张 CD 内的歌数不能被 13 这个数字整除，
 * 那么请问你出这张专辑至少需要多少张 CD ？
 */

let line = readline().split(' ');
let n = parseInt(line[0]), s = parseInt(line[1]), L = parseInt(line[2]);
let count = 0;
let content = L;
while (n) {
    if (L - s > 0) {
        L -= s + 1;
        n--;
        n === 0 ? count++ : null;
    } else if (L - s === 0) {
        L = content;
        n--;
        count++;
    } else {
        L = content;
        count++;
    }
}
print(count);