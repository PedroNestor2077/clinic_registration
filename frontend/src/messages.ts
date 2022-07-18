import { toast } from 'react-toastify'

const showMessage = (message: string, isError: boolean) => {
  if (isError) {
    return toast.error(message, {
      position: 'top-right',
    })
  }
  return toast.info(message)
}

export default showMessage
