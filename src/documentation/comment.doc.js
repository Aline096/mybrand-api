
const addComment = {
    tags:["Comment"],
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
                            description:"Namee of commentor",
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
    "/comment/{articleId}":{
        patch:addComment,
     },
}

export default commentRouteDocs