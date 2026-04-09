const { criarEmprestimo } = require('../services/emprestimoService');

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


module.exports = { criar };
