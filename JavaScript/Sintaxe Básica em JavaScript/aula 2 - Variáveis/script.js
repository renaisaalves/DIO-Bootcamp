// Tipos primitivos

// Boolean

var VorF = false;
console.log(typeof(VorF));

var NumQualquer = 1;
console.log(NumQualquer);

// String

var nome = 'Renaisa';

// Function
var funcao = function() {}
console.log(typeof(funcao)); 

/*Para visualizar todos os resultados (prints/console.log), abra o navegador do documento em que estão esses códigos, com o botão direito do mouse clique em "Inspecionar" e "Console". 

Existem 3 modos de declarar as variáveis em JS:

var - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null (nulo);
let - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
const - escopo local de bloco, somente leitura, o valor inicial será obrigatório e não pode ser alterado.
*/

var variavel = 'alfabeto';
variavel = 'abecedário';
console.log(variavel);

let numero = '10';
numero = '6';
console.log(numero);

/*Escopo

O Escopo em JS define a limitação e visibilidade de um bloco de código.

Escopo global: quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código. 
Escopo local: quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não. No Python, uma variável declarada dentro de um bloco só funciona no bloco (porque é local). 
*/

var escopoGlobal = 'global';
console.log(escopoGlobal);

// O correto é:

function escopoLocal() {
	let escopoLocalInterno = 'local';
console.log(escopoLocalInterno); 
}
escopoLocal();

/*Regras de Uso de Variáveis

Iniciar com letras ou então com os caracteres _ ou $; 
Não iniciar com número (ex: 1nome);
Não usar palavras reservadas (ex function);
Não usar espaços (o correto é separar as palavras destacando por maiúsculo, ex: nomeCompleto ou nome_completo);
Declarar variáveis no topo do bloco de código.

Diferenças entre atribuição, comparação e comparação idêntica
O sinal de igualdade = significa "atribuição" ou "receber".
O sinal de comparação == vai comparar dois valores: 
	var comparacao = '0' == 0;
	console.log(comparacao); //nesse exemplo, vai me retornar verdadeiro
O sinal de === significa "comparação idêntica". Isso significa que esse sinal vai comparar se ambos os valores são idênticos, ou seja, do mesmo tipo. 
 */
	var comparacaoIdentica = '0' === 0;
	console.log(comparacaoIdentica); //nesse exemplo, vai me retornar falso

/*Operadores Relacionais, Aritméticos e Lógicos

Nos operadores aritméticos, é igual o Python: adição (+), subtração (-), divisão (/), potenciação (**), resto (%)... exemplo: */

/*Operadores Relacionais, Aritméticos e Lógicos

Nos operadores aritméticos, é igual o Python: adição (+), subtração (-), divisão (/), potenciação (**), resto (%)... exemplo:*/

var adicao = 2 + 3;
console.log(adicao)

//Alguns operadores relacionais também são iguais ao Python:

var relacional = 5 > 2;
console.log(relacional);

var relacional_igual = 5 >= 2;
console.log(relacional_igual);

/*Já os operadores lógicos se diferenciam bastante. Vejam como eles são:

&& = and (consideram que todos os valores sejam true);
|| = or (consideram que pelo menos um dos valores seja true);
! = not (inverte os valores true para false e false para true).*/

var and = true && true;
console.log(and)

var or = true || false;
console.log(or)

var not = ! true;
console.log(not)

