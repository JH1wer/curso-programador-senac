import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function input(text) {
  return new Promise((resolve) => rl.question(text, resolve));
}

const DATA = []

function registerNewProduct(name, price, quantity) {
  const newProduct = {
    name: name,
    price: price,
    quantity: quantity,
    id: DATA.length
  }

  DATA.push(newProduct);

  console.log('Um novo produto foi adicionado a loja!');
}

async function registerNewProductInput() {
  const name = await input('Digite o nome do produto: ');
  const price = Number(await input("Digite o preco do produto: "));
  let quantity = Number(await input("Quantos produtos tem em estoque: "));

  quantity = (quantity < 0 || isNaN(quantity) ) ? 1 : quantity;

  registerNewProduct(name, price, quantity);
}

function comprar(productName, quantity) {
  let isValid = false;
  let productPriceInformation;
  let productQuantityInformation;
  let discountToPayAll;
  let totalProductPrice;

  DATA.forEach(element => {
    if ( productName == element.name ) {
      isValid = true;

      productPriceInformation = element.price;
      productQuantityInformation = element.quantity;
    }
  })

  if (!isValid || productQuantityInformation == 0) {
    console.log("O item nao existe ou esta fora de estoque.");
    return;
  }

  // se a quantidade de item que o cliente quiser passar do estoque, entao ele leva tudo (productQuantityInformation)
  quantity = (quantity >= productQuantityInformation) ? productQuantityInformation : quantity;

  discountToPayAll = (quantity == productQuantityInformation) ? 25 : 0;

  totalProductPrice = productPriceInformation * quantity;
  totalProductPrice -= totalProductPrice * discountToPayAll/100;

  for (let i = 0; i < DATA.length; i++) {
    let element = DATA[i];
    if ( element.name == productName ) {
      DATA[i].quantity = (quantity >= productQuantityInformation) ? 0 : productQuantityInformation - quantity;
    }
  }

  const boletim = {
    status: "compra efetuada com sucesso!",
    price: `R$ ${totalProductPrice.toFixed(2)}`,
    discount: (discountToPayAll > 0) ? `${discountToPayAll}%` : 'nenhum',
  }

  console.table(boletim);
  console.log("Compra o que quiser!")
}

async function comprarInput() {
  const name = await input("Digite o nome do produto: ");
  const quantity = Number(await input("Digite a quantidade: "));

  // if ( isNaN(name) || isNaN(quantity) ) {
  //   console.log("valores invalido");
  //   return;
  // }

  comprar(name, quantity);
}

function showLojaMenu() {
  console.log("Lista de todos os nossos produtos")
  console.table(DATA.map(object => object.name));
}

function showMenu() {
  console.log("1: comprar")
  console.log("2: repositor")
  console.log('3: sair')
}

(async () => {
  registerNewProduct("lapis", 4, 300);
  registerNewProduct("quemax", 50, 10);
 
  console.clear();
  
  let windowLooped = true;

  while (windowLooped) {
    showMenu();
    let resposta = await input("selecione uma opcao: ");

    switch (resposta) {
      case '1': // comprar
        showLojaMenu();
        await comprarInput();
        break;
      case '2': // repositor
        await registerNewProductInput();       
        break;
      case '3': // sair
        console.log("saindo..");
        rl.close()
        windowLooped = false;
        break;
      default:
        console.log('essa opcao nao existe');
        break; 
    }
  }
})();