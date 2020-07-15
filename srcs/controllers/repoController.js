class RepositorioController {

    static geraRepositorio() {
        let req = new XMLHttpRequest ();
        req.open ("GET", `https://api.github.com/users/${this.elements.user.value}/repos`);

        req.addEventListener("load", () => {
            if (req.status == 200) {
                let parteRepositorio = document.querySelector("parteRepositorio");
                let respostaRep = JSON.parse(req.responseText);
                let arrayRepos = [];
                for (let i = 0; i<respostaRep.length; i++) {  
                    let criaRepositorio = new Repositorio (respostaRep[i].name,
                                                    respostaRep[i].html_url,
                                                    respostaRep[i].description);
                arrayRepos.push(criaRepositorio)
                }    
                parteRepositorio.innerHTML = RepositorioView.templateRepositorio(criaRepositorio)
            } else {
                alert ("Identificamos um erro, tente novamente")
            }
            });
            req.send ();
        }
    }