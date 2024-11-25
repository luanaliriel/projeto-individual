var pontuacaoModel = require("../models/pontuacaoModel");



function verificarRegistrosController(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pontuacaoModel.verificarRegistros(idUsuario)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Usuário sem pontuação registrada");
                    } else {
                        res.status(403).send("Mais de uma pontuação registrada");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    function inserirRegistrosController(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var pontosShizuku = req.body.pontosShizukuServer;
        var pontosSeiji = req.body.pontosSeijiServer;
        var personagemFinal = req.body.personagemFinalServer;
        var fkUsuario = req.body.fkUsuarioServer;
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            // poderia usar nos parametros o req.body.XServer

            pontuacaoModel.inserirRegistros(pontosShizuku, pontosSeiji, personagemFinal, fkUsuario)
            .then(
                function (response) {
                    res.json(response);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }

        function contarTotalParticipantesController(req, res) {

                pontuacaoModel.contarTotalParticipantes()
                .then(
                    function (response) {
                        res.json(response);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }

            function verificarIdentificacaoPersonagemController(req, res) {

                pontuacaoModel.verificarIdentificacaoPersonagem()
                .then(
                    function (response) {
                        res.json(response);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }

            function verificarPersonagemPorFaixaEtariaController(req, res) {

                pontuacaoModel.verificarPersonagemPorFaixaEtaria()
                .then(
                    function (response) {
                        res.json(response);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }

            function verificarPersonagemPorGeneroController(req, res) {

                pontuacaoModel.verificarPersonagemPorGenero()
                .then(
                    function (response) {
                        res.json(response);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
            }

module.exports = {
    verificarRegistrosController,
    inserirRegistrosController,
    contarTotalParticipantesController,
    verificarIdentificacaoPersonagemController,
    verificarPersonagemPorFaixaEtariaController,
    verificarPersonagemPorGeneroController
}