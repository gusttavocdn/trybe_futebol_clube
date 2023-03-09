module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("teams", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "team_name",
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("teams");
  },
};
