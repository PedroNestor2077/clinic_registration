import { Request, Response } from 'express'
import messages from './messages'

export type EndpointMethod<T> = (request: Request) => Promise<T>

export default async <T>(request: Request, response: Response, controller: EndpointMethod<T>) => {
  try {
    const result = await controller(request)
    response.status(messages['success'].code).send({ info: messages['success'], result })
  } catch (error: any) {
    console.log(error)
    // Error messages will be listed on messages
    if (messages[error.message]) {
      response.status(messages[error.message].code).send({ info: messages[error.message], result: {} })
    } else {
      response.status(messages['serverError'].code).send({ info: messages['serverError'], result: {} })
    }
  }
}
