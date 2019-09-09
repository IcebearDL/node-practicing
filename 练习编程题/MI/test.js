function solution(prices, budget) {
    prices.sort((a, b) => b - a);
    if (prices[prices.length - 1] > budget) {
        return -1
    }
    let sum = 0, count = 0,output = [];
    for (let i = 0; i < prices.length; i++) {
        if(count + prices[i] < budget){
            count += prices[i];
        }
        for(count += prices)


        if (sum === budget) {
            output.push(count);
        }
        count = 0;
        sum = 0;
    }
    
    while (sum < budget) {
        sum += prices[0];
    }
}