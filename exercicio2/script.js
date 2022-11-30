
// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```

let num1 = prompt("Me diga um numero aleatorio entre 1 e 20")
console.log (num1)
let num2 = prompt ("me diga mais um numero aleatorio entre 1 e 20")
console.log(num2)

console.log ("o primeiro numero é maior que o segundo?",num1<num2)
console.log("o primeiro numero é igual ao segundo?", num1 == num2)
console.log("o primeiro numero é divisivel pelo segundo",num1 /= num2)
console.log("o segundo numero é divisivel pelo primeiro?", num2 /= num1 )