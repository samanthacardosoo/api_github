class RepositorioView {

    static templateRepositorio(criaRepositorio) {
        return `
        <p id="nomeRep">${criaRepositorio.nomeRepo}</p>
        <a href="${criaRepositorio.urlRepo}"></a>
        `;
    }
}