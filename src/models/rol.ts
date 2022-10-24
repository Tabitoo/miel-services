'use strict';

import RolAttributes from '../interfaces/rol'

import {
  Model
} from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Rol extends Model<RolAttributes>  implements RolAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number;
    name!: string;


    static associate(models: any) {
      // define association here
        Rol.hasMany(models.User)
    }
  }
  Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};
