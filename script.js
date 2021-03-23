function calcular(tipo, valor){
    // console.log(tipo, valor);
    if(tipo === 'acao'){

        if(valor === 'c'){
            document.getElementById('resultado').value = '';
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value +=valor;
        }

        if(valor === '='){
            var valorcampo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = valorcampo;
            // console.log(eval(valorcampo));
        }

    }else if(tipo === 'valor'){
        var valorcampo = document.getElementById('resultado').value;
        document.getElementById('resultado').value = valorcampo + valor;
    }
}