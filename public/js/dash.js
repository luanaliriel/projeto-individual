

nomeUsuario.innerHTML = sessionStorage.NOME_USUARIO
idadeUsuario.innerHTML += sessionStorage.IDADE_USUARIO
generoUsuario.innerHTML += sessionStorage.GENERO_USUARIO


function sairDaSessao() {
    sessionStorage.clear();
    setTimeout(() => {
        window.location = 'index.html';
    }, '2000');
}

// GRÁFICO 1 - PREFERENCIA DE PERSONAGEM


const meuchart = document.getElementById('chartJS')

const data = {
    labels: ['Shizuku', 'Seiji'], /* EIXO X */
    datasets: [{
        label: `Quantidade`,
        backgroundColor: [`#00D8C6`, `#D9FFFC`],
        borderColor: 'transparent',
        data: [40, 60] /* EIXO y */
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

const chart = new Chart(meuchart, config)





// GRÁFICO 2 - PREFERENCIA POR IDADE

const meuchart2 = document.getElementById('chartJS2')

const data2 = {
    labels: ['Shizuku', 'Seiji'],
    datasets: [
        {
            label: '10 a 19 anos',
            data: [15, 3],
            backgroundColor: '#008802',
        },
        {
            label: '20-29 anos',
            data: [9, 4],
            backgroundColor: '#D9FFFC',
        },
        {
            label: '30++ anos',
            data: [5, 17],
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

const chart2 = new Chart(meuchart2, config2)


// GRÁFICO 3 - PREFERENCIA POR GÊNERO

const meuchart3 = document.getElementById('chartJS3');

const data3 = {
    labels: ['Shizuku', 'Seiji'],
    datasets: [
        {
            label: 'Feminino',
            data: [40, 20],
            backgroundColor: '#fffd6c',
        },
        {
            label: 'Masculino',
            data: [25, 35],
            backgroundColor: '#0037db',
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

const chart3 = new Chart(meuchart3, config3)