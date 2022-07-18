import { useQuery } from 'react-query'
import showMessage from '../../messages'
import { findMany, findByAddress } from '../../services/clinics'

const useFindClinics = () =>
  useQuery('findClinics', findMany, {
    retry: 2,
    refetchOnWindowFocus: false,
    onError: () => showMessage('Erro ao buscar.', true),
  })

const useFindClinicByAddress = (address?: string) =>
  useQuery(['findClinicByAddress', address], () => findByAddress(String(address)), {
    retry: 2,
    refetchOnWindowFocus: false,
    onError: () => showMessage('Erro ao buscar.', true),
  })

export { useFindClinics, useFindClinicByAddress }
