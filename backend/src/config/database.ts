import { Sequelize } from 'sequelize'
import { getDbUser, getDbPass, getDefaultDb, getDbPort, getDbHost } from './environmentVariables'
const SequelizeInstance = new Sequelize({
  database: getDefaultDb(),
  username: getDbUser(),
  password: getDbPass(),
  host: getDbHost(),
  port: getDbPort(),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})

export const doConnection = async () => {
  try {
    await SequelizeInstance.authenticate()
    console.log('DB Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export const closeConnection = async () => {
  try {
    await SequelizeInstance.close()
    console.log('DB connection closed.')
  } catch (error) {
    console.error('DB connection close falied.')
  }
}

export default SequelizeInstance
