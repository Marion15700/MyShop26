const API_URL = "http://localhost:3000/panier";

//ajouter un produit au panier
export async function ajouterAupanier(produitId){
    return await axios.post(API_URL, {
        produitID:produitId,
        quantite:1
    });
}

//recuperer le panier
export async function getPanier(){
    const reponse = await axios.get(API_URL);
    return reponse.data;
}

