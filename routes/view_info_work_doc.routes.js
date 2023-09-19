module.exports = app => {
  const view_info_work_doc = require("../controllers/view_info_work_doc.controller");
  var router = require("express").Router();
  // Retrieve all view_info_work_doc
  router.get("/", view_info_work_doc.findAll);
  // Retrieve a single view_info_work_doc with id
  router.get("/:id", view_info_work_doc.findOne);
  app.use('/api/info_work_doc', router);
};