let produtos = ["Teclado", "Outro Produto", "Teclado"]

let tecladoDeTrasParaFrente = produtos.lastIndexOf("Teclado")
let tecladoLinear = produtos.indexOf("Teclado")

console.log("linear frente", tecladoLinear, "linar reverso", tecladoDeTrasParaFrente)

let a = [2,1,4,3];
let soma = 0;
let maior;
let menor;

// ... spread
maior = Math.max(...a)
menor = Math.min(...a)

a.sort((a, b) => a - b)
a.forEach((e) => soma += e)

console.log (soma, a)