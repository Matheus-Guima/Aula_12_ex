/*function parinp(n){
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
 console.log(parinp(11))*/

 function fatorial (n){
     if(n == 1){
         return 1
     }else{
         return n * fatorial(n - 1)
     }
 }

 console.log(fatorial(5))