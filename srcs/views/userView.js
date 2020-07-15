class UsuarioView {
    
    static templateUsuario(criaUsuario) {
        return `
        <p id="usuario">${usuario.user}</p>
        <img src="${usuario.foto}" id="foto">
        <p><a id="foll" href="https://github.com/${this.elements.user.value}?tab=followers">Followers:</a></strong> ${usuario.followers}" </a></p>
        <p><a id="foll" href="https://github.com/${this.elements.user.value}?tab=following">Following:</a></strong> ${usuario.followings}" </a></p>
        `;
    }
}