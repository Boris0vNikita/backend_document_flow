const db = require("../models");
const Work_document = db.work_document;
const Op = db.Sequelize.Op;
// Create and Save a new Work_document
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_work_document) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Work_document
  const work_document = {
    id_work_document: req.body.id_work_document,
    id_document: req.body.id_document,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    id_user_init: req.body.id_user_init,
    id_parent: req.body.id_parent,
    id_status: req.body.id_status,
    description: req.body.description,
    painting: req.body.painting,
    complete_date: req.body.complete_date,
    explanation: req.body.explanation,
  };
  // Save Work_document in the database
  Work_document.create(work_document)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Work_document."
      });
    });
};

// Retrieve all Work_documents from the database.
exports.findAll = (req, res) => {
  const id_work_document = req.query.id_work_document;
  var condition = id_work_document ? { id_work_document: { [Op.iLike]: `%${id_work_document}%` } } : null;
  Work_document.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving work_documents."
      });
    });
};
// Find a single Work_document with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Work_document.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Work_document with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Work_document with id=" + id
      });
    });
};
// Update a Work_document by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Work_document.update(req.body, {
    where: { id_work_document: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_document was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Work_document with id=${id}. Maybe Work_document was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Work_document with id=" + id
      });
    });
};
// Delete a Work_document with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Work_document.destroy({
    where: { id_work_document: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_document was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Work_document with id=${id}. Maybe Work_document was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Work_document with id=" + id
      });
    });
};
// Delete all Work_documents from the database.
exports.deleteAll = (req, res) => {
  Work_document.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Work_documents were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all work_documents."
      });
    });
};