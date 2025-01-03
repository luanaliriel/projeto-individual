// o que vou exibir sobre o usuário da vez
nomeUsuario.innerHTML = sessionStorage.NOME_USUARIO
idadeUsuario.innerHTML += sessionStorage.IDADE_USUARIO
generoUsuario.innerHTML += sessionStorage.GENERO_USUARIO


// vetores pro gráfico 1
var listaPersonagens = []
var listaContagem = []


// vetores pro gráfico 2
var listaPersonagensG2 = []
var lista10a20 = []
var lista21a30 = []
var lista30plus = []

// vetores pro gráfico 3
var listaPersonagensG3 = []
var generos = ['Feminino', 'Masculino'] // vetor com os generos feminino e masculino
var contagens = { Feminino: [], Masculino: [] } // json para armazenar as contagens por genero
var listaFeminino = [];
var listaMasculino = [];


// limpo o session storage (saio da conta atual) e vou pra home
function sairDaSessao() {
    sessionStorage.clear();
    setTimeout(() => {
        window.location = 'index.html';
    }, '2000');
}

// KPI - CONTANDO TOTAL DE PARTICIPANTES 

fetch("/pontuacao/contarTotalParticipantes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log('json')
                console.log(json)
                valorTotalDeParticipantes.innerHTML = json[0].contagemTotal // id que defini no HTML
            })
        } else {
            console.log(resposta)
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });



// KPI E GRÁFICO - VERIFICANDO IDENTIFICAÇÃO COM PERSONAGEM

fetch("/pontuacao/verificarIdentificacaoPersonagem", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log('json')
                console.log(json)
                identificacaoPorPersonagem.innerHTML = json[0].personagemFinal // uso o id que criei no html p/ plotar o valor do banco

                for (var i = 0; i < json.length; i++) { // estou percorrendo o json (a lista de resultados que vem do banco de dados)
                    const dadoGrafico1 = json[i] // estou definindo que cada dado tem o nome de dadoGrafico1
                    listaPersonagens.push(dadoGrafico1.personagemFinal) // estou colocando na lista de personagens os pers. do banco
                    listaContagem.push(dadoGrafico1.contagem) // estou colocando na lista de contagem a contagem do banco
                }
                const meuchart = document.getElementById('chartJS') // aqui estou definindo o chart 1 que chamo no HTML 

                const data = {
                    labels: listaPersonagens,
                    datasets: [{
                        label: `Quantidade`,
                        backgroundColor: [`#ff35e1`, `#f6e569`, '#D9FFFC'],
                        borderColor: 'transparent',
                        data: listaContagem
                    },
                    ]
                }

                const config = {
                    type: 'pie',
                    data: data,
                    options: {
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        size: 14,
                                        weight: 'bold',
                                        family: 'Poppins'
                                    },
                                    color: '#6d6d6d',
                                },
                            },
                        },
                    },
                }

                new Chart(meuchart, config)



            })
        } else {
            console.log(resposta)
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });





// GRÁFICO 2 - PREFERENCIA POR IDADE

