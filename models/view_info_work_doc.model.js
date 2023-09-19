module.exports = (sequelize, Sequelize) => {
  const view_info_work_doc = sequelize.define(
    "view_info_work_doc",
    {
      id_work_document: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      id_status: {
        type: Sequelize.INTEGER,
      },
      name_document: {
        type: Sequelize.INTEGER,
      },
      id_document: {
        type: Sequelize.INTEGER,
      },
      id_user_init: {
        type: Sequelize.INTEGER,
      },
      last_name_init: {
        type: Sequelize.STRING,
      },
      first_name_init: {
        type: Sequelize.STRING,
      },
      patronymic_init: {
        type: Sequelize.STRING,
      },
      name_status: {
        type: Sequelize.STRING,
      },
      name_type: {
        type: Sequelize.STRING,
      },
      name_file: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      explanation: {
        type: Sequelize.STRING,
      },
      complete_date: {
        type: Sequelize.DATE,
      },
      painting: {
        type: Sequelize.BOOLEAN,
      },
      id_user: {
        type: Sequelize.INTEGER,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      patronymic: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: "view_info_work_doc",
      createdAt: false,
      updatedAt: false,
      timestamps: false,
    }
  );
  return view_info_work_doc;
};
