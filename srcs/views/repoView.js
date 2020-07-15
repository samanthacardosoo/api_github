class RepositorioView {

    static templateRepositorio(criaRepositorio) {
        return `
        <div id="repIndiv">
        <a href="${criaRepositorio.urlRepo}">${criaRepositorio.nomeRepo}</a>
        </div>`;
    }
}