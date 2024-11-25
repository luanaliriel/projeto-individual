// gráfico 1
var listaPersonagens = []
var listaContagem = []


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

                    for (let index = 0; index < json.length; index++) {
                        listaPersonagens.push(json[index].personagemFinal)
                        listaContagem.push(json[index].contagem)
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

    const meuchart2 = document.getElementById('chartJS2')

    const data2 = {
        labels: ['Shizuku', 'Seiji', 'Mistura'],
        datasets: [
            {
                label: '10 a 20 anos',
                data: [15, 3, 2],
                backgroundColor: '#ff35e1',
            },
            {
                label: '21-30 anos',
                data: [9, 4, 2],
                backgroundColor: '#D9FFFC',
            },
            {
                label: '30++ anos',
                data: [5, 17, 10],
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

    // GRÁFICO 3 - PREFERENCIA POR GÊNERO

    const meuchart3 = document.getElementById('chartJS3');

    const data3 = {
        labels: ['Shizuku', 'Seiji'],
        datasets: [
            {
                label: 'Feminino',
                data: [40, 20],
                backgroundColor: '#ff35e1',
            },
            {
                label: 'Masculino',
                data: [25, 35],
                backgroundColor: '#44dc9c',
            },
        ]
    };

    const config3 = {
        type: 'bar',
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
                        text: 'Personagens',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: 'Poppins',
                        },
                        color: '#6d6d6d',
                    },
                    ticks: {
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: 'Poppins',
                        },
                    },
                },
                y: {
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

    new Chart(meuchart3, config3)