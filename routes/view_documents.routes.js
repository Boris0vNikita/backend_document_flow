module.exports = app => {
  const view_documents = require("../controllers/view_documents.controller");
  var router = require("express").Router();
  // Retrieve all view_documents
  router.get("/", view_documents.findAll);
  // Retrieve a single view_documents with id
  router.get("/:id", view_documents.findOne);
  app.use('/api/view_document', router);
};