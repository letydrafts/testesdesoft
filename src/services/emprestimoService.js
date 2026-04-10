const { Emprestimo } = require('../models');

const criarEmprestimo = async (usuario_id, livro_id, data_devolucao_prevista ) => {
    const livroEmprestado = await Emprestimo.findOne({ 
        where: { livro_id, data_devolucao: null } 
    });

    if (livroEmprestado) {
        throw new Error('Livro já está emprestado');
    }
    
    const emprestimo = await Emprestimo.create({ usuario_id, livro_id, data_devolucao_prevista });
    return {
        id: emprestimo.id,
        usuario_id: emprestimo.usuario_id,
        livro_id: emprestimo.livro_id,
        data_devolucao_prevista: emprestimo.data_devolucao_prevista,
    };
};

const listarEmprestimos = async () => {
    const emprestimos = await Emprestimo.findAll();
    return emprestimos;
}

const atualizarEmprestimo = async (id, usuario_id, livro_id, data_devolucao_prevista, data_devolucao) => {
    const emprestimo = await Emprestimo.findByPk(id);
    await emprestimo.update({ usuario_id, livro_id, data_devolucao_prevista, data_devolucao });
    return {
        usuario_id: emprestimo.usuario_id,
        livro_id: emprestimo.livro_id,
        data_devolucao_prevista: emprestimo.data_devolucao_prevista,
        data_devolucao: emprestimo.data_devolucao
    };
}
module.exports = { criarEmprestimo, listarEmprestimos, atualizarEmprestimo };
