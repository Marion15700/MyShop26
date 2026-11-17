const API_URLMSG ="http://localhost:3000/messages";
//destination, port backend


//fonction pour ajouter ou envoyer un message
async function ajouterMessageAPI(messageObj){
    //async...await pour lecture lisible function async
    //fetch pour envoyer la requete
    const reponseMsg = await fetch(API_URLMSG, {
        method: "POST", //envoyer produit
        headers: { //indique que les donnees envoyées sont sous forme json
            "content-Type": "application/JSON"
        },

        body: JSON.stringify(messageObj) //sous forme obj json
    });
    

    if (!reponseMsg.ok) {
        throw new Error("erreur lors de l'envoie du message");
    }
    return await reponseMsg.json();

}