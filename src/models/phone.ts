'use strict';


import PhoneAttributes from '../interfaces/phone'

import {
  Model
} from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Phone extends Model<PhoneAttributes> 
  implements PhoneAttributes {
      
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    number!: number;
    static associate(models: any) {
      // define association here
        Phone.belongsTo(models.User)
    }
  }
  Phone.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Phone',
    timestamps: false
  });
  return Phone;
};
