import articleRouteDocs from "./article.docs"
import userRouteDocs from "./user.docs"
import queryRouteDocs from './query.docs'
import commentRouteDocs from "./comment.doc"
import likeRouteDocs from './likes.docs'


const basicInfo = {
    openapi: "3.0.0",
    info: {
      title: "Aline UWERA my-brand-API",
      description: "This is the api for my portfolio",
      version: "1.0.0",
      contact: {
        name: "Uwera Aline",
        email: "uwera.aline@gmail.com",
        url: "uweraaline.com",
      },
    },

    schemes: ['HTTP', 'HTTPS'],

    components:{
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    apis:["./routes/*.js"],  

    tags:[
      {
        name:"User",
        description:"User routes",
      },
      {
        name:"Articles",
        description:"Articles routes",
      },
      {
        name: "Comments",
        description: "Comments route"
      },
      {
        name: "Likes",
        description: "Likes routes"
      },
      {
        name: "Queries",
        description: "Messages routes"
      }      
    ],
    
    
    paths:{
      ...userRouteDocs,
      ...articleRouteDocs,
      ...queryRouteDocs,
      ...commentRouteDocs,
      ...likeRouteDocs
    },
    
} 

export default basicInfo 