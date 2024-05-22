let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o se nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "seja muito bem-vindo.";
}else{
    elemento.textContent = nomeUsuário;
}

