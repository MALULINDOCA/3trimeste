function criaCartao(categoria,pergunta,resposta){
   let container = document.getElementById('container')
   let article = document.createElement('article')
   article.className = 'cartao'

   article.innerHTML = `
   <div class="cartao-conteudo">

   <h3> ${categoria} </h3>

   <div class="cartao-conteudo-pergunta"
   <p> ${pergunta} </p>
   </div>

   <div class="cartao-conteudo-resposta">
   <p> ${resposta} </p>
   </div>
   </div>
   `
    container.appendChild (article)
}

criaCartao("Mateamatica","quanto é 2+2","4")
criaCartao("Arte","azul com amarelo vira qual cor?", "verde")