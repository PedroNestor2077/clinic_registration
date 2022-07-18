import express from 'express'
import createClinic from './controllers/createClinic'
import findAddress from './controllers/findAddress'
import findClinicByAddress from './controllers/findClinicByAddress'
import Middleware from './middleware'
const router = express.Router()

router.get('/ping', (_, res) => res.send('pong'))

router.post('/clinic', (request, response) => Middleware(request, response, createClinic))

router.get('/clinic', (request, response) => Middleware(request, response, findClinicByAddress))

router.get('/address', (request, response) => Middleware(request, response, findAddress))

export default router
