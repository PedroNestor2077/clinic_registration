import { useQuery } from 'react-query'
import { findAddress } from '../../services/address'

const useFindAddress = (search?: string) =>
  useQuery(['findAddress', search], () => findAddress(String(search)), {
    retry: 2,
    refetchOnWindowFocus: false,
  })

export { useFindAddress }
