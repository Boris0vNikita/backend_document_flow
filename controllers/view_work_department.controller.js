const db = require("../models");
const View_work_department = db.view_work_department;
const Op = db.Sequelize.Op;

// Retrieve all view_work_department from the database.
exports.findAll = (req, res) => {
  const id_department = req.query.id_department;
  var condition = id_department ? { id_department: { [Op.iLike]: `%${id_department}%` } } : null;
  View_work_department.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving view_work_department."
      });
    });
};

// Find a single view_work_department with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_work_department.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find view_work_department with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving view_work_department with id=" + id
      });
    });
};
