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
    summary:"List of all the articles",
    description:"Get all of the articles",
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
      },
      500: {
        description: "Internal Server Error"
      }
    }
  }

  const createArticle = {
    tags:["Article"],
    summary:"Create an Article",
    description:"create article",
    parameters: [],
    requestBody:{
        content:{
            "multipart/form-data":{
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
        201:{
          description: "created",
          content:{ 
            "application/json":{
              schema:{
                type:"object",
                example:article[0],
              },
            }
          }
        },
        400: {
          description: "Bad Request"
        },
        500: {
          description: "Internal Server Error"
        }
      },

      security: [{
        bearerAuth: []
      }]    
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
        },
        "500": {
          "description": "Internal Server Error"
        }
      }
  }

  const updateArticle={
    tags:["Article"],
    summary:"Update article ",
    description:"Update a single article",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"Article Id",
            schema:{
                type: "string",
        
            }
            
        },
    ],
    requestBody:{
      content:{
          "multipart/form-data":{
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
        },
        "500": {
          "description": "Internal Server Error"
        }
      },
      security: [{
        bearerAuth: []
      }]
  }

  const deleteArticle={
    tags:["Article"],
    summary:"Delete article ",
    description:"Delete an article",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"Article Id",
            schema:{
                type: "string",
            }
            
        },
    ],
    responses:{
      200:{
        description:"OK"
      },
      404:{
        description: "Not found",
      },
      500: {
        "description": "Internal Server Error"
      }
      },
    security: [{
      bearerAuth: []
    }]
  }

const articleRouteDocs = {
    "/api/article":{
        get: getAllArticles,
        post:createArticle,
      },

    "/api/article/{id}":{
        get: getArticle,
        put: updateArticle,
        delete: deleteArticle,
    },
    
}
export default articleRouteDocs