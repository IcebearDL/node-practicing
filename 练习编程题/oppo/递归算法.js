/**
 * Welcome to vivo !
 */
let disk = 15, _disk_ = disk;
let mem = 10, _mem_ = mem;
let apps = ['5,1,1000', '2,3,3000', '5,2,15000', '10,4,16000']
apps = apps.map(v => v.split(',').map(item => parseInt(item)));

let arr = [];
let _apps = JSON.parse(JSON.stringify(apps));

solution(disk, mem, apps, 0);

function solution(disk, mem, apps, users) {

    let _disk = 0, _mem = 0;
    for (let i = 0; i < apps.length; i++) {
        while (_disk < disk && _mem < mem) {
            let item = apps[i];
            _disk += item[0];
            _mem += item[1];
            if (_disk > disk || _mem > mem) {
                arr.push(users);
                apps = JSON.parse(JSON.stringify(_apps));
                _disk = 0, _mem = 0, users = 0;
                disk = _disk_, mem = _mem_;
                break;
            } else {
                users += item[2];
                apps = apps.slice(i + 1);
                solution(disk - _disk, mem - _mem, apps, users)
            }
        }
    }
}

// while (line = readline()) {
// var inputs = line.split(" ");
// var disk = inputs[0];
// var mem = inputs[1];
// var apps = inputs[2].split('#');
// disk = parseInt(disk);
// mem = parseInt(mem);
// apps = apps.map(v => v.split(',').map(item => parseInt(item)));

// print(arr[0]);
// }