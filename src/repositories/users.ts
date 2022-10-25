import db from '../models'
import UserAttributes from '../interfaces/users'

const getAll = async (): Promise<any> => {
    try {
        return await db.User.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
} 

const createUser = async (body: UserAttributes): Promise<any> => {
    try {
         return await db.User.create(body)
    } catch (error) { 
        console.log('create user error', error)
    }
}

export default {
    getAll,
    createUser
}

