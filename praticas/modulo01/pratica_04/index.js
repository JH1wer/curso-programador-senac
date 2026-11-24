
let products = [
    "Caderno",
    "Lapis",
    "Regua",
    "Cola"
];
console.log("primeiro item", products[0])
products[1] = "Caneta";
products = [...products, "Borracha", "Tesoura"];
products.shift();
products.pop();

let reguaIndex = products.indexOf("Regua")
products.splice(reguaIndex, 1);

console.log("lista manipulada final:", products)

//========================================================================================================================

let prices = [
    12,
    8,
    20,
    10
];

let total = 0;
let media = 0; 
let menor;
let maior;

/**
 * juntando e ordenando as partes dos arrays
 * 
 * @param {Number []} left 
 * @param {Number []} right 
 * @return {Number []}
 */
var merge = function(left, right) {
    const ret = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            ret.push( left.shift() )
        } else {
            ret.push (right.shift())
        }
    }
    return [...ret, ...left, ...right]
}

/**
 * algoritmo de mergeSort
 * 
 * @param {Number []} arr 
 * @returns {Number []}
 */
var mergeSort = function(arr) {
    if (arr.length <= 1 ) {
        return arr;
    }
    let mid = Math.floor( arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

const pricesSorted = mergeSort(prices);

for (let i = 0; i < pricesSorted.length; i++) {
    total += pricesSorted[i];
}

media = total / pricesSorted.length;
menor = pricesSorted[0];
maior = pricesSorted[pricesSorted.length - 1];

console.log("total", total, "media", media, "menor", menor, "maior", maior);