import db from '../models'
import ProvinceAttributes from '../interfaces/province'

const getAll = async (): Promise<any> => {
    try {
        return await db.Provinces.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
} 

const createProvinces = async (body: ProvinceAttributes): Promise<any> => {
    try {
         return await db.Provinces.create(body)
    } catch (error) { 
        console.log('create user error', error)
    }
}

export default {
    getAll,
    createProvinces
}
