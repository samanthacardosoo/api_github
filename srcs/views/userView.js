class UsuarioView {

    static templateUsuario(criaUsuario) {
        return `
        <div>
        <img src="${criaUsuario.foto}" id="foto">
        <p id="usuario">${criaUsuario.user}</p>        
        <p><a id="foll" href="https://github.com/${criaUsuario.user}?tab=followers">Followers:</a> ${criaUsuario.followers}" </a></p>
        <p><a id="foll" href="https://github.com/${criaUsuario.user}?tab=following">Following:</a> ${criaUsuario.followings}" </a></p>
        </div>`;
        
    }
}