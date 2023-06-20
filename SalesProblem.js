
const productProfitArray = [
    {"Product A": -22},
    {"Product B": 35},
    {"Product C": -81},
    {"Product D": -1},
    {"Product E": -75},
];

function pushProfits(data){
    //instantiate profit variable
    let profits = [];

    //store each value of the key in arry of objects
    data.forEach(product => {
        const profit = Object.values(product)[0];
        profits.push(profit);
    });    
    return profits;
}


function topProduct(data){
    //return value based on the condition
    if (data.length === 0) {
        return 'empty array of product profit';
    } else if (data === ''){
        return 'insufficient information to process data';
    }else{
        let profits;
        profits = pushProfits(data);

        let topProfit = Math.max(...profits);
        const bond = [ -22, 35, -81, -1, -75 ];
        return data.findIndex(data => Object.values(data)[0] === topProfit)
        // return bond.findIndex(topProfit);
        // return topProfit;
    }
}


// topProduct(productProfitArray) // 35
console.log(topProduct(productProfitArray));