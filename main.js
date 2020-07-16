let buscaUsuario = document.querySelector("#buscaUsuario");
let btnUsuario = document.querySelector ("#btnUsuario");
let parteRepositorio = document.querySelector ("#parteRepositorio");


btnUsuario.addEventListener("click",() => {
    parteRepositorio.innerHTML = ""
    
    let userUrl = `https://api.github.com/users/${buscaUsuario.value}`
    let repUrl = `https://api.github.com/users/${buscaUsuario.value}/repos`

UsuarioController.geraUsuario(userUrl);
RepositorioController.geraRepositorio(repUrl);
    
});