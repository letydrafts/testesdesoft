const { criarUsuario, listarUsuarios, atualizarUsuario, buscarUsuarioPorId, deletarUsuario } = require('../services/usuarioService');
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

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, tipo } = req.body;
    const usuario = await atualizarUsuario(id, nome, email, senha, tipo);
    if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
}

const buscarPorId = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ erro: 'id é obrigatório' });
    const usuarios = await buscarUsuarioPorId(id);
    res.status(200).json(usuarios);
}

const deletar = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ erro: 'id é obrigatório' });
    await deletarUsuario(id);
    res.status(200).send();
}
module.exports = { criar, listar, atualizar, buscarPorId, deletar };