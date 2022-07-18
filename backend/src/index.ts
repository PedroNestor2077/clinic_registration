import Server from './server'
import { getEnvironment, getPort } from './config/environmentVariables'
import { doConnection as StartDbConnection } from './config/database'
const port = getPort()

Server.listen(port, async () => {
  console.info(`App up on port ${port}. Env: ${getEnvironment()}`)
  await StartDbConnection()
})
