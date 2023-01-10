import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title:{
        type: String,
        required:[true, 'Title field is required.']
    },
    picture:{
        type: String,
        required: [true, 'Picture field is required.']
    },
    description:{
        type: String,
        required: [true, 'The description field is required.']
    },
    comment:[{ name: String, message: String }],
    likes: 0,
});

const Article = mongoose.model('article', articleSchema)

// module.exports = Article;
export default Article