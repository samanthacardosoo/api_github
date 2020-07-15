class Repositorio {
    constructor(nomeRepo,urlRepo,descricao) {
        this._nomeRepo = nomeRepo;
        this._urlRepo = urlRepo;
        this._descricao = descricao;
    }

    getRepositorio () {
        return {
        nomeRepo: this._nomeRepo,
        urlRepo: this._urlRepo,
        descricao: this._descricao
        };
    }
}