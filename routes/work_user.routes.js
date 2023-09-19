module.exports = app => {
  const work_user = require("../controllers/work_user.controller.js");
  var router = require("express").Router();
  // Create a new work_user
  router.post("/", work_user.create);
  // Retrieve all work_users
  router.get("/", work_user.findAll);
  // Retrieve a single work_user with id
  router.get("/:id", work_user.findOne);
  // Update a work_user with id
  router.put("/:id", work_user.update);
  // Delete a work_user with id
  router.delete("/:id", work_user.delete);
  // Create a new work_user
  router.delete("/", work_user.deleteAll);
  app.use('/api/work_user', router);
};