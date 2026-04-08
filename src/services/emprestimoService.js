const { Emprestimo } = require('../models');

const criarEmprestimo = async (usuario_id, livro_id, data_devolucao_prevista, data_devolucao ) => {
    const emprestimo = await Emprestimo.create({ usuario_id, livro_id, data_devolucao_prevista, data_devolucao });
    return {
        id: emprestimo.id,
        usuario_id: emprestimo.usuario_id,
        livro_id: emprestimo.livro_id,
        data_devolucao_prevista: emprestimo.data_devolucao_prevista,
        data_devolucao: null,
    };
};

module.exports = { criarEmprestimo };