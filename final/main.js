var nb1 = document.querySelector("#nb1");
var nb2 = document.querySelector("#nb2");
var divResultat = document.querySelector(".resultat");
document.querySelector("#calcul").addEventListener("click", function () {
    var resultat = addition(+nb1.value, +nb2.value);
    divResultat.innerHTML = resultat.toString();
});
function addition(nb1, nb2) {
    return nb1 + nb2;
}
