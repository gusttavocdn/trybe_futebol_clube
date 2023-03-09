module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "username",
        unique: true,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "role",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "email",
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "password",
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
