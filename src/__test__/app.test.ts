import app from '../app';
import request from 'supertest';

describe('App', () => {
  it('should return hello world', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
