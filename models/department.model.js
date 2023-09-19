module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define("departments", {
      id_department: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name_department: {
        type: Sequelize.STRING
      }
    },
      {
        tableName: 'department',
        createdAt: false,
        updatedAt: false,
        timestamps: false
      }
    );
    return Department;
  };