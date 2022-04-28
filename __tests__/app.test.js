const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('should export the express app correctly', () => {
    expect(app).toBeTruthy();
  });

  describe('GET /', () => {
    it('should respond to the GET method with 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /', () => {
    it('should respond to the GET method with hello world', async () => {
      const res = await request(app).get('/');
      expect(res.text).toBe('{"message":"hello world"}');
    });
  });

  describe('GET /404', () => {
    beforeEach(() => {
      // Avoid polluting the test output with 404 error messages
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('should respond to the GET method with a 404 for a route that does not exist', async () => {
      const res = await request(app).get('/404');
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe('{"message":"Not Found"}');
    });

    it('should respond to the POST method with a 404 for a route that does not exist', async () => {
      const res = await request(app).post('/404');
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe('{"message":"Not Found"}');
    });
  });
});
