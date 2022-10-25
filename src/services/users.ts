import userRepository from '../repositories/users'
import UserAttributes from '../interfaces/users'

const getAll = async (): Promise<any> => {
    return await userRepository.getAll()
}

const createUser = async (body: UserAttributes): Promise<any> => {
    return await userRepository.createUser(body)
}

export default { getAll, createUser }
 
