
const createUser = {
    tags:["User"],
    description:"Create user",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"string",
                            description:"User email",
                            example:"admin@gmail.com",
                        },
                        password:{
                            type:"string",
                            description:"Password",
                            example:"1234"
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
                example:{
                status: 0, 
                message:'', 
                payload: []
                }
            },
            }
        }
        }
    }
}
        
const userRouteDocs= {
    "/user/signin":{
        post:createUser,
     },
}

module.exports = userRouteDocs 