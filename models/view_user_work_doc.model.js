module.exports = (sequelize, Sequelize) => {
  const view_user_work_doc = sequelize.define("view_user_work_doc", {
    id_work_document: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name_document: {
      type: Sequelize.STRING
    },
    id_document: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    },
    fio_user: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATE
    },
    end_date: {
      type: Sequelize.DATE
    },
    id_user_init: {
      type: Sequelize.INTEGER
    },
    fio_init: {
      type: Sequelize.STRING
    },
  },
    {
      tableName: 'view_user_work_doc',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return view_user_work_doc;
};