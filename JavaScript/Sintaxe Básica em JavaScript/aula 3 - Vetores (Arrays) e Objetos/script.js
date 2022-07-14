/*Vetores (Arrays) e Objetos

Criar uma nova pasta chamada aula - 3 Vetores (Arrays) e Objetos e dentro dessa pasta, um documento html para podemos anotar a aula.
No documento html, vamos criar um arquivo JS <script src="script.js"></script> no final de body. 
Esse documento que acabamos de criar será o espaço onde vamos anotar o conteúdo.*/

/* como declarar um array
let array = ['string', 1, true];
console.log(array);*/

//o array pode declarar vários tipos de dados (como acabamos de ver acima), inclusive, outros arrays!
let array = ['string', 1, true,  ['array1'], ['array2'], ['array3'], ['array3']]
console.log(array[2]); //vai me retornar o valor booleano true

/*Manipulando Arrays

Ao ser declarado, o Array trás consigo uma série de métodos para manipulá-lo.

forEach() - itera um array;
push() - adiciona o item no final do array;
pop() - remove o item no final do array;
shift() - remove o item no início do array;
unshift() - adiciona o item no início do array;
indexOf() - retorna o índice de um valor;
splice() - remove ou substitui um item pelo índice;
slice() - retorna uma parte de um array existente;*/

// forEach
array.forEach(function(item, index){console.log(item, index)}); //vai exibir o índice e o dado que está nesse índice

// push
array.push('novo item');
console.log(array);

// pop
array.pop();
console.log(array);

// shift
array.shift();
console.log(array);

// unshift
array.unshift('novo item no início');
console.log(array);

// indexOf
console.log(array.indexOf(true)); //true é o nome do dado, que pertence ao índice 2

// splice
array.splice(0, 3); //ao informar o início e término do índice, todos os dados que estiverem neles serão apagados. Nesse exemplo, os dados 'novo item no início', 1 e true serão apagados da lista.
console.log(array);

// slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

/*O que são objetos?
O objeto possui características e atributos, e são sempre colocados entre chaves { }. */

let object = {propriedade: 'string', number: '1', boolean: 'true', array: ['array'], objectInterno {objectInterno: 'objeto interno'}};
console.log(object.boolean);

var string = object.string;
console.log(string);

//Desestruturação

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
