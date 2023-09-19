module.exports = app => {
    const view_user_registr = require("../controllers/view_user_registr.controller");
    var router = require("express").Router();
    // Retrieve all view_user_registr
    router.get("/", view_user_registr.findAll);
    // Retrieve a single view_user_registr with id
    router.get("/:id", view_user_registr.findOne);
    app.use('/api/view_user_registr', router);
  };