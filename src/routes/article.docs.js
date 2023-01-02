

const article = [
    {
        id:"63bbfde14bfd554b4e906a52",
        title:"Hello swagger",
        picture:"The Swagger ",
        description:"Lorem Ipsum is Lorem Ipsum has been and scrambled it to make a type specimen book."
    }
]

const getAllArticles = {
    tags:["Article"],
    description:"List all of the articles",
    responses:{
      200:{
        description: "OK",
        content:{ 
          "application/json":{
            schema:{
              type:"object",
              example:{
                status: 0, 
                message:'', 
                data: []
              }
            },
          }
        }
      }
    }
  }

  const createArticle = {
    tags:["Article"],
    description:"create article",
    requestBody:{
        content:{
            "applicatio/json":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                            description:"Title of the article",
                            example:"Article Title",
                        },
                        picture:{
                            type:"string",
                            format:"binary",
                            description:"Picture",
                            
                        },
                        description:{
                            type:"string",
                            description:"Description of the article",
                            example:"description"
                        },
                    },
                }
            },
        }
    },

    responses:{
        200:{
          description: "OK",
          content:{ 
            "application/json":{
              schema:{
                type:"object",
                example:article[0],
              },
            }
          }
        }
      },

      securitySchemes:{
        app_id:{
          type: "apiKey",
          description: "API key to authorize requests.",
          name:"appid" ,
          in: "query",
        }
      },

      security:{
        app_id:[]
      },
      
        

  }

  const getArticle={
    tags:["Article"],
    summary:"Get article by id",
    description:"return a single article",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"Article Id",
            schema:{
                type: "string",
                example:"63bbfea347327b26b452737f"
            }
            
        }
    ],
    responses:{
        200:{
          description: "OK",
          content:{ 
            "application/json":{
              schema:{
                type:"object",
                example:article[0],
              },
            }
          }
        }
      }
  }

const articleRouteDocs = {
    "/article":{
        get: getAllArticles,
        post:createArticle,
      },

    "/article/{id}":{
        get: getArticle,

    }
}

module.exports = articleRouteDocs