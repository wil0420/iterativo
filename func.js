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
        var numeroconsonantes = texto.match(/[^aeiou]/gi);
        if(numeroconsonantes != null){
            return numeroconsonantes.length
        }else{
            return false;
        }
}
}