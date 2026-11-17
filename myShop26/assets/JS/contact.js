//moule de ce qui va etre creer
class Msgs {
    //constructor pour creer construire 
    constructor(nom, prenom, email, message) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.message = message;

    }
}

//fonction pour ajouter un produit (ou un user par exemple)
function ajouterMsgs(){
    const formMsg = document.getElementById('formMsgs');

    if (formMsg) {
        formMsg.addEventListener("submit", async function(event){
        event.preventDefault(); //pour annuler le rechargement auto de la page

        //1:recuperer les valeurs du formulaire
        let nom = document.getElementById('nom').value; //var1
        let prenom = document.getElementById('prenom').value; //var2
        let email = document.getElementById('email').value; //var3
        let message = document.getElementById('message').value; //var4
        console.log(nom, prenom, email, message);
        
        //2:regrouper les valeurs ds un objet
        let messageNew = new Msgs(nom, prenom, email, message); //(var1, var2, vra3, var4)
        
    //appel du service
try {
    const nouveauMessage = await ajouterMessageAPI(messageNew);
    console.log(nouveauMessage);

    alert("Message envoyé!")
        formMsg.reset();
    
} catch (error) {
    console.log(error);
    alert("erreur lors de l'envoie du message")
    
}
        
    })
    }
    
}

ajouterMsgs();



