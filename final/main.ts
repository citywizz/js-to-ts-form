const nb1 = <HTMLInputElement>document.querySelector("#nb1");
const nb2 = <HTMLInputElement>document.querySelector("#nb2");
const divResultat = <HTMLDivElement>document.querySelector(".resultat");

document.querySelector("#calcul").addEventListener("click", () =>{

    let resultat = addition(+nb1.value, +nb2.value);
    divResultat.innerHTML = resultat.toString();
});


function addition(nb1:number,nb2:number){
    return nb1 + nb2;
}

