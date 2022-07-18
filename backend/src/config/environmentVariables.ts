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

const getPort = () => getNumericEnvironemntVariableOrThrow('PORT')

const getDbUser = () => getEnvironmentVariableOrThrow('DB_USER')
const getDbPass = () => getEnvironmentVariableOrThrow('DB_PASS')
const getDefaultDb = () => getEnvironmentVariableOrThrow('DB_DEFAULT')
const getDbPort = () => getNumericEnvironemntVariableOrThrow('DB_PORT')
const getDbHost = () => getEnvironmentVariableOrThrow('DB_HOST')
const getMapsApiKey = () => getEnvironmentVariableOrThrow('MAPS_API_KEY')

export { getPort, getEnvironment, getDbUser, getDbPass, getDefaultDb, getDbPort, getMapsApiKey, getDbHost }
