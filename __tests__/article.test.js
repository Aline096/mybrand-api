import request from 'supertest'
import app from '../src/app'
import Article from '../src/models/article.model'

describe('articles Endpoints', () => {
  let token=""
  const getArticle = async()=>{
    const result = await request(app)
    .post('/articles')
    .set('Authorization',`Bearer ${token}`)
    .send({
        title: "The title",
        picture: "image.png",
        description: "Lorem Ipsum is simply dummy text "
    })
    return result
  }
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

  it('Should create the articles', async () => {
    const filePath = `${__dirname}/testFiles/test.pdf`;
    const res = await request(app)
    .post('/api/articles')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(
      {
          title:"The test",
          picture:"image.png",
          description:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    )
  expect(res.statusCode).toEqual(400)
  })

  it('Should not create the article', async () => {
    const res = await request(app)
    .post('/api/articles')
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
    // let article= await Article.findOne()
    // let id =article._id
    const result = await getArticle();
    const id = result.body._id;
    const res = await request(app)
    .delete('/api/articles/'+id)
    .set('Accept', "application/json")
    .set('Authorization', `Bearer ${token}`)
    .send()
  expect(res.statusCode).toEqual(500)
  })  

  it('should get All The articles', async () => {
    const res = await request(app)
    .get('/api/articles')
    .send()
    expect(res.statusCode).toBe(200);
  });

  it('should Update an article', async () => {
    // const article= await article.findOne();
    // const id = article._id;
    const result = await getArticle();
    const id = result.body._id;
    const res = await request(app)
    .put('/api/articles/'+id)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(
      {
          title:"The test updated",
          picture:"image.png",
          description:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      })
    expect(res.statusCode).toBe(404);
  });
  

it("should get single the article", async () => {
    const result = await getArticle();
    const id = result.body._id;
    const response = await request(app)
    .get("/api/articles/"+id);
    expect(response.statusCode).toBe(500)
})

it("Should create an article likes", async () => {
  // const article = await Article.findOne();
  // const id = article._id;
  const result = await getArticle();
  const id = result.body._id;
  const res= await request(app)
  .patch("/api/like/"+id)
  .send();
  expect(res.statusCode).toBe(500);
  })
  it("Should unlike article ", async () => {
    const result = await getArticle();
    const id = result.body._id;
    const res= await request(app)
    .put("/api/like/"+id)
    .send();
    expect(res.statusCode).toBe(500);
    })

  it("Should comment on an articles", async () => {
    const result = await getArticle();
    const id = result.body._id;
    const res= await request(app)
    .patch("/api/comment/"+id)
    .send({
      commentor:"Uwera",
      comment:"This is awesome"
    });
    expect(res.statusCode).toBe(500);
    })

    it('should check validation', async()=>{
      const res = await request(app).post('/user/signin').send({
        email: "admin@gmail.com",
        password: "Password@123"
    });
      expect(res.statusCode).toBe(404)
  })

//new

  it("Should return a 400 ", async () => {
    const res = await request(app)
      .post("/api/user/signin")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Uwera",
        email: "uwera@gmail.com",
      });
    expect(res.statusCode).toBe(400);
  });

  it("Should return a 400", async () => {
    const res = await request(app)
      .post("/api/user/signin")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Uwera",
        email: "uwera@gmail.com",
        password: "password",
      });
    expect(res.statusCode).toBe(400);
  });
  it("Should return a 200 ", async () => {
    const response = await request(app)
      .post("/api/user/signin")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Uwera",
        email: "uwera@gmail.com",
      });
    expect(response.statusCode).toBe(400);
  });

});
