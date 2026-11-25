const ESTOQUE = [
    {
        nome: "Monitor",
        quantidade: 4
    },
    {
        nome: "Mouse",
        quantidade: 12
    },
    {
        nome: "Teclado",
        quantidade: 7
    },
    {
        nome: "Webcam",
        quantidade: 2
    }
];

/**
 * verifica se existe um elemento pelo nome
 * 
 * @param {String} name 
 * @return
 */
var includes = function(name) {
    return ESTOQUE.some((e) => e.nome === name)
}

/**
 * Registra um novo elemento no estoque,
 * isso nao funcionara para repor itens
 * 
 * @param {String} name 
 * @param {Number} quantidade
 */
var registrar = function(name, quantidade) {
    let exists;
    let body;

    if (!name || !quantidade) {
        console.log("valores inválidos");
        return;
    }

    exists = includes(name);
    if (exists) {
        console.log("Esse item ja existe e não permitimos duplicar ou colocar mais itens em estoque .");
        return;
    }

    body = {
        name: name,
        quantidade: quantidade
    };

    ESTOQUE.push(body);
}

/**
 * modifica a quantidade do produto caso entre
 * 
 * @param {String} name 
 * @param {Number} quantity 
 * @return {Boolean}
 */
var changeQuantity = function(name, quantity) {
    for (let i = 0; i < ESTOQUE.length; i++) {
        if (name === ESTOQUE[i].nome) {
            ESTOQUE[i].quantidade = quantity;
            return true
        }
    }
    return false
}

/**
 * Retorna o indenx do item caso seja encontrado
 * 
 * @param {String} name 
 */
var indexOf = function(name) {
    for (let i = 0; i < ESTOQUE.length; i++) {
        let element = ESTOQUE[i];
        if ( element.nome === name ) {
            return i;
        }
    }
    return -1;
}

console.log("[!] Adicionando Mouse para o Estoque:");
registrar("Mouse", 2);

console.log("[!] ALterando a quantidade do Teclado para 10:");
if(changeQuantity("Teclado", 10)) {
    console.log("Quantidade do teclado foi alterada para 10");
};

console.log("[+] removendo o primeiro e o ultimo produto:");
let mockEstoque = [...ESTOQUE];
let lastElementRemoved = mockEstoque.pop();
let firstElementRemoved = mockEstoque.shift();
mockEstoque = [firstElementRemoved, lastElementRemoved];
console.table(mockEstoque);

mockEstoque = [...ESTOQUE];
let targetIndex;
for (let i = 0; i < mockEstoque.length; i++) {
    if (mockEstoque[i].nome === "Webcam") {
        targetIndex = i;
    }
}

if (targetIndex !== undefined) {
    mockEstoque.splice(targetIndex, 1);
}
console.log("[+] Removendo Webcam do estoque usando splice:")
console.table(mockEstoque);

mockEstoque.pop();

mockEstoque.push({
    nome: "Teclado",
    quantidade: 4
})

let reposCount  = 0;
for (let i = 0; i < mockEstoque.length; i++) {
    let sort = (mockEstoque[i].quantidade < 5) ? "repor"
        : (mockEstoque[i].quantidade < 10) ? "atencao"
        : "normal";

    if (sort === "repor") {
        reposCount++;
    }

    console.log(`produto> ${mockEstoque[i].nome}: ${sort}`);
}
console.log(`${reposCount} produtos precisa de reposição.`)

let mockEstoqueQuantity = [];
mockEstoque.forEach(e => mockEstoqueQuantity.push(e.quantidade));

console.log("============== CALCULANDO QUANTIDADE ===============");
let total = 0;
let media;
let maior;
let menor; 

mockEstoqueQuantity.forEach(e => total += e);

media = Math.floor(total / mockEstoqueQuantity.length);

maior = Math.max (...mockEstoqueQuantity)

menor = Math.min (...mockEstoqueQuantity)

console.log(`total: ${total}\nmedia: ${media}\nmaior: ${maior}\nmenor: ${menor}`)

// ==================================== ORDENAÇÂO ===========================
let mockEstoqueAlfaNames = [];
mockEstoque.forEach(e => mockEstoqueAlfaNames.push(e.nome))
mockEstoqueAlfaNames.sort()

console.log("[+] Lista dos produtos organizados:")
console.table(mockEstoqueAlfaNames)