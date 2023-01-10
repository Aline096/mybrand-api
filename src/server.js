import express from 'express'
const Strategy = require('passport-http-bearer').Strategy;
import routes from './routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
const swaggerUI = require("swagger-ui-express");
const docs = require('./documentation');
import { ApplicationError } from './common/errors/error';
import { StatusCodes } from 'http-status-codes';
import { BadRequestHttpError } from './common/errors/badRequestHttpError';
require('dotenv').config();

export const app = express()

const port = 3000

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.json());

app.use('/api', routes)

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

// This will catch all 404 errors with wild card "*"
app.all('*', (req, res, next) => {
  const error = new BadRequestHttpError(StatusCodes.NOT_FOUND, `Resource ${req.path} not found.`)
  next(error)
})

app.use((error, req, res, next) => {
  console.log(error)
  const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR
  res.status(statusCode).json({
    name: error.name,
    status: statusCode,
    message: error.message,
    error: error.description,
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`The app is listening on port ${port}`)
})
