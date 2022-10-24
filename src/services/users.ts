import userRepository from '../repositories/users'

const getAll = async (): Promise<any> => {
    return await userRepository.getAll()
}

export default { getAll }
 
