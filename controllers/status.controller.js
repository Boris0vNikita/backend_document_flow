const db = require("../models");
const Status_document = db.status;
const Op = db.Sequelize.Op;
// Create and Save a new Status_document
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_status) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Status_document
  const status_document = {
    id_status: req.body.id_status,
    name_status: req.body.name_status,

  };
  // Save Status_document in the database
  Status_document.create(status_document)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Status_document."
      });
    });
};

// Retrieve all Status_document from the database.
exports.findAll = (req, res) => {
  const id_status = req.query.id_status;
  var condition = id_status ? { id_status: { [Op.iLike]: `%${id_status}%` } } : null;
  Status_document.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Status_document."
      });
    });
};
// Find a single Status_document with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Status_document.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Status_document with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Status_document with id=" + id
      });
    });
};
// Update a Status_document by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Status_document.update(req.body, {
    where: { id_status: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Status_document was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Status_document with id=${id}. Maybe Status_document was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Status_document with id=" + id
      });
    });
};
// Delete a Status_document with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Status_document.destroy({
    where: { id_status: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Status_document was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Status_document with id=${id}. Maybe Status_document was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User_position with id=" + id
      });
    });
};
// Delete all Status_document from the database.
exports.deleteAll = (req, res) => {
  Status_document.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Status_documents were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Status_documents."
      });
    });
};