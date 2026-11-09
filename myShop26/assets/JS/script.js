// //declaration de variables
// let nom ="degouy";
// let age = 41;

// console.log(nom);
// console.log(age);

// let score =10;
// score = 15;
// console.log(score);

// //const PI=3.14;
// //PI = 3.14159; //interdit: modifier la valeur d'une constante
// //console.log(PI);

// //concatenation
// let prenom = "marion";
// let nomComplet= prenom + nom; 
// console.log(nomComplet);

// //let test="je suis " + prenom + " " +nom;
// //console.log(test);
// //ou:
// let test = `je suis ${prenom} ${nom}`;
// console.log(test)


// // ===== Exercice 2 =====
// let a = 5;
// let b = "7";

// console.log(a + b); // Résultat : "57" car a est converti en chaîne

// // ===== Exercice 3 =====
// // Demander le prénom de l'utilisateur
// let prenomUtilisateur = prompt("Quel est ton prénom ?");

// // Afficher le prénom
// console.log(prenomUtilisateur);
// alert("Bonjour " + prenomUtilisateur + "!");

// // ===== Exercice 4 =====
// // Demander un nombre
// let nombre = prompt("Saisis un nombre :");

// // Conversion en nombre
// nombre = parseInt(nombre);

// if (nombre % 2 === 0) {
//     console.log("Nombre pair");
// } else {
//     console.log("Nombre impair");
// }

// // ===== Exercice 5 =====
// // Confirmation
// let choix = confirm("Voulez-vous continuer ?");

// // Affichage de la valeur retournée
// console.log(choix); // true si OK, false si Annuler


//TP2
//ex1-1
// let age = Number(prompt("quel est votre age?"))

// if (age<18) {
//     console.log("mineur");
// } else {
//     console.log("majeur!");
// }

//ex1-2
// let prix = Number(prompt("quel est le prix de cet article?"));
// let prixttc = 0;

// if (prix<100) {
//     prixttc = prix *1.2;
// } else {
//     prixttc = prix *1.05;
// }

//console.log(prixttc);


//ex2
// let nom = prompt("quel est ton nom");
// let note = Number(prompt("quel est ta note?"));

// if (note>0 && note<20) {
//     switch (true) {
//          case note >= 16:
//         console.log("très bien! " + nom);
//         alert("très bon travail!")
//         break;

//         case note >= 14:
//         console.log("bien " + nom);
//         break;

//         case note >= 12:
//         console.log("assez bien " + nom);
//         break;

//         case note >= 10:
//         console.log("passable " + nom);
//         alert("peut mieux faire!")
//         break;

//         case note < 10:
//         console.log("Insuffisant! " + nom);
//         alert("doit travailler davantage!")
//         break;
   
// }
// } else {
//     console.log("la note est invalide!");
// }

//ex3
// let choix = prompt("choisir une boisson: ");

// switch (choix) {
//     case choix = "café" :
//         console.log("voici votre café!");
//         break;

//     case choix = "thé" :
//         console.log("voici votre thé");
//         break;

//     case choix = "jus" :
//         console.log("voici votre jus!");
//         break;

//     default:
//         console.log("choix indisponible!");

// }

//ex4
// let mois = Number(prompt("saisir un numéro de mois: "));

// switch (mois) {
    
//     case 1 :
//          console.log("Janvier= 31 jours");
//          break;

//     case 2 :
//          console.log("fevrier= 28 jours");
//          break;

//     case 3 :
//          console.log("Mars= 31 jours");
//          break;

//     case 4 :
//         console.log("Avril= 30 jours");
//         break;

//     case 5 :
//          console.log("Mai= 31 jours");
//          break;

//     case 6 :
//          console.log("Juin= 30jours");
//          break;

//     case 7 :
//          console.log("Juillet= 31 jours");
//          break;

//     case 8 :
//         console.log("Aout= 31 jours");
//         break;

//     case 9 :
//          console.log("Septembre= 30 jours");
//          break;

//     case 10 :
//          console.log("Octobre= 31jours");
//          break;

//     case 11 :
//          console.log("Novembre= 30 jours");
//          break;

//     case 12 :
//         console.log("Décembre= 31 jours");
//         break;

//     default:
//          console.log("numéro de mois incorrect!");
// }

//compter a rebours:
// for (let i = 5; i>=1 ; i--) {
//      console.log(i);
// }

// //affichernombres pairs de 2 à 10
// for(let i = 5; i<=10 ; i+-2) {
//      console.log(i);
// }

//TP3
//EX1
// let somme = 0;
// for (let i = 1; i <=10; i++) {
//      somme+=i;
// }
// console.log("la somme des nombres de 1 à 10 est : ", somme);

//ex2
// let n = Number(prompt("donner un nombre pour calculer sa factorielle: "));
// let factorielle=1;
// for(let i = 1; i <= n; i++) {
//      factorielle*=i;
// }
// console.log("la factorielle de ", n, "est ", factorielle);

