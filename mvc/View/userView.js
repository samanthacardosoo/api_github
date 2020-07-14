class UsuarioView {
    constructor (){
        throw new Error ("Não precisa ser instanciado");
    }
    static templateUsuario(usuario) {
        return `
        <p id="usuario">${usuario.user}</p>
        <img src="${usuario.foto}" id="foto">
        <p><a id="foll" href="https://github.com/${usuario.user}?tab=followers">Followers:</a></strong> ${usuario.followers}" </a></p>
        <p><a id="foll" href="https://github.com/${usuario.user}?tab=following">Following:</a></strong> ${usuario.following}" </a></p>
        <ul id="listaRep">${usuario.repositorios}</ul>
        `;
    }
}

class RepositorioView {
    constructor (){
        throw new Error ("Não precisa ser instanciado");
    }

    static templateRepositorio(repositorio) {
        return `
        <p id="nomeRep"> Nome do repositório: ${repositorio.nomeRepo}</p>
        <a href="${repositorio.urlRepo}">
        <p id="descr">${repositorio.descricao} </p>
        `;
    }
}