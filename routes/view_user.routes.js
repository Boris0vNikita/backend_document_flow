module.exports = app => {
  const view_user = require("../controllers/view_user.controller");
  var router = require("express").Router();
  // Retrieve all view_user
  router.get("/", view_user.findAll);
  // Retrieve a single view_user with id
  router.get("/:id", view_user.findOne);
  app.use('/api/view_user', router);
};