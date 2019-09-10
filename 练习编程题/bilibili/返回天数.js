let date = readline().split('-');
let [year, month, day] = [parseInt(date[0]), parseInt(date[1]), parseInt(date[2])];
let count = 0;
for (let i = 1; i < month; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10) {
        count += 31;
    } else if (i === 4 || i === 6 || i === 7 || i === 11) {
        count += 30;

    } else if (i === 2) {
        let date = new Date(year, 2, 0);
        count += date.getDate();
    }
}
count += day;
print(count);