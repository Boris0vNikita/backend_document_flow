module.exports = app => {
  const document = require("../controllers/document.controller.js");
  var router = require("express").Router();
  // Create a new document
  router.post("/", document.create);
  // Retrieve all documents
  router.get("/", document.findAll);
  // Retrieve a single document with id
  router.get("/:id", document.findOne);
  // Update a document with id
  router.put("/:id", document.update);
  // Delete a document with id
  router.delete("/:id", document.delete);
  // Create a new document
  router.delete("/", document.deleteAll);
  app.use('/api/document', router);
};