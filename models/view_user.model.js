module.exports = (sequelize, Sequelize) => {
  const view_user = sequelize.define("view_users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    fio: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    name_position: {
      type: Sequelize.STRING
    },
    id_position: {
      type: Sequelize.INTEGER,
    },
  },
    {
      tableName: 'view_user',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return view_user;
};