import db from '../models'

db.sequelize.sync({force : true }).then(() => {
    console.log('Base de datos sincronizada')
})
