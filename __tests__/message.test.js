import request from 'supertest'
import app from '../src/app'
import Message from '../src/models/message.model';

describe('Message Endpoints', () => {

    let token=""
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
    token=res.body.payload.accessToken
  })
  
  it("Should create a message", async () => {
    const response = await request(app)
        .post("/api/message")
        .send({
        name: "Uwera",
        email: "uwera@gmail.com",
        message:"Free coding"
        
        });
    expect(response.statusCode).toBe(200);
  });

  it(" should return 404", async () => {
  const res = await request(app)
  .post("/api/messages")
  .send({
      name: "Uwera",
      email: "uwera@gmail.com",
      message: "free coding"
  });
  expect(res.statusCode).toBe(404);
});

  it('Should not create the message', async () => {
    const res = await request(app)
    .post('/api/message')
    .send(
      {
        name: "Uwera",
        message:"Free coding"
      }
    )
  expect(res.statusCode).toEqual(400)
  })

  it('Should delete the message', async () => {
    let message= await Message.findOne()
    let id =message._id
    const res = await request(app)
    .delete('/api/message/'+id)
    .set('Accept', "application/json")
    .set('Authorization', `Bearer ${token}`)
    .send()
  expect(res.statusCode).toEqual(200)
  }) 

  it("Should get messages", async () => {
  const res = await request(app)
  .get("/api/messages")
  .set("Authorization",`Bearer ${token}`)
  .send();
  expect(res.statusCode).toBe(404);
});


})