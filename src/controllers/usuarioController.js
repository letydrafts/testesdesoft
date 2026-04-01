const { criarUsuario, listarUsuarios } = require('../services/usuarioService');
const bcrypt = require('bcrypt');

const criar = async (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    if (!nome || !email || !senha || !tipo) return res.status(400)
        .json({ erro: 'nome, email, senha e tipo são obrigatórios'})

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await criarUsuario(nome, email, senhaHash, tipo);
    res.status(201).json(usuario);
}

const listar = async (req, res) => {
    const usuarios = await listarUsuarios();
    res.status(200).json(usuarios);
}

module.exports = { criar, listar };