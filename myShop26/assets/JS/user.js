//crestion de la class
class User {
    constructor(nomUser, prenomUser, emailUser, mdpUser, genreUser, interetsUser, paysUser) {
        this.nom = nomUser;
        this.prenom = prenomUser;
        this.email = emailUser;
        this.mdp = mdpUser;
        this.genre = genreUser;
        this.interets = interetsUser;
        this.pays = paysUser;
    }
}

//creation function nouvelle inscription
function Inscrire() {
    const inscriptionForm = document.getElementById("inscription-form");
    console.log(inscriptionForm);
    if (!inscriptionForm)  return; //pour arreter fonction si pas le formulaire

    inscriptionForm.addEventListener("submit", function (event){
        event.preventDefault();

        //recuperer valeurs
        let nom = document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('pwd').value;
        let genre = document.querySelector('input[name=genre]:checked').value;
        console.log(genre);
        //recuperer valeur d'un chekbox
        let interets = [];
        let interetsChecked =document.querySelectorAll('input[name=interets]:checked');
        console.log(interetsChecked);
        for (let i = 0; i < interetsChecked.length; i++) {
            interets.push(interetsChecked[i].value);
            
        }
        console.log(interets);
        let pays = document.getElementById('pays').value;
        console.log(nom, prenom, email, mdp, genre, interets, pays);
        
        //regrouper valeurs
        let users = new User(nom, prenom, email, mdp, genre, interets, pays);

        //sauvegarder ds ls
        const utilisateurs = JSON.parse(localStorage.getItem("listeUtilisateurs")) || [];
        utilisateurs.push(users);
        localStorage.setItem("listeUtilisateurs", JSON.stringify(utilisateurs));

        inscriptionForm.reset();
        alert("compte créé avec succès!");
        
    })
}




//creation function connexion
function SeConnecter() {
    const connectedForm = document.getElementById("connected-form");
    console.log(connectedForm);
    if (!connectedForm)  return; //pour arreter fonction si pas le formulaire

    connectedForm.addEventListener("submit", function (event){
        event.preventDefault();

        //recuperer valeurs
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('pwd').value;
        console.log(email, mdp);
        
        //recupérer liste utilisateur pour comparaison
        const utilisatrs = JSON.parse(localStorage.getItem("listeUtilisateurs")) || [];//recupere ds la liste des inscrits

        //rechercher utilisateur dns LS pour voir si ca match
        const userConnect = utilisatrs.find((utilisateur) =>{
            return utilisateur.email === email && utilisateur.mdp === mdp;
        });
        //console.log(userConnect);
        
        if (userConnect) {
            //redirection
            window.location.href = "../index.html";
            alert("connexion réussie!");
            
        } else {
            //msg erreur
            alert("email ou mot de passe incorrecte!");
        }
    })
}

Inscrire();
SeConnecter();