const listaFavoritado = document.querySelectorAll('.like')
for (let contador = 0; contador < listaFavoritado.length; contador++){
    const heart = listaFavoritado[contador]

    heart.onclick = () => {
        if(heart.classList[1] === 'clicado'){
            heart.classList.remove('clicado');
        }
        else{
            heart.classList.add('clicado');
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