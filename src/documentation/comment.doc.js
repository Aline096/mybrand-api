
const addComment = {
    tags:["Comments"],
    summary:"Add a comment",
    description:"Add comment",
    parameters:[
        {
            name:"articleId",
            in:"path",
            description:"Article Id",
            schema:{
                type: "string",
        
            }
            
        },
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        commentor:{
                            type:"string",
                            description:"Name of commentor",
                            example:"Uwera",
                        },
                        comment:{
                            type:"string",
                            description:"Comment",
                            example:"Marvelous"
                        },
                    },
                }
            },
        }
    },
    responses:{
        201:{
        description: "Created",
        }
    }
}
        
const commentRouteDocs= {
    "/api/comment/{articleId}":{
        patch:addComment,
     },
}

export default commentRouteDocs