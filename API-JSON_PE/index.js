const rateList = document.getElementById("exchange-rate-list");
const loader = document.getElementById("loader");
const notification = document.getElementById("notification");

let buildList = '';
let loading = false;

// console.log('cc' + fetch('https://api.coingecko.com/api/v3/exchange_rates'));
//fetch data
async function fetchData() {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/exchange_rates'
        );
        const data = await response.json();
        return data.rates;
        // console.log(data.rates);
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

fetchData()
.then((rates) => {
    // loader.style.display = 'flex';

    // <a class="value" href=${'https://www.coingecko.com/en/coins/' + coinName.toLowerCase()} target='__blank'>
    //     ${currency.unit}
    // </a>

    for (const key in rates) {
        // console.log(rates);
      if (rates.hasOwnProperty(key)) {
        const currency = rates[key];
        const coinName = currency.name;

        buildList += `<li class="item">
        <div class="value">
            ${currency.unit}
        </div>
        <div class="description">
            <p>Rate:  ${currency.value +' '+currency.unit} ~ 1 BTC</p>
            <p>Name:  ${coinName}</p>
            <p>Unit:  ${currency.unit}</p>
        </div>
        </li>`;
      }
    }
}).finally( () => {
    // console.log(buildList);
    setInterval(
        () => {
            loader.style.display = 'none';
            rateList.insertAdjacentHTML('beforeend', buildList);
        },3000
    )
})
.catch((error) => {
    loader.style.display = 'none';
    notification.innerHTML('Unable to present data');
  console.error("Error loading data:", error);
});


// {
//     "rates": {
//         "btc": {
//             "name": "Bitcoin",
//             "unit": "BTC",
//             "value": 1,
//             "type": "crypto"
//         },
//         "eth": {
//             "name": "Ether",
//             "unit": "ETH",
//             "value": 15.921,
//             "type": "crypto"
//         }
//     }
// }

// console.log(fetchData());