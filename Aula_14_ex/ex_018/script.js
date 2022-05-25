function clicar(){
    /*window.alert("Teste")*/
    var ini = document.getElementById('txtinicio')
    var fm = document.getElementById('txtfim')
    var pass = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fm.value.lenght == 0 || pass.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando... <br> '
        let inicio = Number(ini.value)
        let fim = Number(fm.value)
        let passo = Number(pass.value)
        if(passo <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            passo = 1
        }
        if (inicio < fim) {
            //contagem crescente
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c}  \u{2620}`
        }    
        }else{
            //contagem regressiva
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c}  \u{2620}`
        }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}
