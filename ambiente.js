let num = [5, 8, 2, 9, 3]
/*num[5] = 6 // Coloca na posição 5 o número 6
 //ou 
num.push(7) //Coloca na última posição, sem precisar se preocupar qual é 

num.lenght //Saber o tamanho, saber quantos elementos tem no array

num.sort() //bota os numeros e coloca em ordem crescente*/
num.push(1) 
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    // Se não existir o valor, irá dar -1
    console.log('O valor não foi encontrado!') 
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
