let buscaUsuario = document.querySelector("#buscaUsuario");
let btnUsuario = document.querySelector ("#btnUsuario");
let parteRepositorio = document.querySelector ("#parteRepositorio");

btnUsuario.addEventListener("submit",() => {
    event.preventDefault();
    let userUrl = `https://api.github.com/users/${this.elements.user.value}`
    let repUrl = `https://api.github.com/users/${this.elements.user.value}/repos`

UsuarioController.geraUsuario(userUrl);
RepositorioController.geraRepositorio(repUrl);
    
});