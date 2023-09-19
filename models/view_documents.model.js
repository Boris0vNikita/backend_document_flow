module.exports = (sequelize, Sequelize) => {
  const view_documents = sequelize.define(
    "view_documents",
    {
      id_document: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name_document: {
        type: Sequelize.STRING,
      },
      name_type: {
        type: Sequelize.STRING,
      },
      name_file: {
        type: Sequelize.STRING,
      },
      is_ready: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      tableName: "view_documents",
      createdAt: false,
      updatedAt: false,
      timestamps: false,
    }
  );
  return view_documents;
};
