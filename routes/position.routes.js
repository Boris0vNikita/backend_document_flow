module.exports = app => {
  const position = require("../controllers/position.controller.js");
  var router = require("express").Router();
  // Create a new position
  router.post("/", position.create);
  // Retrieve all positions
  router.get("/", position.findAll);
  // Retrieve a single position with id
  router.get("/:id", position.findOne);
  // Update a position with id
  router.put("/:id", position.update);
  // Delete a position with id
  router.delete("/:id", position.delete);
  // Create a new position
  router.delete("/", position.deleteAll);
  app.use('/api/position', router);
};