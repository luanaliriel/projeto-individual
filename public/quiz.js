const botaoComecar = document.getElementById('botao-comecar')
const telaIntroducao = document.getElementById('container-introducao')
const telaQuiz = document.getElementById('quiz')
const pergunta = document.getElementById('pergunta')
const imagem = document.getElementById('img1')
const containerDeOpcoes = document.getElementById('opcoes')
const resultadoTexto = document.getElementById('resultado')

const questoes = [
    {
        imagemQuestao: 'assets/img/ptg.quiz.webp',
        question: 'Como você lida com seus sonhos?',
        options: ['(A) Estou sempre buscando maneiras de realizá-los, mesmo que aos poucos.', '(B) Gosto de sonhar alto, mas prefiro explorar e descobrir ao longo do caminho']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz2.webp',
        question: 'O que você prefere em seu tempo livre?',
        options: ['(A) Trabalhar em algo que amo e me deixa mais próximo do que quero.', '(B) Ler, escrever ou explorar novas ideias criativas.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz3.webp',
        question: 'Como você reage ao conhecer novas pessoas?',
        options: ['(A) Sou reservado, mas demonstro interesse aos poucos.', '(B) Sou aberto(a) e gosto de criar conexões rapidamente.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz4.webp',
        question: 'Como você expressa seus sentimentos?',
        options: ['(A) Tenho dificuldade em expressá-los, prefiro mostrar com ações.', '(B) Sou direto(a) e não tenho medo de falar o que sinto.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz5.webp',
        question: 'Como você lida com críticas?',
        options: ['(A) Fico um pouco abalado, mas uso isso como motivação.', '(B) Tento absorver e aprender com elas, mesmo que machuque.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz6.webp',
        question: 'Qual destas frases combina mais com você?',
        options: ['(A) Prefiro demonstrar meu potencial trabalhando em silêncio.', '(B) Adoro descobrir algo novo a cada dia.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz7.webp',
        question: 'Você prefere trabalhar em equipe ou sozinho(a)?',
        options: ['(A) Sozinho(a), mas aprecio o apoio das pessoas que amo.', '(B) Gosto de estar com pessoas que compartilhem minhas ideias.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz8.webp',
        question: 'Como você reage a desafios?',
        options: ['(A) Me preparo com dedicação para superá-los.', '(B) Gosto de improvisar e buscar soluções criativas.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz9.webp',
        question: 'O que te motiva mais?',
        options: ['(A) Trabalhar em algo concreto e ver resultados reais.', '(B) Explorar possibilidades e deixar a imaginação fluir.']
    },
    {
        imagemQuestao: 'assets/img/ptg.quiz10.webp',
        question: 'Como você vê seu futuro?',
        options: ['(A) Com metas claras que vou alcançando aos poucos.', '(B) Como uma jornada cheia de possibilidades.']
    }
];

var indicePerguntaAtual = 0
var pontuacao = { A: 0, B: 0 }

botaoComecar.addEventListener('click', comecarQuiz)

function comecarQuiz() {
    telaIntroducao.classList.add('hidden')
    telaQuiz.classList.remove('hidden')
    carregarQuestao()
}

function carregarQuestao() {
    const perguntaAtual = questoes[indicePerguntaAtual]
    pergunta.textContent = perguntaAtual.question
    imagem.src = perguntaAtual.imagemQuestao

    containerDeOpcoes.innerHTML = '' // limpa as opções anteriores
    perguntaAtual.options.forEach(option => {
        const botaoOpcao = document.createElement('button')
        botaoOpcao.textContent = option
        botaoOpcao.classList.add('option')
        botaoOpcao.addEventListener('click', () => processarResposta(option))
        containerDeOpcoes.appendChild(botaoOpcao)
    })
}

function processarResposta(option) {
    if (option.includes('(A)')) {
        pontuacao.A++
    } else {
        pontuacao.B++
    }


    indicePerguntaAtual++

    if (indicePerguntaAtual < questoes.length) {
        carregarQuestao()
    } else {
        mostrarResultado()
    }
}

function mostrarResultado() {
    // var resultado = pontuacao.A > pontuacao.B ? 'Você se parece mais com o Seiji!' : pontuacao.B > pontuacao.A ? 'Você se parece mais com o Shizuku!' : 'Você é uma mistura entre a Shizuku e o Seiji!'

    var resultado = ``

    if (pontuacao.A > pontuacao.B) {
        resultado = "Você se parece mais com o Seiji!"
        imagem.src = "assets/img/seiji.jpg"
    } else if (pontuacao.B > pontuacao.A) {
        resultado = "Você se parece mais com a Shizuku!"
        imagem.src = "assets/img/shizuku.jpg"
    } else {
        resultado = "Você é uma mistura entre a Shizuku e o Seiji!"
        imagem.src = "assets/img/final.jpg"
    }

    resultadoTexto.textContent = resultado
    resultadoTexto.classList.remove('hidden')

    telaQuiz.classList.add('hidden')
}
