const request = require('supertest')
const app = require('../src/app')
describe('Welcome Endpoints', () => {
  it('Should Login the admin', async () => {
    const res = await request(app)
      .post('/api/user/signin')
      .send(
        {
            email:"admin@gmail.com",
            password:"Password@123"
        }
      )
    expect(res.statusCode).toEqual(200)
    expect(res.body.message).toEqual("Success")
  })
  it('Should Not Login the admin', async () => {
    const res = await request(app)
      .post('/api/user/signin')
      .send(
        {
            email:"admin@gmail.com",
            password:"Invalid@PAss"
        }
      )
    expect(res.statusCode).toEqual(401)
    expect(res.body.message).toEqual("Invalid credentials")
  })
})