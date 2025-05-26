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
    return
  }

  let arrayNomeFilme = filme.split(palavraSub)

  var novoFilme = document.createElement("p")
  novoFilme.classList.add("filmes")
  novoFilme.innerHTML = `${arrayNomeFilme[0]} <strong class="palavraSub">${palavraSub}</strong> ${arrayNomeFilme[1]} <button onclick="deleteFilm(this)">X</button>`

  document.getElementById("divFilmes").appendChild(novoFilme)

  document.getElementById("filme").value = ""
  document.getElementById("palavraSub").value = ""
})

function trocaPalavra() {
  const strong = document.querySelectorAll("strong")

  strong.forEach(el =>{
    el.innerText = document.getElementById("palavra").value
  })
}