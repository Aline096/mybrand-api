import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    articleID:{
        type: String,
        required: [true, 'the comment must be referenced to the article']
    },
    name:{
        type: String,
        required: [true, 'the name field is required']
    },
    comment:{
        type: String,
        required: [true, 'there must be the comment content']
    }
})

const Comment = mongoose.model('comment', commentSchema)

export default Comment