
const productProfitArray = [
    {"Product A": -75},
    {"Product B": -70},
    {"Product C": 98},
    {"Product D": 5},
    {"Product E": -29},
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
        // const bond = [ -22, 35, -81, -1, -75 ];
        return data.findIndex(data => Object.values(data)[0] === topProfit)
        // return bond.findIndex(topProfit);
        // return topProfit;
    }
}


// topProduct(productProfitArray) // 35
console.log(topProduct(productProfitArray));


// snake_case
// camelCase
// PascalCase
// kebab-case

// implicit vs explpicit
// conversion is implicit
// coercion is explicit
