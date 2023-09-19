module.exports = app => {
  const user_position = require("../controllers/user_position.controller.js");
  var router = require("express").Router();
  // Create a new user_position
  router.post("/", user_position.create);
  // Retrieve all user_position
  router.get("/", user_position.findAll);
  // Retrieve a single user_position with id
  router.get("/:id", user_position.findOne);
  // Update a user_position with id
  router.put("/:id", user_position.update);
  // Delete a user_position with id
  router.delete("/:id", user_position.delete);
  // Create a new user_position
  router.delete("/", user_position.deleteAll);
  app.use('/api/user_position', router);
};