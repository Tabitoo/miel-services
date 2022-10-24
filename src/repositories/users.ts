import db from '../models'


const getAll = async () => {
    try {
        return await db.User.findAll();

    } catch(error) {
        console.error('hubo un error', error)
    }
    //return await db.User.findAll();
    //console.log(db);
} 


export default {
    getAll
}

