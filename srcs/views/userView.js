class UsuarioView {
    static templateUsuario(usuario) {
        return `
        <p id="usuario">${usuario.user}</p>
        <img src="${usuario.foto}" id="foto">
        <p><a id="foll" href="https://github.com/${this.elements.user.value}?tab=followers">Followers:</a></strong> ${usuario.followers}" </a></p>
        <p><a id="foll" href="https://github.com/${usuario.user}?tab=following">Following:</a></strong> ${usuario.following}" </a></p>
        <ul id="listaRep">${usuario.repositorios}</ul>
        `;
    }
}