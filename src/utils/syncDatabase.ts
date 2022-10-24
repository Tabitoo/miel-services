import db from '../models'

db.sequelize.sync().then(() => {
    console.log('Base de datos sincronizada')
})
