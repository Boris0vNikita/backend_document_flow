module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("positions", {
    id_position: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name_position: {
      type: Sequelize.STRING
    }
  },
    {
      tableName: 'position',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return Position;
};