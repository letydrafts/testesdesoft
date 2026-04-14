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

});