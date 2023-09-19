const db = require("../models");
const Type_document = db.type_document;
const Op = db.Sequelize.Op;
// Create and Save a new Type_document
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_type_document) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Type_document
  const type_document = {
    id_type_document: req.body.id_type_document,
    name_type: req.body.name_type,

  };
  // Save Type_document in the database
  Type_document.create(type_document)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Type_document."
      });
    });
};

// Retrieve all Type_document from the database.
exports.findAll = (req, res) => {
  const id_type_document = req.query.id_type_document;
  var condition = id_type_document ? { id_type_document: { [Op.iLike]: `%${id_type_document}%` } } : null;
  Type_document.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Type_document."
      });
    });
};
// Find a single Type_document with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Type_document.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Type_document with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Type_document with id=" + id
      });
    });
};
// Update a Type_document by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Type_document.update(req.body, {
    where: { id_type_document: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Type_document was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Type_document with id=${id}. Maybe Type_document was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Type_document with id=" + id
      });
    });
};
// Delete a Type_document with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Type_document.destroy({
    where: { id_type_document: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Type_document was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Type_document with id=${id}. Maybe Type_document was not found!`
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
  Type_document.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Type_document were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Type_document."
      });
    });
};