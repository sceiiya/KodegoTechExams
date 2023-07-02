
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

function pushProducts(data){
    //instantiate profit variable
    let productsName = [];

    //store each value of the key in arry of objects
    data.forEach(product => {
        const name = Object.keys(product)[0];
        productsName.push(name);
    });    
    return productsName;
}

function topProduct(data){
    //return value based on the condition
    if (data.length === 0) {
        return 'No Data';
    } else if (data === ''){
        return 'No Data';
    }else{
        let profits = pushProfits(data);
        let names = pushProducts(data);

        let topProfit = Math.max(...profits);
        // const bond = [ -22, 35, -81, -1, -75 ];
        
        let pos = data.findIndex(data => Object.values(data)[0] === topProfit);
        return names[pos];
        // return bond.findIndex(topProfit);
        // return topProfit;
    }
}

function bottomProduct(data){
    if (data.length === 0) {
        return 'No Data';
    } else if (data === ''){
        return 'No Data';
    }else{
        let profits = pushProfits(data);
        let names = pushProducts(data);

        let bottomProfit = Math.min(...profits);
        
        let pos = data.findIndex(data => Object.values(data)[0] === bottomProfit    );
        return names[pos];
    }
}



// topProduct(productProfitArray) // 35
console.log(topProduct(productProfitArray)); //Product B
console.log(bottomProduct(productProfitArray)); //Product C