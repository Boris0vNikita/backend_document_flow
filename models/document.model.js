module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define(
    "documents",
    {
      id_document: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name_document: {
        type: Sequelize.STRING,
      },
      id_type_document: {
        type: Sequelize.INTEGER,
      },
      way_to_file: {
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
      tableName: "document",
      createdAt: false,
      updatedAt: false,
      timestamps: false,
    }
  );
  return Document;
};
