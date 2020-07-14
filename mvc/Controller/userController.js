class UsuarioController {
    constructor() {
        throw new Error ("Não precisa ser instanciado");
    }

    static geraUsuario() {
        parteUsuario.innerHTML = "";
        let requisicao = new XMLHttpRequest ();
        requisicao.open ("GET", `https://api.github.com/users/${nomeUsuario}`)

        requisicao.addEventListener ("load",() => {
            if (requisicao.status == 200) {
                let parteUsuario = document.querySelector("#parteUsuario");
                let resposta = JSON.parse (requisicao.responseText);
                let criaUsuario = new Usuario(resposta.login, resposta.avatar_url, resposta.followers, resposta.following);
                
                parteUsuario.innerHTML = UsuarioView.templateUsuario(criaUsuario.getUsuario());
            } else {

            }
        });
        requisicao.send()
    }
}

class RepositorioController {
    constructor () {
        throw new Error ("Não precisa ser instanciado");
    }

    static geraRepositorio() {
        let req = new XMLHttpRequest ();
        req.open ("GET", `https://api.github.com/users/${nomeUsuario}/repos`); //http tá certo?

        req.addEventListener("load", () => {
            if (req.status == 200) {
                let parteRepositorio = document.querySelector("parteRepositorio");
                let respostaRep = JSON.parse(req.responseText);

                let criaRepositorio = new Repositorio (respostaRep.nomeRepo,resposta.urlRepo,resposta.descricao);
                parteRepositorio.innerHTML += RepositorioView.templateRepositorio(criaRepositorio.getRepositorio());
                }
            });
            req.send ();
        }
    }
