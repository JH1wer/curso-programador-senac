// AINDA DE EXPLICAÇÂO CONVICENTE
// class Window {
//     #title;
//     constructor(title, width, height) {
//         this.#title = title;
//         this.width = width;
//         this.height = height;
//     }
//     /**
//      * Draw window into terminal
//      */
//     draw() {
//         console.log(`${this.height} x ${this.width}`)
//     }
// }
// var WindowObject = function(tittle, width, height) {
//     return {
//         tittle: tittle,
//         width: width,
//         height: height,
//         /**
//          * Draw window into terminal
//          */
//         draw: function() {
//             console.log(`${this.height} x ${this.width}`)
//         }
//     }
// }
// const gameTittle = "Dungeons"
// const gameWindowWidth = 100
// const gameWindowHeight = 100
// var windowInstance = new Window(gameTittle, gameWindowWidth, gameWindowHeight)
// var windowObjectInstance = WindowObject(gameTittle, gameWindowWidth, gameWindowHeight)
// windowInstance.draw()
// windowInstance.draw()

class Edificio {
    /**
     * edificio
     * 
     * @param {String} nome 
     * @param {String} tipo
     * @param {Number} largura
     * @param {Number} altura
     * @param {Number} comprimento
     */
    constructor(nome, tipo, largura, altura, comprimento) {
        this.nome = nome;
        this.tipo = tipo;
        this.largura = largura;
        this.altura = altura;
        this.comprimento = comprimento;
    }

    getNome() { return this.nome; }
    getTipo() { return this.tipo; }
    getLargura() { return this.largura; }
    getAltura() { return this.altura; }
    getComprimento() { return this.comprimento; }
}

class Escola extends Edificio {
    constructor() { 
        super("Don antonio bastista de fragoso", "Escola", 100, 100, 100);
    }

    getAltura() {
        return "Nao posso informar a altura";
    }
}

var escola = new Escola();
var escolaAltura = escola.getAltura();

console.log(escolaAltura);