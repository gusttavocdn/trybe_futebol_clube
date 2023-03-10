import { Model, DataTypes } from 'sequelize';
import db from '.';

class MatchModel extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchModel.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team',
      references: {
        model: 'teams',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team_goals',
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'away_team',
      references: {
        model: 'teams',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'away_team_goals',
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'in_progress',
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'matches',
    timestamps: false,
    scopes: {
      inProgress: {
        where: {
          inProgress: true,
        },
      },
      notInProgress: {
        where: {
          inProgress: false,
        },
      },
    },
  },
);

export default MatchModel;
