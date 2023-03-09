import { Model, DataTypes } from 'sequelize';

import db from '.';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username',
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'role',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'users',
    timestamps: false,
  },
);

/**
 * `Workaround` para aplicar as associations em TS:
 * Associations 1:N devem ficar em uma das instâncias de modelo
 * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default User;
