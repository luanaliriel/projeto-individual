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
var generos = ['Feminino', 'Masculino']
var contagens = { Feminino: [], Masculino: [] }


function sairDaSessao() {
    sessionStorage.clear();
    setTimeout(() => {
        window.location = 'index.html';
    }, '2000');
}

// CONTANDO TOTAL DE PARTICIPANTES

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
                valorTotalDeParticipantes.innerHTML = json[0].contagemTotal
            })
        } else {
            console.log(resposta)
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });


// VERIFICANDO IDENTIFICAÇÃO COM PERSONAGEM

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
                identificacaoPorPersonagem.innerHTML = json[0].personagemFinal

                for (var i = 0; i < json.length; i++) {
                    const dadoGrafico1 = json[i]
                    listaPersonagens.push(dadoGrafico1.personagemFinal)
                    listaContagem.push(dadoGrafico1.contagem)
                }
                const meuchart = document.getElementById('chartJS')

                const data = {
                    labels: listaPersonagens, /* EIXO X */
                    datasets: [{
                        label: `Quantidade`,
                        backgroundColor: [`#ff35e1`, `#f6e569`, '#D9FFFC'],
                        borderColor: 'transparent',
                        data: listaContagem /* EIXO y */
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








nomeUsuario.innerHTML = sessionStorage.NOME_USUARIO
idadeUsuario.innerHTML += sessionStorage.IDADE_USUARIO
generoUsuario.innerHTML += sessionStorage.GENERO_USUARIO




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

                for (var i2 = 0; i2 < json.length; i2++) {
                    const dadoGrafico2 = json[i2]
                    var posicao = -1

                    for (var i3 = 0; i3 < listaPersonagensG2.length; i3++) {
                        if (listaPersonagensG2[i3] == dadoGrafico2.personagemFinal) {
                            posicao = i3
                            break
                        }
                    }

                    if (posicao == -1) {
                        posicao = listaPersonagensG2.length
                        listaPersonagensG2.push(dadoGrafico2.personagemFinal)
                        lista10a20.push(0)
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





// GRÁFICO 3 - PREFERÊNCIA POR GÊNERO

fetch("/pontuacao/verificarPersonagemPorGenero", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((resposta) => {
        if (resposta.ok) {
            resposta.json().then((json) => {

                for (let i4 = 0; i4 < json.length; i4++) {
                    const { personagemFinal, genero, contagem } = json[i4];

                    // coloca o personagem na lista se ele ainda nao estiver
                    if (!listaPersonagensG3.includes(personagemFinal)) {
                        listaPersonagensG3.push(personagemFinal);
                    }

                    // preenche a contagem para o respectivo genero e personagem
                    if (generos.includes(genero)) {
                        // pega a posicao do personagem
                        const index = listaPersonagensG3.indexOf(personagemFinal);

                        // armazena a contagem do genero na posicao correspondente
                        contagens[genero][index] = contagens[genero][index] ? contagens[genero][index] + contagem : contagem;
                    }
                }

                const meuchart3 = document.getElementById('chartJS3');

                const data3 = {
                    labels: listaPersonagensG3,
                    datasets: [
                        {
                            label: "Feminino",
                            data: contagens.Feminino,
                            backgroundColor: "#ff35e1",
                        },
                        {
                            label: "Masculino",
                            data: contagens.Masculino,
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
                                    text: "",
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
