const getAllMessages = {
    tags:["Query"],
    summary:"List of all the Messages",
    description:"Get all messages",
    responses:{
      200:{
        description: "OK",
        content:{ 
          "application/json":{
            schema:{
              type:"object",
             
            },
          }
        }
      },
      500: {
        description: "Internal Server Error"
      }
    },
    security: [{
        bearerAuth: []
      }] 
  }

const createMessage={
    tags:["Query"],
    summary:"Create message",
    description:"Create message",
    parameters:[
        {
            name:"Message",
            in:"body",
            schema:{
                type: "string",
            }
        },
    ],
    responses:{
        200:{
          description: "OK",
        },
        500: {
          "description": "Internal Server Error"
        }
      },
      
  }

const getMessage={
    tags:["Query"],
    summary:"Get message by id",
    description:"return a single message",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"message Id",
            schema:{
                type: "string",
                example:"63bbfea347327b26b452737f"
            }
            
        }
    ],
    responses:{
        200:{
            description: "OK",
        },
        "500": {
            "description": "Internal Server Error"
        }
        },
    security: [{
    bearerAuth: []
    }]
}

const deleteMessage={
    tags:["Query"],
    summary:"Delete message ",
    description:"Delete a message",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"message Id",          
        }
    ],
    responses:{
        404:{
            description: "Not found",
        },
        "500": {
            "description": "Internal Server Error"
        }
        },
    security: [{
    bearerAuth: []
    }]
}

const queryRouteDocs = {
    "/api/message":{
        get: getAllMessages,
        post:createMessage,
      },

    "/api/message/{id}":{
         get: getMessage,
         delete: deleteMessage,
    },
}
export default queryRouteDocs