import { Router } from 'express';
import { getAll } from '../controllers/users'

const router: Router = Router();

router.get("/", getAll);

export default  router 



