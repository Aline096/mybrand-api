import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({status: 200, message: "Welcome to my brand API"})
})

export default router