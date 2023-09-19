module.exports = (sequelize, Sequelize) => {
  const HistoryLog = sequelize.define("history_logs", {
    id_history_log: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    id_user: {
      type: Sequelize.INTEGER
    },
    date_login: {
      type: Sequelize.DATE
    },
    status_history_log: {
      type: Sequelize.BOOLEAN
    },

  },
    {
      tableName: 'history_log',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    }
  );
  return HistoryLog;
};