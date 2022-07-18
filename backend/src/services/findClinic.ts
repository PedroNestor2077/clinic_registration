import AddressModel from '../models/Address'
import ClinicModel from '../models/Clinic'
import { Op } from 'sequelize'

const findByAddress = async (address: string) => {
  try {
    const query = `${address}`

    const result = await AddressModel.findAll({
      where: {
        [Op.or]: [
          { Logradouro: { [Op.iLike]: query } },
          { Bairro: { [Op.iLike]: query } },
          { Cidade: { [Op.iLike]: query } },
          { Estado: { [Op.iLike]: query } },
          { Pais: { [Op.iLike]: query } },
        ],
      },

      include: [
        {
          model: ClinicModel,
        },
      ],
    })

    return result
  } catch (error) {
    console.error(`Catch error on findByAdress. Error: ${JSON.stringify(error)}`)
    return false
  }
}

export { findByAddress }
