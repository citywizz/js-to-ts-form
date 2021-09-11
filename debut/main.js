const nb1 = document.querySelector("#nb1");
const nb2 = document.querySelector("#nb2");

document.querySelector("#calcul").addEventListener("click", () =>{

    let resultat = addition(+nb1.value, +nb2.value);

    document.querySelector(".resultat").innerHTML = resultat;

});



function addition(n1,n2){

    if (typeof(n1) === "number" && typeof(n2) === "number"){
    return n1 + n2;
    }
    else{
    return "Les valeurs ne sont pas de type 'Number'"
    }
}

