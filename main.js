$( "#enviar" ).click(function() {
        var texto = $('#texto').val();
        var resvocales = contarvocales(texto);
        var respalabras = contarpalabras(texto)
        var resconsonantes = contarconsonantes(texto)

        if(resvocales){
            $('.alert-light .vocales').text("Numero de vocales encontradas: " + resvocales)
        }else{
            $('.alert-light .vocales').text("Numero de vocales encontradas: " + 0)
        }
        if(respalabras){
            $('.alert-light .palabras').text("Numero de palabras encontradas: " + respalabras)
        }else{
            $('.alert-light .palabras').text("Numero de palabras encontradas: " + 0)
        }
        if(resconsonantes){
            $('.alert-light .consonantes').text("Numero de consonantes encontradas: " + resconsonantes)
        }else{
            $('.alert-light .consonantes').text("Numero de consonantes encontradas: " + 0)
        }
  });