module.exports = (sequelize, Sequelize) => {
  const view_work_department = sequelize.define(
    "view_work_department",
    {
      id_department: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name_department: {
        type: Sequelize.STRING,
      },
      writing: {
        type: Sequelize.INTEGER,
      },
      nonwriting: {
        type: Sequelize.INTEGER,
      },
      anyone: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: "view_work_department",
      createdAt: false,
      updatedAt: false,
      timestamps: false,
    }
  );
  return view_work_department;
};
