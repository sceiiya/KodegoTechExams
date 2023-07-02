
// convert the roman letters into number value
const numericize = (roman) => {
    roman = roman.toUpperCase();
    let numericized = 0;

    switch (roman) {
        case 'M':
            numericized = 1000;
            break;
        case 'D':
            numericized = 500;
            break;
        case 'C':
            numericized = 100;
            break;
        case 'L':
            numericized = 50;
            break;
        case 'X':
            numericized = 10;
            break;
        case 'V':
            numericized = 5;
            break;
        case 'I':
            numericized = 1;
            break;
        default:
            return undefined;
            break;
    }

    return numericized;
}

function convertYear(year){
    if(year === NaN){
        return 'undefined';
    }

    let numerical = 0;

    for (let i = 0; i < year.length; i++) {
        let roman = numericize(year[i]);
        if (roman == undefined){
            return 'Invalid';
        }
        numerical += roman;
    }
    return numerical;

}

function longestDynasty(data){
    if (data.length === 0) {
        return "No Data";
    }
    const allYears = [];
    const reignYears = [];
    const allDynasty = [];

    // identify element and store in an array
    data.forEach((datayear, i) => {
        const dynasty = Object.keys(datayear)[0];
        allDynasty.push(dynasty)

        const roman = Object.values(datayear)[0];
        let year = convertYear(roman);
        allYears.push(year);
        let reign = 0;
        if(i == 0){
            reign = year - 1000;
        }else{
            reign = year - allYears[i- 1]
        }
        reignYears.push(reign)
    });

    const longest = Math.max(...reignYears);
    const indexOfLongest = reignYears.indexOf(longest);
    const longestDynasty = allDynasty[indexOfLongest];

    return longestDynasty;
    // return reignYears;
}

//initialize data
const dynastyReign = [
    {"San Dynasty": "MXLI"},
    {"Viloria Dynasty": "MCCCIIII"},
    {"Tan Dynasty": "MCCCXCVIII"},
    {"Bon Dynasty": "MCDXLV"},
    {"Maiko Dynasty": "MDCLXIV"},
    {"Paul Dynasty": "MCMXLIX"},
    {"Andre Dynasty": "MMMXICX"},
];

// years converted from roman values
// San Dynasty: 1061
// Viloria Dynasty: 1304
// Tan Dynasty: 1418
// Bon Dynasty: 1665
// Maiko Dynasty: 1666
// Paul Dynasty: 2171
// Andre Dynasty: 3121

//reign years converted values
// San Dynasty: 61
// Viloria Dynasty: 243
// Tan Dynasty: 114
// Bon Dynasty: 247
// Maiko Dynasty: 1
// Paul Dynasty: 505
// Andre Dynasty: 950
  
// longestDynasty(dynastyReign);
console.log(longestDynasty(dynastyReign)); // Andre Dynasty = 950 years
// console.log(convertYear('Mdasfe'))