const botao = document.getElementById("btn_menu")
const conteudo = document.getElementById("ul_menu")

botao.addEventListener("click", function(){
    conteudo.classList.toggle("flex")
    conteudo.classList.toggle("hidden")
})