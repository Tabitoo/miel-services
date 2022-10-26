import { PhoneAttributes} from './phone'
import { DirectionsAttributes } from './directions'


interface UserAttributes {
    id?: number,
    name: string,
    lastName: string,
    dni: number,
    typeDni: string,
    fecha: string
    email: string,
    password: string
}

interface UserRequestBody extends UserAttributes {
    street: string,
    nro: number,
    codPostal: string,
    localidad: string,
    phoneNumber: number,
    provinceId: number
}


interface UserInsertBody extends UserAttributes {
    rolId?: number
    provinceId: number
    phones: Array<PhoneAttributes>,
    directions: Array<DirectionsAttributes>

    
}

export { UserAttributes, UserInsertBody, UserRequestBody }
