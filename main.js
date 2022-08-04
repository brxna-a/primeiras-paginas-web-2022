const listaBotoesFavoritos = document.querySelectorAll('.favorito')
for (let contador = 0; contador < listaBotoesFavoritos.lenght; contador++){
    const botaoFavorito = listaBotoesFavoritos[contador]

    botaoFavorito.onclick = () => {
        if(botaoFavorito.classlist[1] === 'clicado'){
            botaoFavorito.classlist.remove('clicado');
        }
        else{
            botaoFavorito.classlist.add('clicado');
        }
    }
}