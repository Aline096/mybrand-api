import request from 'supertest'
import app from '../src/app'
import Article from '../src/models/article.model'

describe('article Endpoints', () => {
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

  it('Should create the article', async () => {
    const res = await request(app)
    .post('/api/article')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(
      {
          title:"The test",
          picture:"test picture",
          description:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    )
  expect(res.statusCode).toEqual(400)
  // expect(res.body.message).toEqual("Article created successfully")
  })


  it('Should not create the article', async () => {
    const res = await request(app)
    .post('/api/article')
    .set('Accept', 'application/json')
    .send(
      {
          title:"The test",
          picture:"test picture",
          description:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    )
  expect(res.statusCode).toEqual(401)
  expect(res.body.message).toEqual("Invalid access token we suspect that it might be expired")
  })


  it('Should delete the article', async () => {
    let article= await Article.findOne()
    let id =article._id
    const res = await request(app)
    .delete('/api/article/'+id)
    .set('Accept', "application/json")
    .set('Authorization', `Bearer ${token}`)
    .send()
  expect(res.statusCode).toEqual(200)
  })  

  it('should get All The articles', async () => {
    const res = await request(app)
    .get('/api/article')
    .send()
    expect(res.statusCode).toBe(200);
  });

  it('should Update an article', async () => {
    let article= await Article.findOne();
    let id = article._id;
    const res = await request(app)
    .put('/api/articles/' + id)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(
      {
          title:"The test updated",
          picture:"test picture updated",
          description:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      })
    expect(res.statusCode).toBe(404);
  });

})

