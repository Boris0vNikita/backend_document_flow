module.exports = app => {
    const department = require("../controllers/department.controller.js");
    var router = require("express").Router();
    // Create a new department
    router.post("/", department.create);
    // Retrieve all departments
    router.get("/", department.findAll);
    // Retrieve a single department with id
    router.get("/:id", department.findOne);
    // Update a department with id
    router.put("/:id", department.update);
    // Delete a department with id
    router.delete("/:id", department.delete);
    // Create a new department
    router.delete("/", department.deleteAll);
    app.use('/api/department', router);
  };