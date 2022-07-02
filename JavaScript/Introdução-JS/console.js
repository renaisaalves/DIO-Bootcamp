/* CONSOLE NUMA PÁGINA DA WEB

Quem disse que o JavaScript só pode ser usado em uma IDE? JavaScript é a linguagem do navegador, portanto, ela pode ser usada diretamente no navegador! 

Para usar a linguagem JavaScript no navegador (vou usar o Google Chrome), basta clicar em "Inspecionar" e depois em "Console". Dessa forma, você pode interagir com a linguagem diretamente no browser, declarando variáveis, constantes, funções, enfim... tudo o que quiser. E o melhor de tudo é que a interpretação ocorre na hora, já que os navegadores são fluentes nessa linguagem.

Porém, vale ressaltar que o JavaScript só pode ser usado dessa maneira no lado Client-Side, ou seja, no lado do Front. Para conseguir usar o JavaScript no lado do Servidor, você precisa baixar uma ferramenta chamada node.JS, que vai fazar o JavaScript funcionar também no lado BackEnd (no terminal).

Diferente do Python, o JavaScript não exibe suas impressões diretamente no terminal (na própria IDE), então você precisa seguir alguns passos para que essa exibição seja possível. 

Por exemplo: para imprimir um "Hello World" no terminal, precisamos usar o node.js (que foi a ferramenta que baixamos). Só que antes disso, precisamos relembrar alguns comandos do Git para localizar o arquivo que estamos usando (no caso, o nosso arquivo se chama console.js).

Alguns comandos do Git:
ls = localização atual;
cd = navegar pela pasta desejada;
node = executar o JavaScript no terminal. 

ALGORITMO PARA IMPRIMIR "HELLO WORLD!" EM JAVASCRIPT NO TERMINAL DO VSCODE
1º Clicando em "Terminal", vamos abrir o terminal. 
2º Vamos localizar onde está o nosso arquivo contendo console.log("Hello World!"); 
3º ls exibe onde estamos localizados. 
4º cd faz caminhar pela pesta desejada, por exemplo: cd JavaScript vai me fazer ir para a pasta JavaScript
5º cd Introdução-JS vai me fazer caminhar para a pasta Introdução-JS
6º node funcoes.js vai executar tudo o que foi escrito em JavaScript, ou seja, vai mostrar no terminal o que foi feito nessa linguagem de programação

*/

console.log("Hello World!");


