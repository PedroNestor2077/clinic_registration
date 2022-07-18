import { useMutation, useQueryClient } from 'react-query'
import showMessage from '../../messages'
import { createClinic } from '../../services/clinics'

export const useClinicMutation = () => {
  const client = useQueryClient()
  const { mutate, isLoading, isError }: any = useMutation(createClinic, {
    onSuccess: () => {
      client.invalidateQueries('findClinicByAddress')
      showMessage('Clinica cadastrada!', false)
    },
    onError: () => {
      showMessage('Erro ao cadastrar clinica.', true)
    },
  })
  return {
    mutate,
    isLoading,
    isError,
  }
}
