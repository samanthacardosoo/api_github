let buscaUsuario = document.querySelector("#buscaUsuario");
let btnUsuario = document.querySelector ("#btnUsuario");
let parteRepositorio = document.querySelector ("#parteRepositorio");
 //não sei o que isso acima significa
let nomeUsuario;

btnUsuario.addEventListener("submit",() => {
    event.preventDefault();
    parteRepositorio.innerHTML = "";    //não sei o que significa

UsuarioController.requisicaoUsuario();
RepositorioController.requisicaoRepos();
    
});