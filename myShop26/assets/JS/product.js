import {ajouterProduitAPI  } from "./services/productService.js";
//moule de ce qui va etre creer
class Produit {
    //constructor pour creer construire 
    constructor(nom, description, prix, imgURL) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.imgURL = imgURL;

    }
}


//objet qui va etre mis dans le moule
//const produit1 = new Produit("veste femme", "jolie robe", 25, "assets/images/images5.jpg");
//console.log(produit1);

//fonction pour ajouter un produit (ou un user par exemple)
function ajouterProduit(){
    const form = document.getElementById('formProduct');

    if (form) {
        form.addEventListener("submit", async function(event){
        event.preventDefault(); //pour anuler le rechargement auto de la page

        //1:recuperer les valeurs du formulaire
        let nom = document.getElementById('nom').value; //var1
        let description = document.getElementById('description').value; //var2
        let prix = document.getElementById('prix').value; //var3
        let imgURL = document.getElementById('imgURL').value; //var4
        console.log(nom, prix, description, imgURL);
        //alert("produit ajouté!");

        //2:regrouper les valeurs ds un objet
        let produit = new Produit(nom, description, prix,  imgURL); //(var1, var2, vra3, var4)
        // console.log(produit);

        // //3:sauvegarder ds localstorage
        // const produits = JSON.parse(localStorage.getItem("produits")) || [];
        // //json.parse pour sauvegarder des objets, converti sous forme d'objet
        // //const produits = liste de produits, tableau

        // produits.push(produit);
        // localStorage.setItem("produits", JSON.stringify(produits));
        // console.log(produits);
        
    //appel du service
try {
    const nouveauProduit = await ajouterProduitAPI(produit);
    console.log(nouveauProduit);

    alert("Produit ajouté!")
        form.reset();
    
} catch (error) {
    console.log(error);
    alert("erreur lors de l'ajout")
    
}
        
    })
    }
    
}

ajouterProduit();



