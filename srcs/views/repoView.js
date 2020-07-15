class RepositorioView {
    
    static templateRepositorio(criaRepositorio) {
        return `
        <p id="nomeRep"> Nome do repositório: ${repositorio.nomeRepo}</p>
        <a href="${repositorio.urlRepo}">
        `;
    }
}