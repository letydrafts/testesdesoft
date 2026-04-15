const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Multa = sequelize.define('Multa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    },

    emprestimo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Emprestimos',
            key: 'id'
        }
    },

    dias_atrasados: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    quitado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    tableName: 'multas',
    timestamps: true,
    underscored: false,
})

module.exports = Multa;
