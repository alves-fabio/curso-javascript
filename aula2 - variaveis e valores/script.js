// tipos primitivos

// boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF));

// number
var numeroQualquer  = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer))

// string
var nome = 'fabio'
console.log(nome);
console.log(typeof(nome))

// function
var funcao = function(){}
console.log(typeof(funcao))

//como declarar
var variavel = 'fabio';
variavel = 'alves';
console.log(variavel);

let variavel2 = 'fabio';
console.log(variavel2);

const constante = 'santos'
console.log(constante);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalinterno = 'local';
    console.log(escopoLocalinterno)
}

escopoLocal();

// atribuição
var atribuicao = 'fabioAlves';
console.log(atribuicao);

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

// comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 2 - 1;
console.log(subtracao)

// multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao)

// maior que
var maiorQue =  5 > 2;
console.log(maiorQue);

// menor que
var menorQue =  5 < 2;
console.log(menorQue);

// maior ou iqual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou iqual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// e
var e = true && false;
console.log(e);

// ou
var ou = true || false;
console.log(ou);

// não
var nao = !true;
console.log(nao);
