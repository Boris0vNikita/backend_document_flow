const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.view_info_work_doc = require("../models/view_info_work_doc.model")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.document = require("../models/document.model.js")(sequelize, Sequelize);
db.work_document = require("../models/work_document.model.js")(sequelize, Sequelize);
db.user_position = require("../models/user_position.model")(sequelize, Sequelize);
db.position = require("../models/position.model")(sequelize, Sequelize);
db.history_log = require("../models/history_log.model")(sequelize, Sequelize);
db.status = require("../models/status.model")(sequelize, Sequelize);
db.type_document = require("../models/type_document.model")(sequelize, Sequelize);
db.department = require("../models/department.model")(sequelize, Sequelize);

db.view_user = require("../models/view_user.model")(sequelize, Sequelize);
db.work_user = require("../models/work_user.model")(sequelize, Sequelize);
db.view_user_work_doc = require("../models/view_user_work_doc.model")(sequelize, Sequelize);
db.view_documents = require("../models/view_documents.model")(sequelize, Sequelize);
db.view_work_department = require("../models/view_work_department.model")(sequelize, Sequelize);
db.view_user_registr = require("../models/view_user_registr.model")(sequelize, Sequelize);
db.view_child_work= require("../models/view_child_work.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_role",
  foreignKey: "id_role",
  otherKey: "id_user"
});
db.user.belongsToMany(db.role, {
  through: "user_role",
  foreignKey: "id_user",
  otherKey: "id_role"
});
//sequelize.sync();

db.ROLES = ["user", "admin", "moderator"];
module.exports = db;