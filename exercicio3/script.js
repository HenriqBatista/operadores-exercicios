// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

// const operacao1 = 5 > 20 && 5 > 2
// console.log(operacao1)

// const operacao2 = 5 == 5 || 5 === "5"
// console.log(operacao2)

// const operacao3 = !(20>50)
// console.log(operacao3)

// const operacao4 = !(21>50 ||50>60 )
// console.log(operacao4)


// ### Parte 2

// Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

// Calcule:

// 1) O salário fixo mais o auxílio creche

// 2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)


let sal = 2000
let aux = 45.50*2
let comissão = 0.1
let inss = (sal*0.05)

let jan = sal + 5784.50*comissão
let fev = sal + 3418.41*comissão
let mar = sal + 4124.10*comissão
let abr = sal + 1874.00*comissão
let mai = sal + 7000.00*comissão
let jun = sal + 9450.00*comissão


/*a */console.log (sal + aux) // salario + aux

/*b */console.log (5784.50*comissão) // comissao janeiro

/*c */console.log ((sal+jan)*0.05) // desconto inss janeiro

/*d */
console.log (jan + aux - (jan*0.05)) //salario janeiro
console.log (fev + aux - (fev*0.05)) // salario fevereiro
console.log (mar + aux - (mar*0.05)) // salario marco
console.log (abr + aux - (abr*0.05)) // salario abril
console.log (mai + aux - (mai*0.05)) // salario maio
console.log (jun + aux - (jun*0.05)) // salario junho

/*e */ console.log((jan + aux - (jan*0.05))+ (fev + aux - (fev*0.05))+ (mar + aux - (mar*0.05)) + (abr + aux - (abr*0.05)) + (mai + aux - (mai*0.05)) + (jun + aux - (jun*0.05)))
