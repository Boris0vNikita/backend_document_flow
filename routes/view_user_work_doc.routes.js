module.exports = app => {
  const view_user_work_doc = require("../controllers/view_user_work_doc.controller");
  var router = require("express").Router();
  // Retrieve all view_user_work_doc
  router.get("/", view_user_work_doc.findAll);
  // Retrieve a single view_user_work_doc with id
  router.get("/:id", view_user_work_doc.findOne);
  app.use('/api/user_work_doc', router);
};