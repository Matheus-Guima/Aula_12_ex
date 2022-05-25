function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente, animal!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca_H.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem_H.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Adulto_H.png')
            } else {
                //idoso
                img.setAttribute('src', 'Coroa.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca_M.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem_M.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Adulto_M.png')
            } else {
                //idoso
                img.setAttribute('src', 'Velhinha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }
}