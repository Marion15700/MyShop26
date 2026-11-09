
//boutton scrolltop
const btnScroll = document.querySelector('.scroll-top');
console.log(btnScroll);

if (btnScroll) {
    btnScroll.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    })
};

//pour afficher automatiquement une liste de produits
function afficherProduits() {
const container = document.querySelector('.product-container');
console.log(container);

//POUR UN SEUL PRODUIT
//     let produit1 = {
//         nom: "robe de soirée",
//         description: "robe rouge",
//         prix: 60,
//         imgURL: "assets/images/images6.jpg",
//     };

// POUR TOUS LES PRODUIT/ LISTE! pour declarer les valeurs des produits
    let produits = [
        {
        nom: "robe de soirée",
        description: "robe rouge",
        prix: 60,
        imgURL: "assets/images/images6.jpg", 
        },
        {
        nom: "combinaison hiver bébé",
        description: "marron et chaude pour bébé",
        prix: 20,
        imgURL: "assets/images/images1.jpg",
        },
        {
        nom: "sweet enfant",
        description: "pull à capuche coloré",
        prix: 10,
        imgURL: "assets/images/images2.jpg",  
        },
        {
        nom: "chemise homme",
        description: "chemise grise",
        prix: 25,
        imgURL: "assets/images/images3.jpg",   
        }

    ];
    console.log(produits);
//injecter contenu html METHODE 1 
    // container.innerHTML="";
    // produits.forEach((produit)=>{
    //     
    // container.innerHTML += `
    //     <article class="test">
    //         <h3 class="h3">${produit.nom}</h3>
    //         <img src=${produit.imgURL} alt="${produit.nom}">
    //         <p>${produit.description}</p>
    //         <p class="price">${produit.prix} £</p>
    //         <button type="button">Acheter</button>
    //     </article>
    // ` 

    //})

//CREATION ELEMENT ARTICLE METHODE 2 
//IDEAL POUR AJOUTER DES PRODUITS sans reconstruire toute la liste de produits
    if (container) {
        produits.forEach((produit)=>{
        const article = document.createElement("article");
        article.classList.add("product-card"); 
        //.classlist pour acces a la liste et .add pour ajouter

        article.innerHTML = `
        <h3 class="h3">${produit.nom}</h3>
            <img src=${produit.imgURL} alt="${produit.nom}">
            <p>${produit.description}</p>
            <p class="price">${produit.prix} £</p>
            <button type="button">Acheter</button>
        `
        container.appendChild(article); 
        //.appendChid rajoute un noueud au dernier noeud enfant
    })
    }
    

}
afficherProduits();

const balisePrix = document.querySelectorAll(".price");
console.log(balisePrix);
//.textContent pour afficher le contenu texte
console.log(balisePrix[0].textContent); 


// //parcourir tous les prix

balisePrix.forEach((prix) => {
    
//recuperer contenu text
     let textPrix = prix.innerText;

     //extraire uniquement le montant
    let montantPrix = Number(textPrix.replace("Prix: ","").replace(" £","").trim());
     //.replace pour remplacer ou enlever et .trim pour supprimer les espaces
     //possibiliter utiliser .match pour extraire le prix
     console.log(montantPrix);

     const carte = prix.closest('article');
     //.closest cherche la balise 'article' la plus proche correspondante


    
     if (montantPrix<25) {
         prix.style.color = "green";
         carte.insertAdjacentHTML("afterbegin", `<span class="badge">Bonne affaire</span>`);
         //inserer du html directement avec.insertAdjacentHTML(ou, quoi)
     } else {
        prix.style.color = "red";
         carte.insertAdjacentHTML("afterbegin", `<span class="badge">top produit</span>`);
    }

 });




//creation page addProduct fonctions
function ajouterProduit(){
    const form = document.getElementById('formProduct');

    form.addEventListener("submit", function(event){
        event.preventDefault(); //pour anuler le rechargement auto de la page
        let nom = document.getElementById('nom').value;
        let prix = document.getElementById('prix').value;
        let description = document.getElementById('description').value;
        let imgURL = document.getElementById('imgURL').value;
        console.log(nom, prix, description, imgURL);
        //alert("produit ajouté!");
    })
}

ajouterProduit();

