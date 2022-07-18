import Clinic from '../domain/Clinic'
import AddressModel from '../models/Address'
import ClinicModel from '../models/Clinic'

const create = async ({ Clinic: clinic, Address: address }: Clinic) => {
  try {
    const newClinic = await ClinicModel.create(clinic)
    await AddressModel.create({
      ...address,
      ClinicId: newClinic.getDataValue('id'),
    })

    return true
  } catch (error) {
    console.error(`Catch error on createClinicService. Error: ${JSON.stringify(error)}`)
    return false
  }
}

export default create
