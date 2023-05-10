
addEventListener("click", (evt)=>{
    
    if(evt.target.id == "btnSubmit"){
        console.log(evt.target);
        const inputEmail = document.querySelector("#idEmail");
        const inputPass = document.querySelector("#idPass");

        if(inputEmail.value == "Rm98110" && inputPass.value == "1234"){
            console.log("VALIDADO");
        }else{
            console.log("NÃO VALIDO");
        }
    }
});