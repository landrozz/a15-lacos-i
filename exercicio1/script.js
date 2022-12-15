let conta = 0
let pedirCoxinha = prompt("Deseja pedir mais uma coxinha? S/N")

while(pedirCoxinha === 'S'){
    conta += 2.5
    pedirCoxinha = prompt("Deseja pedir mais uma coxinha? S/N")

}

console.log(`Sua conta deu ${conta} reais`)