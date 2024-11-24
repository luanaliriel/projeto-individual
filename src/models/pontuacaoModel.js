var database = require("../database/config")

function verificarRegistros(idUsuario) {

    var instrucaoSql = `
        SELECT * from pontuacao where fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirRegistros(pontosShizuku, pontosSeiji, personagemFinal, fkUsuario) {

    var instrucaoSql = `
        INSERT INTO pontuacao (pontosShizuku, pontosSeiji, personagemFinal, fkUsuario) VALUES ('${pontosShizuku}', '${pontosSeiji}', '${personagemFinal}', '${fkUsuario}')`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarTotalParticipantes() {

    var instrucaoSql = `
        SELECT count(*) AS contagemTotal FROM pontuacao;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarIdentificacaoPersonagem() {

    var instrucaoSql = `
        SELECT personagemFinal, count(*) as contagem
        FROM pontuacao
        GROUP BY 1
        ORDER BY count(*) DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarPersonagemPorFaixaEtaria() {

    var instrucaoSql = `
        SELECT personagemFinal,
	    CASE 
            WHEN idade BETWEEN 10 AND 20 THEN '10-20'
            WHEN idade BETWEEN 21 AND 30 THEN '21-30'
            WHEN idade > 30 THEN '30++'
        END AS faixaEtaria,
        count(*) as contagem
        from pontuacao inner join usuario
        on idUsuario = fkUsuario
        group by 1,2 order by personagemFinal desc, faixaEtaria asc; `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarPersonagemPorGenero() {

    var instrucaoSql = `
        SELECT personagemFinal, genero, count(*) as contagem
    from pontuacao inner join usuario
    on idUsuario = fkUsuario
    group by 1,2
    order by personagemFinal desc;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verificarRegistros,
    inserirRegistros,
    contarTotalParticipantes,
    verificarIdentificacaoPersonagem,
    verificarPersonagemPorFaixaEtaria,
    verificarPersonagemPorGenero
};