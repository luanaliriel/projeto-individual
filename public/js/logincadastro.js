const container = document.getElementById('container');
const botaoRegistrar = document.getElementById('registrar');
const botaoLogar = document.getElementById('login');

botaoRegistrar.addEventListener('click', () => {
    container.classList.add('active');
});

botaoLogar.addEventListener('click', () => {
    container.classList.remove('active');
});






function apagarMensagemErro() {
    cardErro.style.display = "none"
}

function limparFormulario() {
    nomeUsuario.value = ""
    emailUsuario.value = ""
    senhaUsuario.value = ""
    idadeUsuario.value = ""
    generoUsuario.value = ""
}

// COMEÇO O CADASTRO AQUI
function cadastrar() {
    var nomeVar = nomeUsuario.value
    var emailVar = emailUsuario.value
    var senhaVar = senhaUsuario.value
    var idadeVar = idadeUsuario.value
    var generoVar = generoUsuario.value

    console.log(generoVar)

    // VALIDAR CAMPOS EM BRANCO
    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        idadeVar == "" ||
        generoVar == ""
    ) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Existem campos em branco";
        setInterval(apagarMensagemErro, 5000)
        return false;
    }

    // VALIDAÇÃO SENHA
    var validarSenha = senhaVar.length > 6;
    if (validarSenha != true) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "O campo da senha precisa ser maior que 6";
        setInterval(apagarMensagemErro, 5000)
        return false;
    }
    // VALIDAÇÃO EMAIL
    var validarEmail = emailVar.indexOf('@') != -1
    if (validarEmail != true) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "O campo Email precisa o símbolo @";
        setInterval(apagarMensagemErro, 5000)
        return false;
    }

    // VALIDAÇÃO IDADE

    if (idadeVar < 10) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Usuário deve ter no mínimo 10 anos de idade";
        setInterval(apagarMensagemErro, 5000)
        return false;
    }


    // FETCH PARA CADASTRAR OS USUÁRIOS NO MEU BANCO
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            idadeServer: idadeVar,
            generoServer: generoVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";
                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                limparFormulario();
                setTimeout(() => {
                    window.location = "logincadastro.html";
                }, "2000");

            } else {
                cardErro.style.display = "block";
                mensagem_erro.innerHTML =
                    "Houve um erro... verifique os dados inseridos e/ou sua conexão";
                setInterval(apagarMensagemErro, 5000)
                return false;
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    return false;
}


// FAZENDO O LOGIN
function entrar() {
    var emailVar = emailUsuarioEntrar.value
    var senhaVar = senhaUsuarioEntrar.value

    if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "Existem campos em branco";
        setInterval(apagarMensagemErro, 5000)
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);


    // FETCH PARA AUTENTICAÇÃO DO LOGIN
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        console.log(JSON.stringify(resposta))

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log('printando json')
                console.log(json)
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.IDADE_USUARIO = json.idade;
                sessionStorage.GENERO_USUARIO = json.genero;

                fetch("/pontuacao/verificarRegistros", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        idUsuarioServer: sessionStorage.ID_USUARIO // fora das chaves do then json não funciona mais, então uso o sessionStorage
                    })
                }).then(function (resposta) {
                    if (resposta.ok) {
                        setTimeout(function () {
                            window.location = "../dash.html";
                        }, 1000);
                    } else {
                        setTimeout(function () {
                            window.location = "../quiz.html";
                        }, 1000);
                    }
                }).catch(function (erro) {
                    console.log(erro);
                })
            });


        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto);
            });
            cardErro.style.display = "block";
            mensagem_erro.innerHTML =
                "Usuário ou senha inválidos";

            setInterval(apagarMensagemErro, 5000)
            return false;
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}