class heroi{
    constructor(nome, idade, tipoIndex){
        this.nome = nome;
        this.idade = idade;
        const tipos = ["guerreiro(a)", "mago(a)", "monge(ja)", "ninja"];
        if (tipoIndex >- 0 && tipoIndex < tipos.length){
            this.tipo = tipos[tipoIndex];
            switch (this.tipo){
                case "guerreiro(a)":
                    this.ataque = "o(a) guerreiro(a) atacou usando espada";
                    break;
                case "mago(a)":
                    this.ataque = "o(a) mago(a) atacou usando magia";
                    break;
                case "monge(ja)":
                    this.ataque = "o(a) monge(ja) atacou usando artes marciais";
                    break;
                case "ninja":
                    this.ataque = "o(a) ninja atacou usando shuriken";
                    break;
            }
        }
    }
}

var heroi0 = new heroi("Júlia", 22, 0)
var heroi1 = new heroi("Pedro", 18, 1)
var heroi2 = new heroi("Ana", 25, 2)
var heroi3 = new heroi("Carlos", 27, 3)

console.log(heroi0)
console.log(heroi1)
console.log(heroi2)
console.log(heroi3)
    
