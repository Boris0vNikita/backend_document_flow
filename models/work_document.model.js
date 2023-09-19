module.exports = (sequelize, Sequelize) => {
  const Work_document = sequelize.define("work_documents", {
    id_work_document: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_document: {
      type: Sequelize.INTEGER
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
    id_parent: {
      type: Sequelize.INTEGER
    },
    id_status: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    painting: {
      type: Sequelize.BOOLEAN
    },
    complete_date: {
      type: Sequelize.DATE
    },
    explanation: {
      type: Sequelize.STRING
    }
  },
    {
      tableName: 'work_document',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return Work_document;
};