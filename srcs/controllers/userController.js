class UsuarioController {
    
    static geraUsuario() {
        let parteUsuario = document.querySelector("#parteUsuario")
        let requisicao = new XMLHttpRequest ();
        requisicao.open ("GET", "userUrl")

        requisicao.addEventListener ("load",() => {
            if (requisicao.status == 200) {
                let resposta = JSON.parse (requisicao.responseText);
                let criaUsuario = new Usuario(resposta.login, 
                                            resposta.avatar_url, 
                                            resposta.followers, 
                                            resposta.following);
                
        parteUsuario.innerHTML = UsuarioView.templateUsuario(criaUsuario);
            } else {
                alert ("Identificamos um erro, tente novamente")
            }
        });
        requisicao.send()
    }
}
