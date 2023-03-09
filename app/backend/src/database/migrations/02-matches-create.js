module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matches", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "home_team",
        references: {
          model: "teams",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "home_team_goals",
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "away_team",
        references: {
          model: "teams",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "away_team_goals",
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: "in_progress",
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("matches");
  },
};
