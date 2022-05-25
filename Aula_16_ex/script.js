let num = document.getElementById('txtnum')
let tab = document.getElementById('txttab')
let res = document.getElementById('res')
let valores = []


function isNumero(n){
    return (Number(n) >= 1 && Number(n) <= 100)
    
}

function inLista(n, l){
    return(l.indexOf(Number(n)) != -1) 
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.lenght == 0) {
        alert('Adicione valores antes de finalizar')       
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        /*valores.forEach(
            (elemento) =>{
                soma += elemento 
                if (elemento > maior){
                    maior = elemento
                }
            }
        )*/
        
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}