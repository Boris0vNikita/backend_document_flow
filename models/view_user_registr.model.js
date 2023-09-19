module.exports = (sequelize, Sequelize) => {
    const view_user_registr = sequelize.define("view_users_registr", {
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
      name_department: {
        type: Sequelize.STRING
      },
      id_department: {
        type: Sequelize.INTEGER
      },
    },
      {
        tableName: 'view_user_registr',
        createdAt: false,
        updatedAt: false,
        timestamps: false
      }
    );
    return view_user_registr;
  };