fetch("/pontuacao/verificarPersonagemPorFaixaEtaria", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log('json')
                console.log(json)

                for (var i2 = 0; i2 < json.length; i2++) { // percorrendo a lista (json) que vem do banco de dados (resultado query)
                    const dadoGrafico2 = json[i2] // o dado atual (personagem final, faixa etaria e contagem)
                    var posicao = -1 // aqui estou usando um valor simbólico de -1 pra iniciar a variavel posicão

                    for (var i3 = 0; i3 < listaPersonagensG2.length; i3++) { // percorro a lista e armazeno os personagens encontrados
                        if (listaPersonagensG2[i3] == dadoGrafico2.personagemFinal) { // vejo se o pers. atual ja foi inserido
                            posicao = i3 // se encontrado a var posicao vira o indice atual desse personagem encontrado
                            break // paro o for
                        }
                    }

                    if (posicao == -1) { // se não encontrar o personagem na lista...
                        posicao = listaPersonagensG2.length // representa a posiçao onde o proximo elemento vai entrar
                        listaPersonagensG2.push(dadoGrafico2.personagemFinal) // coloco personagem na lista de acordo com dado da coluna
                        lista10a20.push(0) // estou preparando os indices que vao ser atualizados depois
                        lista21a30.push(0)
                        lista30plus.push(0)
                    }

                    if (dadoGrafico2.faixaEtaria == '10-20') {
                        lista10a20[posicao] = dadoGrafico2.contagem
                    } else if (dadoGrafico2.faixaEtaria == '21-30') {
                        lista21a30[posicao] = dadoGrafico2.contagem
                    } else if (dadoGrafico2.faixaEtaria == '30++') {
                        lista30plus[posicao] = dadoGrafico2.contagem
                    }
                }


                const meuchart2 = document.getElementById('chartJS2')

                const data2 = {
                    labels: listaPersonagensG2,
                    datasets: [
                        {
                            label: '10 a 20 anos',
                            data: lista10a20,
                            backgroundColor: '#ff35e1',
                        },
                        {
                            label: '21-30 anos',
                            data: lista21a30,
                            backgroundColor: '#D9FFFC',
                        },
                        {
                            label: '30++ anos',
                            data: lista30plus,
                            backgroundColor: '#5900c5',
                        },
                    ]
                };

                const config2 = {
                    type: 'bar',
                    data: data2,
                    options: {
                        responsive: true,
                        plugins: {},
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    font: {
                                        size: 14,
                                        family: 'Poppins',
                                        weight: 'bold',
                                    },
                                    color: '#6d6d6d',
                                },
                            },
                            y: {
                                stacked: true,
                                title: {
                                    display: true,
                                    text: 'Número de Usuários',
                                    font: {
                                        size: 14,
                                        family: 'Poppins',
                                        weight: 'bold',
                                    },
                                    color: '#6d6d6d',
                                },
                                ticks: {
                                    font: {
                                        size: 14,
                                        family: 'Poppins',
                                        weight: 'bold',
                                    }
                                }
                            },
                        },
                    },
                }

                new Chart(meuchart2, config2)
            })
        } else {
            console.log("Erro na resposta: ", resposta);
        }
    })
    .catch(erro => {
        console.log(`#ERRO: ${erro}`);
    });


// GRÁFICO 3 DE PERSONAGEM POR GÊNERO
fetch("/pontuacao/verificarPersonagemPorGenero", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log('json')
                console.log(json);

                // percorro todos os dados recebidos
                for (var i4 = 0; i4 < json.length; i4++) {
                    const dadoGrafico3 = json[i4]; // esse dado é de personagem, gênero e contagem
                    var posicao = -1; // valor simbolico

                    // verifica se o personagem ja existe na minha lista
                    for (var i5 = 0; i5 < listaPersonagensG3.length; i5++) {
                        if (listaPersonagensG3[i5] == dadoGrafico3.personagemFinal) {
                            posicao = i5; // se encontrou eu salvo a posiçao
                            break; // paro o loop
                        }
                    }

                    // se o personagem nao foi encontrado
                    if (posicao == -1) {
                        posicao = listaPersonagensG3.length; // nova posiçao para o proximo personagem
                        listaPersonagensG3.push(dadoGrafico3.personagemFinal); // adiciono o personagem na lista
                        listaFeminino.push(0)
                        listaMasculino.push(0)
                    }

                    // atualizando a contagem pelo genero
                    if (dadoGrafico3.genero == 'Feminino') {
                        listaFeminino[posicao] = dadoGrafico3.contagem;
                    } else if (dadoGrafico3.genero == 'Masculino') {
                        listaMasculino[posicao] = dadoGrafico3.contagem;
                    }
                }

                const meuchart3 = document.getElementById('chartJS3');

                const data3 = {
                    labels: listaPersonagensG3,
                    datasets: [
                        {
                            label: "Feminino",
                            data: listaFeminino,
                            backgroundColor: "#ff35e1",
                        },
                        {
                            label: "Masculino",
                            data: listaMasculino,
                            backgroundColor: "#44dc9c",
                        },
                    ],
                };

                const config3 = {
                    type: "bar",
                    data: data3,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {},
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Personagens",
                                    font: {
                                        size: 14,
                                        weight: "bold",
                                        family: "Poppins",
                                    },
                                    color: "#6d6d6d",
                                },
                                ticks: {
                                    font: {
                                        size: 14,
                                        weight: "bold",
                                        family: "Poppins",
                                    },
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Número de Usuários",
                                    font: {
                                        size: 14,
                                        family: "Poppins",
                                        weight: "bold",
                                    },
                                    color: "#6d6d6d",
                                },
                                ticks: {
                                    font: {
                                        size: 14,
                                        family: "Poppins",
                                        weight: "bold",
                                    },
                                },
                            },
                        },
                    },
                };

                new Chart(meuchart3, config3);
            });
        } else {
            console.error("Erro ao buscar dados do gráfico por gênero:", resposta);
        }
    })
    .catch((erro) => {
        console.error(`#ERRO: ${erro}`);
    });


