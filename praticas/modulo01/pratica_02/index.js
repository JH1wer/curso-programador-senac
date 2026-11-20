// index.js: Compras

import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function input(quest) {
    return new Promise((resolve) => rl.question(quest, resolve));
}

(async () => {
    const price = Number(await input("Preco unitario: "));
    const quantity = Number(await input("Quantidade: "));
    const fidelizado = await input("Cliente fidelizado: ");

    const isValid = Number.isFinite(price) && price > 0 && Number.isInteger(quantity) && quantity > 0;
    
    if (!isValid) {
        console.log(`Erro: informe preco positivo e quantidade inteira positiva`);
    } else {
        const subtotal = price * quantity;
        const temDesconto = quantity >= 5;
        const desconto = temDesconto ? subtotal * 0.10 : 0;
        const total = subtotal - desconto;
        const freteGratis = (total >= 100) ?? (fidelizado && total >= 60);
        
        console.log(`subtotal: R$ ${subtotal.toFixed(2)}`);
        console.log(`Desconto: R$ ${desconto}`);
        console.log(`total: R$ ${total.toFixed(2)}`);
        console.log(`Frete Gratis: R$ ${freteGratis ? 'sim' : 'nao'}`);
    }

    rl.close();
})();