import backendApi from '../config/BackendApiConfig'

const findAddress = async (search: string) => {
  const { data } = await backendApi.get('/address', {
    params: {
      search,
    },
  })

  return data.result[0]
}

export { findAddress }
