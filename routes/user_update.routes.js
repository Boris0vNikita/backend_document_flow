module.exports = app => {
  const user = require("../controllers/user_update.controller.js");
  var router = require("express").Router();
  // Retrieve all users
  router.get("/", user.findAll);
  // Retrieve a single user with id
  router.get("/:id", user.findOne);
  // Update a user with id
  router.put("/:id", user.update);
  app.use('/api/users', router);
};