const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;

describe('Multas', () => {
    
    test("deve registrar uma nova multa", async () => {
        const res = await axios.post(`${api}/multas`, {
            usuario_id: 1,
            emprestimo_id: 1,
            dias_atrasados: 5,
            valor: 10.00,
            quitado: false,
        });
        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty("id");
        });

    test('deve retornar uma lista de multas', async () => {
        const res = await axios.get(`${api}/multas`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
    });

    test('deve deletar uma multa', async () => {
        const multa = await axios.post(`${api}/multas`, {
            usuario_id: 1,
            emprestimo_id: 1,
            dias_atrasados: 5,
            valor: 10.00,
            quitado: false,
        });
        const res = await axios.delete(`${api}/multas/${multa.data.id}`);
        expect(res.status).toBe(204);
    });

    test('deve retornar 404 ao deletar multa inexistente', async () => {
        try{
            await axios.delete(`${api}/multas/99999`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });
});