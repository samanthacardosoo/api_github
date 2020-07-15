class Usuario {
    constructor(user,foto, repos,followers,followings) {
        this._user = user;
        this._foto = foto;
        this._followers = followers;
        this._followings = followings;
}

    get usuario() {
        return {
            user: this._user,
            foto: this._foto,
            followers: this._followers,
            followings: this._followings,
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

