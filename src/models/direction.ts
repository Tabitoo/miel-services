'use strict';
import DirectionsAttributes from '../interfaces/directions'

import {
  Model
} from 'sequelize'
module.exports = (sequelize: any, DataTypes: any) => {
  class Direction extends Model<DirectionsAttributes>
  implements DirectionsAttributes {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: number;
    street!: string;
    nro!: number;
    codPostal!: string;
    localidad!: string;


    static associate(models: any) {
      // define association here
        Direction.belongsTo(models.User)
    }
  }
  Direction.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nro: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codPostal: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Direction',
    timestamps: false
  });
  return Direction;
};
