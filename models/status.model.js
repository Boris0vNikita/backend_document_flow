module.exports = (sequelize, Sequelize) => {
  const StatusDoc = sequelize.define("status", {
    id_status: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name_status: {
      type: Sequelize.STRING
    }
  },
    {
      tableName: 'status',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return StatusDoc;
};