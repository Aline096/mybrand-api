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
    comments:{
        type: Array,
        default:[],
    },
    likes: { 
        type:Number, 
        default:0
    },
    created_date: {
        type: Date,
        }
});

const Article = mongoose.model('article', articleSchema)

export default Article