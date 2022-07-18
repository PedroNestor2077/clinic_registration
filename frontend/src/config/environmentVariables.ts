const getEnvironmentVariableOrThrow = (name: string): string => {
  const environmentValue = process.env[name]
  if (environmentValue) return environmentValue
  else throw new Error(`Missing '${name}' environment variable`)
}

const getNumericEnvironemntVariableOrThrow = (name: string): number => {
  const stringValue = getEnvironmentVariableOrThrow(name)
  if (isNaN(Number(stringValue))) throw new Error(`Variable '${name}' is not numeric`)
  return Number(stringValue)
}

const getEnvironment = () => getEnvironmentVariableOrThrow('ENV')

const getPort = () => getNumericEnvironemntVariableOrThrow('REACT_APP_PORT')

const getBackendApiUrl = () => getEnvironmentVariableOrThrow('REACT_APP_BACKEND_API_URL')

export { getPort, getEnvironment, getBackendApiUrl }
