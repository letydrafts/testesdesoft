const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Emprestimo = sequelize.define('Emprestimo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    livro_id: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        references: {
            model: 'Livros',
            key: 'id'
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    },
    data_emprestimo_prevista: {  
        type: DataTypes.DATE,
        allowNull: false
    },
    data_devolucao: {  
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
  tableName: 'emprestimos',
  timestamps: true,
  underscored: false,
});


module.exports = Emprestimo;