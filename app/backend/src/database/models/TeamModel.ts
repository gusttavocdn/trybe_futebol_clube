import { Model, DataTypes } from 'sequelize';
import db from '.';
// import MatchModel from './SequelizeMatch';

class TeamModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamModel.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'team_name',
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'teams',
    timestamps: false,
  },
);

// MatchModel.belongsTo(TeamModel, {
//   foreignKey: 'homeTeam',
//   as: 'teamHome',
// });

// MatchModel.belongsTo(TeamModel, {
//   foreignKey: 'awayTeam',
//   as: 'teamAway',
// });

// TeamModel.hasMany(MatchModel, {
//   foreignKey: 'homeTeam',
//   as: 'teamsHome',
// });

// TeamModel.hasMany(MatchModel, {
//   foreignKey: 'awayTeam',
//   as: 'teamsAway',
// });

export default TeamModel;
