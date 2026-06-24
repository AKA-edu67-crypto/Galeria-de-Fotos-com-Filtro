for (let i = 1; i <= 3; i++) {
    const botao = document.querySelector(`#album${i}`)
    if (botao) {
        botao.addEventListener("click", () => carregarAlbum(i))
    }
}

async function carregarAlbum(albumId) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
   let fotos = await response.json()
   
   let areaDasFotos = document.querySelector(".photos")
   areaDasFotos.innerHTML = ""

   for (let i in fotos) {
    areaDasFotos.innerHTML +=
        `<div>
            <h3>${fotos[i].title}</h3>
            <img src="${fotos[i].url}">
        </div>`

        console.log(fotos[i].thumbnailUrl)
   }
}

//https://via.placeholder.com/600/92c952
//fotos[i].thumbnailUrl

/* Fluxo do Projeto: 
Usuário clica em um botão
↓
O botão chama carregarAlbum(numero)
↓
albumId recebe esse número
↓
fetch faz uma requisição para a API
↓
A API devolve um array de fotos
↓
response.json() converte para objeto JavaScript
↓
Limpamos a área de fotos
↓
Percorremos o array com um loop
↓
Criamos HTML para cada foto
↓
Inserimos tudo na tela */