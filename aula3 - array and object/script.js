// o que sao vetores ou arrays

// declarar um array
let arrayA = ['string', 1, true];
console.log(arrayA);

// pode guardar varios tipos de dados
let arrayB = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]; 
console.log(arrayB);
console.log(arrayB[0]);

// forEach
arrayB.forEach(function(item, index){console.log(item,index)});

arrayB.push('novo item');
console.log(arrayB);

arrayB.pop();
console.log(arrayB);

arrayB.shift();
console.log(arrayB);

arrayB.unshift('novo item no inicio');
console.log(arrayB);

console.log(arrayB.indexOf(true));

arrayB.splice(0,3);
console.log(arrayB);

let novoArray = arrayB.slice(0,1);
console.log(novoArray); 

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno:'objeto interno'}};
console.log(object);

console.log(object.boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
