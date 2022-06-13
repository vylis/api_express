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

// end point

// describe('Post article', () => {
//   it('should create a new article', async () => {
//     const res = await request(app).post('/articles').send({
//       user_id: 1,
//       title: 'test is cool',
//       article: 'test is cool cool text',
//     });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body);
//   });
// });

// describe('get articles', () => {
//   it('should get all articles', async () => {
//     const res = await request(app).get('/articles');
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe('Post user', () => {
//   it('should create a new user', async () => {
//     const res = await request(app).post('/users').send({
//       username: 'ro',
//       email: 'ro@ro.ro',
//       password: 'ro',
//     });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body);
//   });
// });

// describe('get users', () => {
//   it('should get all users', async () => {
//     const res = await request(app).get('/users');
//     expect(res.statusCode).toEqual(200);
//   });
// });

// test('GET /users/:id', async () => {
//   const post = await request(app)
//     .post('/users')
//     .send({ username: 'ro', email: 'ro@ro.ro', password: 'ro', role: 'admin' });

//   await request(app)
//     .get(`/users/${post.id}`)
//     .expect(200)
//     .then((response) => {
//       expect(response.body.id).toBe(post.id);
//       expect(response.body.username).toBe(post.username);
//       expect(response.body.email).toBe(post.email);
//       expect(response.body.password).toBe(post.password);
//       expect(response.body.role).toBe(post.role);
//     });
// });
