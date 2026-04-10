const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;
const { Emprestimo } = require('../src/models');

const livro_id = 85;
const usuario_id = 2;

describe('Emprestimos', () => {

    beforeEach(async () => {
        await Emprestimo.destroy({ where: {}, force: true });
    });

    test("deve registrar um novo empréstimo", async () => {
        const res = await axios.post(`${api}/emprestimos`, {
            usuario_id: usuario_id,
            livro_id: livro_id,
            data_devolucao_prevista: "2025-05-01",
        });
        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty("id");
    });
    
    test('deve retornar uma lista de emprestimos', async () => {
        const res = await axios.get(`${api}/emprestimos`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
    });

    test('deve deletar um emprestimo', async () => {
        const emprestimo = await axios.post(`${api}/emprestimos`, {
            livro_id: livro_id,
            usuario_id: usuario_id,
            data_devolucao_prevista: '2024-12-31'
        }
        );
        const res = await axios.delete(`${api}/emprestimos/${emprestimo.data.id}`);
        expect(res.status).toBe(204);
    });

    test('deve retornar 404 ao deletar emprestimo inexistente', async () => {
        try{
            await axios.delete(`${api}/emprestimos/99999`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test('deve retornar um emprestimo pelo id', async () => {
        const emprestimo = await axios.post(`${api}/emprestimos`, {
            usuario_id: usuario_id,
            livro_id: livro_id,
            data_devolucao_prevista: '2025-05-01',
        });

        const res = await axios.get(`${api}/emprestimos/${emprestimo.data.id}`);
        expect(res.status).toBe(200);
        expect(res.data).toHaveProperty('id');
        expect(res.data).toHaveProperty('livro_id');
        expect(res.data).toHaveProperty('usuario_id');
        expect(res.data).toHaveProperty('data_devolucao_prevista');
        expect(res.data).toHaveProperty('data_devolucao');
    });

    test('deve retornar 404 para emprestimo inexistente', async () => {
        try{
            await axios.get(`${api}/emprestimos/99999`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test('deve retornar 400 ao registrar emprestimo sem livro_id', async () => {
        try{
            await axios.post(`${api}/emprestimos`, {
                usuario_id: usuario_id,
                data_devolucao_prevista: '2024-12-31'
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test('deve retornar 400 ao registrar emprestimo sem usuario_id', async () => {
        try{
            await axios.post(`${api}/emprestimos`, {
                livro_id: livro_id,
                data_devolucao_prevista: '2024-12-31'
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test('deve retornar 400 ao registrar emprestimo sem data de devolução prevista', async () => {
        try{
            await axios.post(`${api}/emprestimos`, {
                livro_id: livro_id,
                usuario_id: usuario_id
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
            }
    });

    test('deve registrar a devolução de um emprestimo', async () => {
        const emprestimo = await axios.post(`${api}/emprestimos`, {
            livro_id: livro_id,
            usuario_id: usuario_id,
            data_devolucao_prevista: '2024-12-31',
        });

        const res = await axios.put(`${api}/emprestimos/${emprestimo.data.id}`, {
            data_devolucao: '2024-12-15'
        });
        expect(res.status).toBe(200);
        expect(res.data).toHaveProperty('data_devolucao');
    });

    test('deve retornar 404 ao devolver emprestimo inexistente', async () => {
        try{
            await axios.put(`${api}/emprestimos/99999`, {
                data_devolucao: '2024-12-15'
            });
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test('deve listar emprestimos de um usuario especifico', async () => {
        const res = await axios.get(`${api}/usuarios/${usuario_id}/emprestimos`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
    });

    test('deve retornar 400 ao emprestar livro ja emprestado', async () => {
        const emprestimo = await axios.post(`${api}/emprestimos`, {
            livro_id: livro_id,
            usuario_id: usuario_id,
            data_devolucao_prevista: '2024-12-31'
        });
    await expect(axios.post(`${api}/emprestimos`, {
            livro_id: livro_id,
            usuario_id: usuario_id,
            data_devolucao_prevista: '2024-12-31'
        })).rejects.toMatchObject({ 
            response: { status: 400 }
        });
    });
}); 
