function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Number(fano.value) <= 0 || Number(fano.value) > ano){
        window.alert('[Erro] Tente novamente!')   
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <= 14){
                //Criança
                img.setAttribute('src', 'crianca_H.png')
            }else if (idade <= 26) {
                //Jovem
                img.setAttribute('src', 'Jovem_H.png')
            }else if (idade <= 49){
                //Adulto
                img.setAttribute('src', 'Adulto_H.png')
            }else{
                //Coroa
                img.setAttribute('src', 'Coroa.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 14){
                //Criança
                img.setAttribute('src', 'crianca_M.png')
            }else if (idade <= 26) {
                //Jovem
                img.setAttribute('src', 'Jovem_M.png')
            }else if (idade <= 49){
                //Adulto
                img.setAttribute('src', 'Adulto_M.png')
            }else{
                //Coroa
                img.setAttribute('src', 'Velhinha.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}