import Article from "../models/article.model"
import {NotFoundHttpError} from '../common/errors/notfoundHttp'
import { StatusCodes } from 'http-status-codes';


const like = async (req, res, next) => {
    try {

        const articleId = req.params.articleId
        const article = await Article.findOne({_id: articleId})
        if (!article) {
           throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found")          
        } 
        await Article.updateOne({_id: article._id},{
            likes: article.likes+1
        })
        res.status(StatusCodes.CREATED).json({message:'liked', payload:null})
    } catch (err) {
        next(err)
    }
}

const unlike = async (req, res, next) => {
    try {

        const articleId = req.params.articleId
        const article = await Article.findOne({_id: articleId})
        if (!article) {
           throw new NotFoundHttpError(StatusCodes.NOT_FOUND, "Article Not found")          
        } 
        await Article.updateOne({_id: article._id},{
            likes: article.likes-1
        })
        res.status(StatusCodes.CREATED).json({message:'unliked', payload:null})
    } catch (err) {
        next(err)
    }
}


export {
    like,
    unlike
}