const { criarEmprestimo, listarEmprestimos, atualizarEmprestimo } = require('../services/emprestimoService');

const criar = async (req, res) => {

    try {
        const { usuario_id, livro_id, data_devolucao_prevista } = req.body;

        if (!usuario_id || !livro_id || !data_devolucao_prevista) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }
        
        const emprestimo = await criarEmprestimo(usuario_id, livro_id, data_devolucao_prevista);
        res.status(201).json(emprestimo);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listar = async (req, res) => {
    const emprestimos = await listarEmprestimos();
    res.status(200).json(emprestimos);
}

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { usuario_id, livro_id, data_devolucao_prevista, data_devolucao } = req.body;
    const emprestimo = await atualizarEmprestimo(id, usuario_id, livro_id, data_devolucao_prevista, data_devolucao);
    if (!emprestimo) {
        return res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
    res.status(200).json(emprestimo);
}


module.exports = { criar, listar, atualizar };
