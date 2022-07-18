import SequelizeInstance from '../config/database'
import { DataTypes } from 'sequelize'

const ClinicModel = SequelizeInstance.define(
  'Clinic',
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
)
export default ClinicModel
