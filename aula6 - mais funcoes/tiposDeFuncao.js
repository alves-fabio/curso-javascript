//tipos de funcao

//declarativas
function funcao(){
    console.log('Sou uma mensagem de uma funcao declarativa');
}

funcao();

//expressão de funcao
//com nomeacao
var funcao = function (){
    console.log('Sou uma mensagem de funcao de expressao');
}

funcao();

//arrow function
var arrowFunction = () => {
    console.log('Sou uma arrow function!');
}

arrowFunction();