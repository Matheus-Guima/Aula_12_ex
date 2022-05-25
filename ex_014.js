'use strict'
var agora = new Date() 
var hora = agora.getHours()
console.log(`São ${hora} horas`)
if(hora < 12){
    console.log('Tenha um bom Dia!')
}else if(hora <= 18){
    console.log('Tenha uma boa Tarde!')
}else{
    console.log('Tenha uma boa Noite!')
}