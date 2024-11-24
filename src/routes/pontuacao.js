var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/verificarRegistros", function (req, res) {
    pontuacaoController.verificarRegistrosController(req, res);
})

router.post("/inserirRegistros", function (req, res) {
    pontuacaoController.inserirRegistrosController(req, res);
})

router.post("/contarTotalParticipantes", function (req, res) {
    pontuacaoController.contarTotalParticipantesController(req, res);
})

router.post("/verificarIdentificacaoPersonagem", function (req, res) {
    pontuacaoController.verificarIdentificacaoPersonagemController(req, res);
})

router.post("/verificarPersonagemPorFaixaEtaria", function (req, res) {
    pontuacaoController.verificarPersonagemPorFaixaEtariaController(req, res);
})

router.post("/verificarPersonagemPorGenero", function (req, res) {
    pontuacaoController.verificarPersonagemPorGeneroController(req, res);
})

module.exports = router;