function calcular(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('txttab')
    if (num.value == 0) {
        window.alert('Bota um número ae amigo!')      
    } else {
        let numero = Number(num.value)
        tab.innerHTML= ''
        for(n = 1; n <= 10; n++){
            let item= document.createElement('option') 
            item.text = `${numero} x ${n} = ${numero*n}`
            item.value = `tab${n}`
            tab.appendChild(item)
        }
    }
}