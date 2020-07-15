class UsuarioController {

    static geraUsuario() {
        parteUsuario.innerHTML = "";
        let requisicao = new XMLHttpRequest ();
        requisicao.open ("GET", `https://api.github.com/users/${this.elements.user.value}`)

        requisicao.addEventListener ("load",() => {
            if (requisicao.status == 200) {
                let parteUsuario = document.querySelector("#parteUsuario");
                let resposta = JSON.parse (requisicao.responseText);
                let criaUsuario = new Usuario(resposta.login, 
                                            resposta.avatar_url, 
                                            resposta.followers, 
                                            resposta.following);
                
                parteUsuario.innerHTML = UsuarioView.templateUsuario(criaUsuario.usuario);
            } else {
                alert ("Identificamos um erro, tente novamente")
            }
        });
        requisicao.send()
    }
}
