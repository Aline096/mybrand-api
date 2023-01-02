const articleRouteDocs = require("../routes/article.docs")
const userRouteDocs = require("../routes/user.docs")

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

    servers:[
      {
        url:"http://localhost:3000/api",
        description:" Local dev"
      },

      {
        url:"http://production",
        description:"  production dev"
      },
      
    ],

    components:{
        securitySchemes:{
          app_id:{
            type: "http",
            description: "API key to authorize requests.",
            scheme: "bearer",
            bearerFormt: "JWT",
            name:"appid" ,
            in: "query",
          }
        },
        security: [
          {
            app_id:[]
          }
        ],
    },
    apis:["./routes/*.js"],  

    

    tags:[
      {
        name:"User",
        description:"User routes",

      },
      {
        name:"Article",
        description:"Article routes",
      },
    ],

    
    paths:{
      ...userRouteDocs,
      ...articleRouteDocs
    }
} 

module.exports = basicInfo 