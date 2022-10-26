import db from '../models'
import { PhoneBody} from '../interfaces/phone'

const getAll = async (): Promise<any> => {
    try {
        return await db.Phones.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
} 

const createPhones = async (body: PhoneBody): Promise<any> => {
    try {
         return await db.Phones.create(body)
    } catch (error) { 
        console.log('create user error', error)
    }
}

export default {
    getAll,
    createPhones
}
