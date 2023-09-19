module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    patronymic: {
      type: Sequelize.STRING
    },
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    id_chief: {
      type: Sequelize.INTEGER
    },
    id_department: {
      type: Sequelize.INTEGER
    },
  },
    {
      tableName: 'user',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return User;
};