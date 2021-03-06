class RepositorioController {

    static geraRepositorio(repUrl) {
        let parteRepositorio = document.querySelector("#parteRepositorio")
        let req = new XMLHttpRequest ();
        req.open ("GET", repUrl);

        req.addEventListener("load", () => {
                let respostaRep = JSON.parse(req.responseText);
                let arrayRepos = [];
                for (let i = 0; i<respostaRep.length; i++) {  
                    let criaRepositorio = new Repositorio (respostaRep[i].name,
                                                        respostaRep[i].html_url)

                parteRepositorio.innerHTML += RepositorioView.templateRepositorio(criaRepositorio.getRepositorio())
                }    
            });
        req.send ();
        }
    }