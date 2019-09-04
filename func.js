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