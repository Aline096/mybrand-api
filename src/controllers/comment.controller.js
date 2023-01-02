import Article from "../models/article.model"
import {NotFoundHttpError} from '../common/errors/notfoundHttp'
import { StatusCodes } from 'http-status-codes';


const postComment = async (req, res, next) => {
    try {

        const articleId = req.params.articleId
        const article = await Article.findOne({_id: articleId})
        if (!article) {
           throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found")          
        } 
        await Article.updateOne({_id: article._id},{
            comments:[...article.comments,req.body]
        })
        res.status(StatusCodes.CREATED).json({message:'comment added', payload:null})
    } catch (err) {
        next(err)
    }
}



export {
    postComment
}