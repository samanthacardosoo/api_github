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
