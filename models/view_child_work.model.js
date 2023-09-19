module.exports = (sequelize, Sequelize) => {
    const View_child_work = sequelize.define(
      "view_child_works",
      {
        id_work_document: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        id_parent: {
          type: Sequelize.INTEGER,
        },
        id_document: {
          type: Sequelize.INTEGER,
        },
        name_document: {
          type: Sequelize.STRING,
        },
        id_user: {
          type: Sequelize.INTEGER,
        },
        fio_user: {
            type: Sequelize.STRING,
        },
      },
      {
        tableName: "view_child_work",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
    return View_child_work;
  };
  