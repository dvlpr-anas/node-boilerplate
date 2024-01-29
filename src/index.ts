require('dotenv').config()
import 'reflect-metadata'

import bodyParser from 'body-parser'

import express, { Express, NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import AppDataSource from './config/typeorm'
import routes from './modules'
import { commanConfig } from './config/env-config/get-comman'
import { globalErrorHandler } from './utils/global-error-handler'
import { throwError } from './utils/throw-error'


const app: Express = express()

app.get('/', (req: Request, res: Response) => res.send('Hello NodeJS!'))

app.use(morgan<Request, Response>('dev'))
app.use(helmet())
app.use(bodyParser.json())

app.use('/api/v1', routes)
app.all('**', (req: Request, res: Response, next: NextFunction) => {
    throwError(`Requested URL ${req.path} not found!`, next, 404)
})

AppDataSource.initialize()
    .then(() => console.log('Database connected'))
    .catch((error) => console.error(error))

app.use(globalErrorHandler)

const PORT: number = commanConfig().port || 3001
app.listen(PORT, () => console.log(`LISTNING ON PORT ${PORT}`))