//ex3
// for(let i = 1; i <=30; i++) {
//      if (i%5 ===0 && i%3 ===0) {
//           console.log("FIZZBUZZ!");
//      } else if (i%3 ===0){
//           console.log("FIZZ!");
             
//      } else if (i%5 ===0) {
//           console.log("BUZZ!");
          
//      } else {
//           console.log(i);
          
//      }
// }

//ex4
// const nombreSecret = 4;
// let deviner;
// let essais = 0;


// do {
//      deviner = parseInt(prompt("tentez de devinez le nombre secret: ")) ;
//      essais++;
//      if (deviner!==nombreSecret) {
//           alert("raté! dommage!");
//      }
     
// } while (deviner!==nombreSecret);


// console.log("félicitations! vous avez trouver le nombre secret en ", essais, " !");

//ex5
// let entreeUtilisateur = "";
// let nbre = entreeUtilisateur;
// let resultat = 0;
// let final = 0;

// do { entreeUtilisateur = Number(prompt("donnes moi un nombre à additionner: "));
//     if (entreeUtilisateur>0) {
//         nbre = entreeUtilisateur;
//     final = resultat+nbre;
//     resultat = final;

//     console.log(final);
//     } else {
//         alert("nombre invalide!");
//     }
    
    
// } while (entreeUtilisateur>0);

//ex6

//demander le nombre de produits
// let nbrProduits = Number(prompt("combien de produits souhaitez vous acheter?"));
// let prix;
// let montantTotal = 0;

// for (let i = 1; i <= nbrProduits; i++) {
//     prix = Number(prompt("Saisir le prix du produit " + i + ":"));
//     //ajouter le prix au montant total
//     montantTotal += prix; //montantTotal = montantTotal + prix
// };

// //calculer la réduction
// let reduction = 0;

// if (montantTotal>=200) {
//     reduction = montantTotal * 0.1;
// };

// //calculer montant final
// let montantFinal = montantTotal - reduction;

// //afficher les resultats demandés
// console.log("Montant total avant réduction: " + montantTotal);
// console.log("Montant de la réduction: " + reduction);
// console.log("Montant final à payer: " + montantFinal);

//FUNCTIONS

//TP4
//EX1
// function direBonjour() {
//     console.log("bonjour tout le monde!");
    
// }

// direBonjour();

// function bonjourUtilisateur(nom) {
//     console.log("bonjour ", nom);
    
// }

// let nom = "marion"
// bonjourUtilisateur(nom);

// let resultat = calculerSomme(5, 6);
// console.log(resultat);

// let tab = ["islem", "randy", "marion"];
// console.log(tab);
// console.log("le premier element du tableau est: ", tab[0]);
// console.log("le deuxieme element du tableau est: ", tab[1]);

// //modifier element du tableau
// tab[0] = "randy";
// console.log("tableau après modification: ", tab);
// console.log(tab.length);


//ex2
// function calculerSomme(a, b) {
    
//     return a+b;
// }


//ex3
// function calculerCarre(a) {
//      return a*a;
//  }

//  let resultat = calculerCarre(5);
//  console.log(resultat);


//ex4
// let nombres = [10, 20, 30 ,40];

// console.log("le premier element du tableau est: ", nombres[0]);
// console.log("le dernier element du tableau est: ", nombres[nombres.length-1]);
// console.log("l' element du tableau à l'index 2 est: ", nombres[2]);

//ex5
// let courses = ["pain", "lait", "oeufs"];

// courses.push("fromage");
// courses.unshift("beurre");
// courses.splice(2, 1);
// console.log(courses);

// courses[2]= "yaourt";
// console.log(courses);


//TP5

// let users = [];
// users = ["marion", "randy", "hugo", "mélina", "charlie"];


// //ajouter un user
// function ajouterUser(element, tab){
//     tab.push(element);
//     console.log("urilisateur ajouté");
    
// }

// ajouterUser("géraldine", users); //users.push("geraldine");
// console.log(users);

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
    
// }

// console.log(users.indexOf("randy"));
// console.log(users.indexOf("test"));

// //verifier la presence d'un user
// function verifUsers(user) {
//     if (users.indexOf(user) !== -1) {
//         console.log("trouvé!");
        
//     } else {
//         console.log("non trouvé!");
        
//     }
// }
// verifUsers("charlie");
// console.log(users[1].toLowerCase().includes("a")); //affiche user ayant la lettre "a" grace à .includes

// for (let i = 0; i < users.length; i++) {
//     if (users[i].toLowerCase().includes("a")) {   //.toLowerCase pour convertir en minuscule
//         console.log(users[i]);
        
//     }
// }

// console.log("find: ", users.find((element)=> element === "hugo"));  // .find pour trouver un user

// //afficher un message et verif si tableau vide ou non



//MANIPULATION DU DOM

//POUR SELECTIONNER AVEC ID
// const essaie = document.getElementById('product');
// console.log(essaie); (pour le tester remettre un id product ds le html)

