module.exports = app => {
  const history_log = require("../controllers/history_log.controller");
  var router = require("express").Router();
  // Create a new history_log
  router.post("/", history_log.create);
  // Retrieve all history_log
  router.get("/", history_log.findAll);
  // Retrieve a single history_log with id
  router.get("/:id", history_log.findOne);
  // Update a history_log with id
  router.put("/:id", history_log.update);
  // Delete a history_log with id
  router.delete("/:id", history_log.delete);
  // Create a new history_log
  router.delete("/", history_log.deleteAll);
  app.use('/api/history_log', router);
};