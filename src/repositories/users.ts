import db from '../models'
import { UserInsertBody } from '../interfaces/users'
import directions from './directions';
import phones from './phones';

const getAll = async (): Promise<any> => {
    try {
        return await db.User.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
} 

const createUser = async (body: UserInsertBody): Promise<any> => {
    try {
         return await db.User.create(body, { include: [db.Phone, db.Province]})
    } catch (error) { 
        console.log('create user error', error)
    }
}

export default {
    getAll,
    createUser
}

