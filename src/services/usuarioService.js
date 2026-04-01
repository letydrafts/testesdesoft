const { Usuario } = require('../models');

const criarUsuario = async (nome, email, senha, tipo) => {
  const usuario = await Usuario.create({ nome, email, senha, tipo });
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipo: usuario.tipo
  };
};

const listarUsuarios = async () => {
  const usuarios = await Usuario.findAll();
  return usuarios;
};

module.exports = { criarUsuario, listarUsuarios };