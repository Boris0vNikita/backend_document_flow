module.exports = (sequelize, Sequelize) => {
  const User_position = sequelize.define("user_positions", {
    id_user_position: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_user: {
      type: Sequelize.INTEGER
    },
    id_position: {
      type: Sequelize.INTEGER
    }
  },
    {
      tableName: 'user_position',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return User_position;
};