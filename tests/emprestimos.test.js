const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;

const livro_id = 1;
const usuario_id = 1;

describe('Emprestimos', () => {
    test('deve registrar um novo emprestimo', async () => {
        const res = await axios.post(`${api}/emprestimos`, {
            livro_id: livro_id,
            usuario_id: usuario_id,
            data_devolucao: '2024-12-31'
        });
        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty('id');
        await axios.delete(`${api}/emprestimos/${res.data.id}`);
        });
        
    }
);