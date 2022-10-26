import PhoneRepository from '../repositories/phones'
import { PhoneBody } from '../interfaces/phone'

const getAll = async (): Promise<any> => {
    return await PhoneRepository.getAll()
}

const createPhone = async (body: PhoneBody): Promise<any> => {
    return await PhoneRepository.createPhones(body)
}

export default { getAll, createPhone }
