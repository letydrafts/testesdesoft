const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Emprestimo = require('./Emprestimo');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING(255),
        allowsNull: false
    }
}, {
  tableName: 'usuarios',
  timestamps: true,
  underscored: false,
})


Usuario.hasMany(Emprestimo, { foreignKey: 'usuario_id' });

module.exports = Usuario;