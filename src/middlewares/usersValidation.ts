import { body, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express';

const isValid = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            msg: "Body params invalid",
            errors: errors.array()
        })
    }
    next()

}

const validationsArray = [
    body('name').notEmpty().isString(),
    body('lastName').notEmpty().isString(),
    body('dni').notEmpty().isNumeric(),
    body('typeDni').notEmpty().isString(),
    body('fecha').notEmpty().isString(),
    body('email').notEmpty().isEmail(),
    body('phone').notEmpty().isNumeric(),
    body('direction').notEmpty().isString(),
    body('province').notEmpty().isString(),
    body('password').isLength({ min : 5}),
    isValid
]

export default validationsArray
