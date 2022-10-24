'use strict';
import UserAttributes from '../interfaces/users'

import {
  Model
} from 'sequelize'
module.exports = (sequelize: any, DataTypes: any ) => {
  class User extends Model<UserAttributes> implements UserAttributes {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number;
    name!: string;
    lastName!: string;
    dni!: number;
    typeDni!: string;
    fecha!: string;
    email!: string;
    password!: string;
    

    static associate(models: any) {
        
      // define association here
        User.hasMany(models.Phone)

        User.hasMany(models.Direction)

        User.belongsTo(models.Rol)

        User.belongsTo(models.Province)
        
    }
  }
  User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeDni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
