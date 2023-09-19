module.exports = app => {
    const view_work_department = require("../controllers/view_work_department.controller");
    var router = require("express").Router();
    // Retrieve all view_work_department
    router.get("/", view_work_department.findAll);
    // Retrieve a single view_work_department with id
    router.get("/:id", view_work_department.findOne);
    app.use('/api/view_work_department', router);
  };