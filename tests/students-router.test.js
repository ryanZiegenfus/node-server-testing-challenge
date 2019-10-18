const request = require('supertest');
const server = require('../index.js');


describe('when users register', () => {
    it('status code should be 201', async () => {
        const res = await request(server).post('/api/students')
        .send({
            "first_name": "Bob1",
            "class": "Biology"
        })
        expect(res.statusCode).toEqual(201);
    });

    it('response should be JSON', async () => {
        const res = await request(server).post('/api/students')
        .send({
            "first_name": "Bob1",
            "class": "Biology"
        })
        expect(res.type).toMatch(/json/i);
    });
});

describe('when users login', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/students')
        expect(res.statusCode).toEqual(200);
    });

    it('response should be JSON', async () => {
        const res = await request(server).get('/api/students')
        expect(res.type).toMatch(/json/i);
    });
});

describe('when users get deleted', () => {
    it('status code should be 200', async () => {
        const res = await request(server).delete('/api/students/1')
        expect(res.statusCode).toEqual(200);
    });

    it('response should be JSON', async () => {
        const res = await request(server).delete('/api/students/1')
        expect(res.type).toMatch(/json/i);
    });
});