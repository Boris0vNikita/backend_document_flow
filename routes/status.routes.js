module.exports = app => {
  const status_document = require("../controllers/status.controller");
  var router = require("express").Router();
  // Create a new status_document
  router.post("/", status_document.create);
  // Retrieve all status_document
  router.get("/", status_document.findAll);
  // Retrieve a single status_document with id
  router.get("/:id", status_document.findOne);
  // Update a status_document with id
  router.put("/:id", status_document.update);
  // Delete a status_document with id
  router.delete("/:id", status_document.delete);
  // Create a new status_document
  router.delete("/", status_document.deleteAll);
  app.use('/api/status', router);
};