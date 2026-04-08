const { criarEmprestimo } = require('../services/emprestimoService');

const criar = async (req, res) => {
    const { usuario_id, livro_id, data_devolucao_prevista } = req.body;
    
    

    if (!usuario_id || !livro_id || !data_devolucao_prevista) 
        return res.status(400).json({ erro: 'Os campos são obrigatórios' })
    

    const emprestimos = await criarEmprestimo(usuario_id, livro_id, data_devolucao_prevista);
    res.status(201).json(emprestimos);   
}

module.exports = { criar };