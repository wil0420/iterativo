//iteracion 1
function contarvocales(texto){
    var numeroVocales = texto.match(/[aeiou]/gi);
    if(numeroVocales != null){
        return numeroVocales.length
    }else{
        return false;
    }
    
}
//iteracion 2
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
//iteracion 3
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
//iteracion 4
function contarpalabrasrep(texto){
    if(texto.length > 0){
        var palabras = texto.split(" ")
        var  count = {};
        palabras.forEach(function(i) {
             count[i] = (count[i] || 0) + 1;          
            });

            var maximo = 0;
            var palabrarep = ""
            for(var palabra in count){
                if(maximo < count[palabra]){
                    maximo = count[palabra];
                    palabrarep = palabra
                }
            }
            var data = {
                "palabra" : palabrarep,
                "cantidad" : maximo
            }

            return data
    }else{
        return false
    }
}