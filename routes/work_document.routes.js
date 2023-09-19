module.exports = app => {
  const work_document = require("../controllers/work_document.controller.js");
  var router = require("express").Router();
  // Create a new work_document
  router.post("/", work_document.create);
  // Retrieve all work_documents
  router.get("/", work_document.findAll);
  // Retrieve a single work_document with id
  router.get("/:id", work_document.findOne);
  // Update a work_document with id
  router.put("/:id", work_document.update);
  // Delete a work_document with id
  router.delete("/:id", work_document.delete);
  // Create a new work_document
  router.delete("/", work_document.deleteAll);
  app.use('/api/work', router);
};