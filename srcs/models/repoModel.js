class Repositorio {
    constructor(nomeRepo,urlRepo) {
        this._nomeRepo = nomeRepo;
        this._urlRepo = urlRepo;
    }

    getRepositorio () {
        return {
        nomeRepo: this._nomeRepo,
        urlRepo: this._urlRepo,
        };
    }
}