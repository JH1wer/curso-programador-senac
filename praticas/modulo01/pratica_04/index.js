
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
let media; 
let menor;
let maior;

prices.forEach((e) => total += e)
media = total / prices.length;
menor = Math.min(...prices)
maior = Math.max(...prices)

console.log("total", total, "media", media, "menor", menor, "maior", maior);