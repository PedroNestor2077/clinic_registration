import axios from 'axios'
import { getBackendApiUrl } from './environmentVariables'

const url = getBackendApiUrl()
const backendApi = axios.create({ baseURL: url })

export default backendApi
