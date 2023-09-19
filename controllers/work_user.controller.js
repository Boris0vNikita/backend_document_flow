const db = require("../models");
const Work_user = db.work_user;
const Op = db.Sequelize.Op;
// Create and Save a new Work_user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_work_user) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Work_user
  const work_user = {
    id_work_user: req.body.id_work_user,
    id_work_document: req.body.id_work_document,
    id_user: req.body.id_user,
  };
  // Save Work_user in the database
  Work_user.create(work_user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Work_user."
      });
    });
};

// Retrieve all Work_users from the database.
exports.findAll = (req, res) => {
  const id_work_user = req.query.id_work_user;
  var condition = id_work_user ? { id_work_user: { [Op.iLike]: `%${id_work_user}%` } } : null;
  Work_user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Work_users."
      });
    });
};
// Find a single Work_user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Work_user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Work_user with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Work_user with id=" + id
      });
    });
};
// Update a Work_user by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Work_user.update(req.body, {
    where: { id_work_user: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_user was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Work_user with id=${id}. Maybe Work_user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Work_user with id=" + id
      });
    });
};
// Delete a Work_user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Work_user.destroy({
    where: { id_work_user: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_user was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Work_user with id=${id}. Maybe Work_user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Work_user with id=" + id
      });
    });
};
// Delete all Work_users from the database.
exports.deleteAll = (req, res) => {
  Work_user.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Work_users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Work_users."
      });
    });
};