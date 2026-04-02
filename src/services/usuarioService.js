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

const atualizarUsuario = async (id, nome, email, senha, tipo) => {
  const usuario = await Usuario.findByPk(id);
  await usuario.update({ nome, email, senha, tipo });
  return {
    nome: usuario.nome,
    email: usuario.email,
    tipo: usuario.tipo
  };
};

const buscarUsuarioPorId = async (id) => {
  const usuario = await Usuario.findByPk(id);
  return usuario;
}


module.exports = { criarUsuario, listarUsuarios, atualizarUsuario, buscarUsuarioPorId };