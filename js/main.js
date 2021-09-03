/*var nome = "Sandro Neri de Paiva";
var idade = 43;
var n1 = 5;
var n2 = 3;

//Arrays
var lista = ["maçã", "pêra", "laranja"];

//exibe array todo
console.log(lista);

//exibe posição 1
console.log(lista[1])

//inclui um intem no final do array
lista.push("uva")
console.log(lista);
console.log(lista[3])
//exclui um item do final do array
lista.pop()
console.log(lista);

//tamanhop da lista
console.log(lista.length);

lista.push("uva")
//inverte a ordem dos itens do array
console.log(lista.reverse());

//converte array em string
console.log(lista.toString());

//ao converter em string, cada caracter, incluindo as virgulas se tornam uma posição do indice, ou  seja, se depois da conversão o resultado for "uva,laranja,pêra,maçã", o indice 0 será "u", o 1 será "v", o 2 será "a" e o 3 será ",".
//O toString() acaba fazendo a função do join(), colocando automaticamente "," sem espaços entre os itens do array
console.log(lista.toString()[3]);

//O join() permite unir todos os itens de um array em uma unica string e podemos definir o que irá entre os itens. no exemplo coloquei " - "
console.log(lista.join(" - "));

console.log(lista);

lista.pop();

console.log(lista);

var frase = "Japão é o melhor time do mundo"

//alert("Bom vindo " + nome + " sua idade é: "+ idade + " anos");

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1*n2);

//dicionarios simples
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);

//dicionarios com mais itens
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "banana", cor:"amarela"}, {nome: "uva", cor:"verde"}]
console.log(frutas);
console.log(frutas[2]);

//estrutura if else

/*var idade = prompt("Qual é sua idade?");
if (idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

//estrutura while

/*var cont = 0;
while(cont<5){
    console.log(cont);
    cont ++;
};*/

//estrutura for

/*var cont;

for (cont = 0; cont <5; cont++){
    console.log(cont);
}

// trabalhando com datas

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getMinutes());*/

//usando funções
function clicou(){
//manipulando elementos da pagina, nesse caso será inserido em um elemento com ID agradecimento o texto "Obrigado por Clicar", udando o innrHTML.
document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
//alert("Obrigado por Clicar");
};

function redirecionar(){
    //window.open("https://paivasolucoes.com.br");
    window.location.href = "https://paivasolucoes.com.br";

}

function trocar(elemento){

    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){

    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
    elemento.innerHTML ="Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada")
}

function functionChange(elemento){
    console.log(elemento.value);

}