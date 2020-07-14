class Usuario {
    constructor(user,foto,followers,followings) {
        this._user = user;
        this._foto = foto;
        this._followers = followers;
        this._followings = followings;
}

    getUsuario() {
        return {
            user: this._user,
            foto: this._foto,
            followers: this._followers,
            followings: this._followings,
        };
    }
}

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

// "avatar_url": "https://avatars0.githubusercontent.com/u/65643326?v=4",
// "followers_url": "https://api.github.com/users/samanthacardosoo/followers",
//  "following_url": "https://api.github.com/users/samanthacardosoo/following{/other_user}",
// "repos_url": "https://api.github.com/users/samanthacardosoo/repos",
        //"html_url": "https://github.com/samanthacardosoo/api_github"
        //  "url": "https://api.github.com/repos/samanthacardosoo/api_github",
        //"description"

