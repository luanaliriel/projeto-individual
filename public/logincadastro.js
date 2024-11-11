var botaoSignIn = document.querySelector("#signin")
var botaoSignUp = document.querySelector("#signup")

var body = document.querySelector("body")

botaoSignIn.addEventListener("click", function(){
    body.className = "sign-in-js"
})
botaoSignUp.addEventListener("click", function(){
    body.className = "sign-up-js"
})