// const titreh2 = document.querySelector('#product');
// console.log(titreh2); (pour le tester remettre un id product ds le html)

//POUR SELECTIONNER PAR CLASS
// const productcards = document.getElementsByClassName('test');
// console.log(productcards);
// console.log("ier article", productcards[0]);

//POUR SELECTIONNER PAR TAGNAME
// const articles = document.getElementsByTagName('article');
// console.log("exemple avec tagname", articles);

//POUR SELECTIONNER LES  "noeuds" plutot que le html pour intervenir ds le DOM
// const articles = document.querySelector('article');
// console.log("ex query selector ", articles);

// const allArticles = document.querySelectorAll('article');
// console.log("ex query selector all", allArticles);


//MODIFIER TEXT A PARTIR DU JS
// const essaie = document.getElementById('product');
// //(pour le tester remettre un id product ds le html)
// console.log(essaie);
// essaie.textContent = "test"; . textContent pour juste modifier le texte

// const essaie = document.getElementById('product');
// //(pour le tester remettre un id product ds le html)
// essaie.innerHTML = "<strong>test</strong>"; //.inner pour changer le css directement
// essaie.style.color = "red"; //. style pour modif css style
//.inner = injection d'image possible

//TP1
//EX1
// const essaie = document.getElementById('maintest');
// essaie.style.backgroundColor = "red";
// essaie.style.border= " 2px solid blue";

//ex2
//DIFFERENTS MODE DE SELECTION ET LEURS SYNTAXES
//const titres = document.getElementsByClassName('h3'); // par nom de class
//const titres2 = document.querySelectorAll('.h3'); //par class avec syntaxe css
//const titres3 = document.querySelectorAll('.test h3'); //par "parents/enfants" syntaxe css
//console.log(titres);
//console.log(titres2);
//console.log(titres3);
//on a recupere une liste il faut pointer sur l'element!

//titres[0].style.color = "red"; pour pointer un seul element!

//boucle FOR pour pointer tous les elements tour a tour
//for (let i = 0; i < titres2.length; i++) {
    //titres2[i].style.color = "red";
    
//}

//function fleche avec param titre
//forEach pour parcourir un tableau
//titres3.forEach((titre) => {
        //titre.style.color = "green";
        //titre.textContent = titre.textContent.toUpperCase();
    //})

//ex3
//const bouttons = document.querySelectorAll('.test button');
//console.log(bouttons);

//bouttons.forEach((btn) => {
       // btn.style.backgroundColor = "green";
       // btn.textContent = "ajouter au panier";
    //})

//ex4
//  const btnScroll = document.querySelector(".scroll-top");
//  console.log(btnScroll);

// //ajouter un evenement a detecter
// btnScroll.addEventListener("click", function () {
//     btnScroll.style.backgroundColor = "pink";
//     btnScroll.textContent = "cliqué!";
//     window.scrollTo(0, 0);
// })

// function afficherAlert() {
//    alert("here from function afficher alert!");
// }

// ex5
// const balisePrix = document.querySelectorAll(".price");
// console.log(balisePrix);
// //.textContent pour afficher le contenu texte
// console.log(balisePrix[0].textContent); 


//parcourir tous les prix

// balisePrix.forEach((prix) => {
    
//     //recuperer contenu text
//     let textPrix = prix.innerText;

//     //extraire uniquement le montant
//     let montantPrix = Number(textPrix.replace("Prix: ","").replace(" £","").trim());
//     //.replace pour remplacer ou enlever et .trim pour supprimer les espaces
//     console.log(montantPrix);
    
//     if (montantPrix<25) {
//         prix.style.color = "green";
//     } else if(montantPrix<=50){
//         prix.style.color = "orange";
//     } else {
//         prix.style.color = "red";
//     }

// });


//ex6

// const balisePrix = document.querySelectorAll(".price");
// console.log(balisePrix);
// //.textContent pour afficher le contenu texte
// console.log(balisePrix[0].textContent); 


// //parcourir tous les prix

// balisePrix.forEach((prix) => {
    
//     //recuperer contenu text
//     let textPrix = prix.innerText;

//     //extraire uniquement le montant
//     let montantPrix = Number(textPrix.replace("Prix: ","").replace(" £","").trim());
//     //.replace pour remplacer ou enlever et .trim pour supprimer les espaces
//     //possibiliter utiliser .match pour extraire le prix
//     console.log(montantPrix);

//     const carte = prix.closest('article');
//     //.closest cherche la balise 'article' la plus proche correspondante


    
//     if (montantPrix<25) {
//         prix.style.color = "green";
//         carte.insertAdjacentHTML("afterbegin", `<span class="badge">Bonne affaire</span>`);
//         //inserer du html directement avec.insertAdjacentHTML(ou, quoi)
//     } else if(montantPrix<=50){
//         prix.style.color = "orange";
//     } else {
//         prix.style.color = "red";
//         carte.insertAdjacentHTML("afterbegin", `<span class="badge">top produit</span>`);
//     }

// });


