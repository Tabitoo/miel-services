import userRepository from '../repositories/users'
//import phonesRepository from '../repositories/phones'
//import directionsRepository from '../repositories/directions'
import { UserRequestBody, UserInsertBody} from '../interfaces/users'

const getAll = async (): Promise<any> => {
    return await userRepository.getAll()
}

const createUser = async (body: UserRequestBody): Promise<any> => {

    const newUser: UserInsertBody = {
        name: body.name,
        lastName: body.lastName,
        dni: body.dni,
        typeDni: body.typeDni,
        fecha: body.fecha,
        email: body.email,
        password: body.password,
        rolId: 2,
        provinceId: body.provinceId,
        phones : [{
            number: body.phoneNumber
        }],
        directions: [{
            street: body.street,
            nro: body.nro,
            codPostal: body.codPostal,
            localidad: body.localidad
        }]

    }

    return await userRepository.createUser(newUser)








}

export default { getAll, createUser }
 
