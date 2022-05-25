function clicar(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[Erro] Colaca um número ae amigo!')
    }else{
        //Respota com:
            /*numero = Number(num.value)
            let c = 1
            tab.innerHTML = '' 
            while (c <= 10){
                let item = document.createElement('option')
                item.text = `${numero} x ${c} = ${numero*c}`
                tab.appendChild(item)
                c++
        }*/
        //Tentativa de Resposta com For
        numero = Number(num.value)
        tab.innerHTML = ''
        for(c =1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }       
    }
}