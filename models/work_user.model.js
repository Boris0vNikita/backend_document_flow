module.exports = (sequelize, Sequelize) => {
  const Work_user = sequelize.define("work_user", {
    id_work_user: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_work_document: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    },
  },
    {
      tableName: 'work_user',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return Work_user;
};