const liked = {
    tags:["Likes"],
    summary:" like",
    description:"Add a like",
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
    
    responses:{
        201:{
        description: "Created",
        }
    }
}

const unliked = {
    tags:["Likes"],
    summary:" unlike",
    description:"Remove a like",
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
    
    responses:{
        201:{
        description: "Created",
        },
        200:{
            description: "OK",
            }
    }
}
        
const likeRouteDocs= {
    "/api/like/{articleId}":{
        patch:liked,
        put:unliked,
     },
}

export default likeRouteDocs