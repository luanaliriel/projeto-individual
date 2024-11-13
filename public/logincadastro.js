var botaoSignIn = document.querySelector("#signin")
var botaoSignUp = document.querySelector("#signup")

var body = document.querySelector("body")
// chama a função onde a classe do body é alterada para sign in ou signup
// e cada uma delas tem suas configurações e estilos no arquivo do css
botaoSignIn.addEventListener("click", function(){
    body.className = "sign-in-js"
})
botaoSignUp.addEventListener("click", function(){
    body.className = "sign-up-js"
})