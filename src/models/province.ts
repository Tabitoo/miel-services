'use strict';

import ProvinceAttributes from '../interfaces/province'

import {
  Model
} from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Province extends Model<ProvinceAttributes> 
  implements ProvinceAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;


    static associate(models: any) {
      // define association here
        Province.hasMany(models.User)
    }
  }
  Province.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Province',
    timestamps: false
  });
  return Province;
};
