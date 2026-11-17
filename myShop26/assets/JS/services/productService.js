
const API_URL ="http://localhost:3000/produits";
//destination, port backend


//fonction pour ajouter ou envoyer un produit
// export async function ajouterProduitAPI(produitObj){
//     //async...await pour lecture lisible function async
//     //fetch pour envoyer la requete
//     const reponse = await fetch(API_URL, {
//         method: "POST", //envoyer produit
//         headers: { //indique que les donnees envoyées sont sous forme json
//             "content-Type": "application/JSON"
//         },

//         body: JSON.stringify(produitObj) //sous forme obj json
//     });
    

//     if (!reponse.ok) {
//         throw new Error("erreur lors de l'ajout du produit");
//     }
//     return await reponse.json();

// }


//function pour ajouter des produits
export async function ajouterProduitAPI(produitObj) {
    const reponse = await axios.post(API_URL, produitObj);
    return reponse.data;
}

//recuperer les produits
export async function getAllProducts() {
    const reponse = await axios.get(API_URL); //pour recuperer ds le back end
    return reponse.data; //retourne le liste des produits
}

//recuperer produit par son id
export async function getproductByID(id) {
    const reponse = await axios.get(`${API_URL}/${id}`); //a partir de l'addresse de notre requete
    return reponse.data;
}