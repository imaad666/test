import request from 'supertest';
import app from '../server.js';

describe('GET /tasks', () => {
  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', description: 'Test Desc' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should validate required fields', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ description: 'No title' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
