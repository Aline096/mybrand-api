import { StatusCodes } from "http-status-codes";
import { BadRequestHttpError } from "../../common/errors/badRequestHttpError";
import { messageSchema } from "./message.schema"


export const messageValidation = async (req, res, next) => {
  try {
    const values = await messageSchema.validate(req.body);
        if(values.error) {
            throw new BadRequestHttpError(StatusCodes.BAD_REQUEST, values.error.details[0].message)
        } else {
            next()
        }
  } catch (error) {
    next(error);
  }
};
