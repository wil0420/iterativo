function contarvocales(texto){
    var numeroVocales = texto.match(/[aeiou]/gi);
    if(numeroVocales != null){
        return numeroVocales.length
    }else{
        return false;
    }
    
}

function contarpalabras(texto){
    if(texto.length > 0){
        var numeropalabras = texto.split(" ")
        if(numeropalabras != null){
            return numeropalabras.length
        }else{
            return false;
        }
}
}

function contarconsonantes(texto){
    if(texto.length > 0){
        var numeroconsonantes = texto.match(/[^aeiou ]/gi);
        if(numeroconsonantes != null){
            return numeroconsonantes.length
        }else{
            return false;
        }
}
}

function contarpalabrasrep(texto){
    if(texto.length > 0){
        var palabras = texto.split(" ")
        console.log(palabras)
        var  count = {};
        palabras.forEach(function(i) {

             count[i] = (count[i]|| 0) + 1;          
            });
        console.log(count);
    }
}