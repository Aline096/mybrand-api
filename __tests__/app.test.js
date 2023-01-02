const request = require('supertest')
const app = require('../src/app')
describe('Welcome Endpoints', () => {
  it('should get welcome message', async () => {
    const res = await request(app)
      .get('/api')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.message).toEqual("Welcome to my brand API")
  })
})