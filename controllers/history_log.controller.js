const db = require("../models");
const History_log = db.history_log;
const Op = db.Sequelize.Op;
// Create and Save a new Type_document
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_history_log) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a History_log
  const history_log = {
    id_history_log: req.body.id_history_log,
    id_user: req.body.id_user,
    date_login: req.body.date_login,
    status_history_log: req.body.status_history_log,

  };
  // Save History_log in the database
  History_log.create(history_log)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the History_log."
      });
    });
};

// Retrieve all History_log from the database.
exports.findAll = (req, res) => {
  const id_history_log = req.query.id_history_log;
  var condition = id_history_log ? { id_history_log: { [Op.iLike]: `%${id_history_log}%` } } : null;
  History_log.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving History_log."
      });
    });
};
// Find a single History_log with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  History_log.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find History_log with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving History_log with id=" + id
      });
    });
};
// Update a History_log by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  History_log.update(req.body, {
    where: { id_history_log: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "History_log was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update History_log with id=${id}. Maybe History_log was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating History_log with id=" + id
      });
    });
};
// Delete a History_log with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  History_log.destroy({
    where: { id_history_log: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "History_log was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete History_log with id=${id}. Maybe History_log was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Type_document with id=" + id
      });
    });
};
// Delete all Type_document from the database.
exports.deleteAll = (req, res) => {
  History_log.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} History_log were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all History_log."
      });
    });
};