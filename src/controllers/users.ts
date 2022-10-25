import { Request, Response } from 'express'
import usersServices from '../services/users'


const getAll = async (_req: Request, res: Response ) => {
    
    const response = await usersServices.getAll()
    res.send(response)

}

const createUser = async (req: Request, res: Response) => {
    const response = await usersServices.createUser(req.body)
    res.send(response)
}

export { getAll, createUser}
