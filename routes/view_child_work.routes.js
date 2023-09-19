module.exports = app => {
    const view_child_work = require("../controllers/view_child_work.controller");
    var router = require("express").Router();
    // Retrieve all view_child_work
    router.get("/", view_child_work.findAll);
    // Retrieve a single view_child_work with id
    router.get("/:id", view_child_work.findOne);
    app.use('/api/view_child_work', router);
  };