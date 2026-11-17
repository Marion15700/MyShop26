import { ajouterAupanier, getPanier } from "./services/cartService.js";
import { getAllProducts, getproductByID } from "./services/productService.js";


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


//pour afficher automatiquement la liste de produits
async function afficherProduits() {
const container = document.querySelector('.product-container');
console.log(container);

//appel au service pour recuperer ds backend
try {
    const produits = await getAllProducts();

    if (container) {
        produits.forEach((produit)=>{
        const article = document.createElement("article");
        article.classList.add("product-card");

        //creation de l'article
        article.innerHTML = `
        <h3 class="h3">${produit.nom}</h3>
            <img src=${produit.imgURL} alt="${produit.nom}">
            <p>${produit.description}</p>
            <p class="price">${produit.prix} £</p>
            <button type="button">Acheter</button>
        `;

        
        //evenement au click pour affichage
       const btn = article.querySelector("button")
        btn.addEventListener("click", async function(){
        try {
            await ajouterAupanier(produit.id);
            alert("Produit ajouté au panier!", produit.id);
        } catch (error) {
            console.log(error);
       
        alert("erreur ajout produit au panier");
        }
       
    });

        container.appendChild(article); 
        //.appendChid rajoute un noueud au dernier noeud enfant
        });

}
    } catch (error) {
    console.log("erreur:", error);
    alert("erreur de recuperation des produits")
    }
};

async function afficherpanier() {
    const panierBody = document.getElementById("panier-body");
    console.log(panierBody);

    if (!panierBody) return;

    try {
        // récupération du panier
        const panier = await getPanier();
        console.log(panier);

        for (const elt of panier) {

            // récupérer le produit correspond à son id
            const produit = await getproductByID(elt.produitID);
            console.log(produit);

            const tr = document.createElement("tr");

            tr.innerHTML = `
                 <td>${elt.produitID}</td>
                 <td>${produit.nom}</td>
                 <td>${produit.prix}</td>
                 <td>${elt.quantite}</td>
                 <td>20</td>
                 <td>
                     <button type="button">Supprimer</button>
                 </td>
            `;

            panierBody.appendChild(tr);
        }


        const trSomme = document.createElement("tr");

        trSomme.innerHTML = `
            <td colspan="4">Total</td>
            <td>10</td>
            <td>
                <button type="button">Commander</button>
            </td>
        `;

        panierBody.appendChild(trSomme);



    } catch (error) {

    }

}

afficherProduits();
afficherpanier();

// const balisePrix = document.querySelectorAll(".price");
// console.log(balisePrix);
// //.textContent pour afficher le contenu texte
// //console.log(balisePrix[0].textContent); 


// //parcourir tous les prix

// balisePrix.forEach((prix) => {
    
//     //recuperer contenu text
//     let textPrix = prix.innerText;

//     //extraire uniquement le montant
//     let montantPrix = Number(textPrix.replace("Prix: ","").replace(" £","").trim());
//     //.replace pour remplacer ou enlever et .trim pour supprimer les espaces
//     //possibiliter utiliser .match pour extraire le prix
//      console.log(montantPrix);

//      const carte = prix.closest('article');
//      //.closest cherche la balise 'article' la plus proche correspondante


    
//      if (montantPrix<25) {
//          prix.style.color = "green";
//          carte.insertAdjacentHTML("afterbegin", `<span class="badge">Bonne affaire</span>`);
//          //inserer du html directement avec.insertAdjacentHTML(ou, quoi)
//      } else {
//         prix.style.color = "red";
//          carte.insertAdjacentHTML("afterbegin", `<span class="badge">top produit</span>`);
//     }

// });


// async function afficherPanier(params) {
//     const panierBody = document.getElementById("panier-body");
//     console.log(panierBody);
//     if (!panierBody) return; 
//     try {
//         //recup panier
//         const panier = await getPanier();
//         console.log(panier);
        
//         panier.forEach(async(elt)=>{
//             const produit = await getproductByID(elt.produitID);
//             const tr = document.createElement("tr");

//             tr.innerHTML=`
//                             <td>${elt.produitID}</td>
//                             <td>${produit.nom}</td>
//                             <td>${produit.prix}</td>
//                             <td>${elt.quantite}</td>
//                             <td>20£</td>
//                             <td><button type="button">Acheter</button></td>
//             `;
//             panierBody.appendChild(tr);
//         });

//         const trSomme = document.createElement("tr");
//         trSomme.innerHTML = `
//                             <td colspan="4">TOTAL:</td>
//                             <td>170£</td>
//                             <td><button type="submit">Commander</button></td>
//         `;
//         panierBody.appendChild(trSomme);


//     } catch (error) {
        
//     }
    
// }

// afficherProduits();
// afficherPanier();