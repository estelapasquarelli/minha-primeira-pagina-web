document.getElementById("submit").addEventListener("click", valueForm)

function valueForm(){
    if(document.getElementById("nome").value != "" && document.getElementById("e-mail").value != "" && document.gelElementById("telefone").value != ""){
    alert("Pronto! Você receberá as informações por E-mail.")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}
