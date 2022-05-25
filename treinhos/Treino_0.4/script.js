function contar(){
    let pass = document.getElementById('txtp')
    let fm = document.getElementById('txtf')
    let qt = document.getElementById('txtq')
    let res = document.getElementById('res')
    if (pass.value.lenght == 0 || fm.value.lenght == 0 || qt.value.lenght == 0) {
        res.innerHTML = 'Impossível de Calcular'
    }else{
        res.innerHTML = 'Contando... <br>'
        let passo = Number(pass.value)
        let fim = Number(fm.value)
        let quantidade = Number(qt.value)
        if(passo <= 0){
            window.alert('Passo inválido, considere passo 1')
            passo = 1
        }
        if (passo < fim) {
            for(let c = passo; c <= fim; c += quantidade){
                res.innerHTML += `${c}  \u{2620}`
            }   
        }else{
            for(let c = passo; c >= fim; c -= quantidade){
                res.innerHTML += `${c}  \u{2620}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }

}