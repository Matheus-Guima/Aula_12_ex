function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `São ${hora} horas, Sempai!`
    if(hora > 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#d5c3ad' 
    }else if(hora <= 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fae210'
    }else{
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#3475af'
    }
}