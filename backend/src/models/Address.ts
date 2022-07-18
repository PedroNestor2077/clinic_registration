import SequelizeInstance from '../config/database'
import { DataTypes } from 'sequelize'
import ClinicModel from './Clinic'

const AddressModel = SequelizeInstance.define(
  'Address',
  {
    Logradouro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Bairro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

ClinicModel.hasOne(AddressModel, { constraints: true })
AddressModel.belongsTo(ClinicModel, { constraints: true })
export default AddressModel
