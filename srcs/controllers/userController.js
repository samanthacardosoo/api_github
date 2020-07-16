class UsuarioController {

    static geraUsuario(userUrl) {
        let parteUsuario = document.querySelector("#parteUsuario")
        let requisicao = new XMLHttpRequest ();
        requisicao.open ("GET", userUrl);

        requisicao.addEventListener ("load",() => {
            if (requisicao.status == 200) {
                let resposta = JSON.parse (requisicao.responseText);
                let criaUsuario = new Usuario(resposta.avatar_url,
                                            resposta.login,  
                                            resposta.followers, 
                                            resposta.following);
                
        parteUsuario.innerHTML = UsuarioView.templateUsuario(criaUsuario.getUsuario());
            } else {
                alert ("Usuario não encontrado, tente novamente")
            }
        });
        requisicao.send()
    }
}
