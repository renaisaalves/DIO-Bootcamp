// -> Faz um comentário "simples" em JavaScript. É similar ao # do Python.
/* -> Serve para fazer comentários maiores, com inúmeras linhas. É similar ao ''' ''' do Python. */

// DIFERENÇA ENTRE VARIÁVEL E CONSTANTE
// Uma variável é um valorque pode ser alterado com o tempo.
// Já uma constante é um valor que não pode ser alterado, isto é, permanece o mesmo durante todo o tempo (ou execução do programa).

// Vamos conhecer a sintaxe simples do JavaScript usando dois exemplos de variável e constante:

var desconto = 0.2;
const PRECO = 2;

desconto = PRECO - desconto; // A variável desconto vai sofrer alteração do seu valor inicial.
PRECO = PRECO - desconto; // Isso está errado, pois a constante PRECO não pode ter o seu valor alterado.

var total = PRECO - desconto;

