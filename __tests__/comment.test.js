import request from 'supertest'
import app from '../src/app'
import Article from '../src/models/article.model'

describe("comments endpoints", () => {

    it('Should create comment', async () => {
        let article= await Article.findOne()
        let id =0
        const res = await request(app)
        .post('/api/comment/'+id)
        .set('Accept', 'application/json')
        .send(
          {
              commentor:"Anonymous",
              comment:"test Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        )
      expect(res.statusCode).toEqual(404)
      })

})