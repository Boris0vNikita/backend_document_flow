module.exports = app => {
  const type_document = require("../controllers/type_document.controller");
  var router = require("express").Router();
  // Create a new type_document
  router.post("/", type_document.create);
  // Retrieve all type_document
  router.get("/", type_document.findAll);
  // Retrieve a single type_document with id
  router.get("/:id", type_document.findOne);
  // Update a type_document with id
  router.put("/:id", type_document.update);
  // Delete a type_document with id
  router.delete("/:id", type_document.delete);
  // Create a new type_document
  router.delete("/", type_document.deleteAll);
  app.use('/api/type_document', router);
};