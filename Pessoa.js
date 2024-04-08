class Pessoa {
    constructor (nome, idade) {
        this.nome=nome;
        this.idade = idade;
    }
    saudaçao(){
        console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    }
}
    verificarIdadedias(idade) {
        if (idade > 18){
            console.log("é maior de idade");
        }else{ 
        console.log("é menor idade");
        }

        }
       verificarIdadedias(){
        console.log(this.idade * 365);
       }
        verificadoso(idadei){
            if(idade = 60){
                console. log (é idoso);
            }else{
                console.log("não é idoso");

            }
      }
  } 