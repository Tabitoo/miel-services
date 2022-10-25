import { Router } from 'express';
import { getAll, createUser } from '../controllers/users'
import validationsArray from '../middlewares/usersValidation'

const router: Router = Router();

router.get("/", getAll);
router.post("/", validationsArray, createUser)

export default  router 

