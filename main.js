const listaBotoesFavoritos = document.querySelectorAll('.favorito')
for (let contador = 0; contador < listaBotoesFavoritos.length; contador++){
    const botaoFavorito = listaBotoesFavoritos[contador]

    botaoFavorito.onclick = () => {
        if(botaoFavorito.classList[1] === 'clicado'){
            botaoFavorito.classList.remove('clicado');
        }
        else{
            botaoFavorito.classList.add('clicado');
        }
    }
}


    function selecionarCategoria(elementoSelecionado, categoriaSelecionada){              
        let botoesAntesSelecionados = document.querySelectorAll('.button-teste');
        
        for (let contador = 0; contador < botoesAntesSelecionados.length; contador++){
            const botao = botoesAntesSelecionados[contador];
            botao.classList.remove('button-teste');
        };
        
        elementoSelecionado.classList.add('button-teste');        

        const itensDaCategoria = document.querySelectorAll('[data-categoria]');
        itensDaCategoria.forEach( produto => {
            produto.classList.remove('hide');
            let categoriaDesteItem = produto.dataset.categoria;
            if(categoriaSelecionada != categoriaDesteItem && categoriaSelecionada != 'todos') {                
                produto.classList.add('hide');
            };            
        });

    }