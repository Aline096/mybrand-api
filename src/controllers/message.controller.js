import Message from '../models/message.model';
import { StatusCodes } from 'http-status-codes';

// Creating a message to the database
const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(StatusCodes.OK).json({status: StatusCodes.OK, message:'your query is sent', payload: message})
    } catch (error) {
        res.status(500). send({error: error.message})
    }
}
// getting all the messages from the database
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json(messages)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
// retrieving a particular message from the database.
const getMessage = async (req, res) => {
    try {
        const message = await Message.findById({_id: req.params.id})
        res.send(message)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
// Delete message from the database

const deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete({_id: req.params.id});
        res.status(200).send("Message deleted successfully")
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export {
    createMessage,
    getMessages,
    getMessage,
    deleteMessage
}