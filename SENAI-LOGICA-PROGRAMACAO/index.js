// Constante para uma lista de peças
const listaDePecas = ['peca de teste', 'A', 'B', 'peca C', 'peca D']
console.log (listaDePecas)


// Condição parar checar se a lista é válida.
if(listaDePecas.length <=10) {
    console.log('Tamanho de lista válido, peças podem ser cadastradas.')
}else {
    console.log('Tamanho invalido, peças não podem ser cadastradas')
}

console.log('Checagem de caracteres das peças:')

//Utilizamos uma estrutura de repetição (for) para fazer a checagem peça por peça.
for(let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if(pecaAtual.length < 3 ) {
        console.log(pecaAtual + ': Peça inválida, não possui o número mínimo requisitado (3 caracteres)')
    }else{
        console.log(pecaAtual + ': Peça cadastrada.')
    }
}
//o comando if é o comando (se) eo else (senão)


console.log('Peso da peça:')

const pesoDaPecaEmGramas = 50;

if(pesoDaPecaEmGramas >= 100) {
    console.log('Peso suficiente.')
}else {
    console.log('Valor insuficiente')
}