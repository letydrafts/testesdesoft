const sequelize = require('../database/sequelize');
const Livro = require('./Livro');
const Usuario = require('./Usuario');
const Emprestimo = require('./Emprestimo');

Livro.hasMany(Emprestimo, { foreignKey: 'livro_id' });
Usuario.hasMany(Emprestimo, { foreignKey: 'usuario_id' });

Emprestimo.belongsTo(Livro, { foreignKey: 'livro_id' });
Emprestimo.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = {
  sequelize,
  Livro,
  Usuario,
  Emprestimo
};
