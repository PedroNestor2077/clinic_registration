export interface Messages {
  [key: string]: {
    success: boolean
    code: number
    message: string
  }
}

const messages: Messages = {
  serverError: {
    success: false,
    code: 500,
    message: 'Server Error',
  },
  success: {
    success: true,
    code: 200,
    message: 'Success',
  },
  invalidPayload: {
    success: false,
    code: 400,
    message: 'Invalid payload.',
  },
  externalServiceError: {
    success: false,
    code: 424,
    message: 'External service error.',
  },
}

export default messages
