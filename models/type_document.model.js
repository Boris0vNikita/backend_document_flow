module.exports = (sequelize, Sequelize) => {
  const TypeDoc = sequelize.define("type_documents", {
    id_type_document: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name_type: {
      type: Sequelize.STRING
    }
  },
    {
      tableName: 'type_document',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return TypeDoc;
};