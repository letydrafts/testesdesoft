const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Emprestimo = require('./Emprestimo');

const Livro = sequelize.define('Livro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  disponivel: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  tableName: 'livros',
  timestamps: true,
  underscored: false,
});


Livro.hasMany(Emprestimo, { foreignKey: 'livro_id' });

module.exports = Livro;
