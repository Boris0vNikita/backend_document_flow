module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  },
    {
      tableName: 'role',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return Role;
};