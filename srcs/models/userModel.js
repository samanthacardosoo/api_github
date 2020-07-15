class Usuario {
    constructor(foto,user,followers,followings) {
        this._foto = foto;        
        this._user = user;
        this._followers = followers;
        this._followings = followings;
}

    getUsuario() {
        return {
            foto: this._foto,
            user: this._user,
            followers: this._followers,
            followings: this._followings,
        };
    }
}
