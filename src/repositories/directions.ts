import db from '../models'
import { DirectionsBody } from '../interfaces/directions'

const getAll = async (): Promise<any> => {
    try {
        return await db.Directions.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
} 

const createDirections = async (body: DirectionsBody): Promise<any> => {
    try {
         return await db.Directions.create(body)
    } catch (error) { 
        console.log('create user error', error)
    }
}

export default {
    getAll,
    createDirections
}
