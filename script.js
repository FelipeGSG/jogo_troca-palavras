function openModal(){
  document.getElementById("comoJogar").showModal();
}
function closeModal(){
  document.getElementById("comoJogar").close();
}

function deleteFilm(el){
  el.parentElement.remove()
}

document.getElementById("formNewFirm").addEventListener("submit", (e) =>{
  e.preventDefault()
  const filme = document.getElementById("filme").value
  const palavraSub = document.getElementById("palavraSub").value

  let palavraValida = filme.indexOf(palavraSub)

  if(palavraValida == -1){
    console.log("erro")
    // document.getElementById("error").innerText = "Não foi possível criar esse filme"
    return
  }

  let arrayNomeFilme = filme.split(palavraSub)

  var novoFilme = document.createElement("p")
  novoFilme.classList.add("filmes")
  novoFilme.innerHTML = `${arrayNomeFilme[0]} <strong class="palavraSub">${palavraSub}</strong> ${arrayNomeFilme[1]} <button onclick="deleteFilm(this)">X</button>`

  document.getElementById("divFilmes").appendChild(novoFilme)
})

function trocaPalavra() {
  // PEGAR VALOR DIGITADO NO INPUT ATRAVES DO ID
  var palavraDigitada = document.getElementById("palavra").value
  
  // ENCONTRA O STRONG COM ID "palavra1" E INSERE A PALAVRA DIGITADA PELO USUÁRIO
  document.getElementById("palavra1").innerHTML = palavraDigitada
  document.getElementById("palavra2").innerHTML = palavraDigitada
  document.getElementById("palavra3").innerHTML = palavraDigitada
  document.getElementById("palavra4").innerHTML = palavraDigitada
  document.getElementById("palavra5").innerHTML = palavraDigitada
  
}