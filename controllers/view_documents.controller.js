const db = require("../models");
const View_documents = db.view_documents;
const Op = db.Sequelize.Op;

// Retrieve all View_documents from the database.
exports.findAll = (req, res) => {
  const id_document = req.query.id_document;
  var condition = id_document ? { id_document: { [Op.iLike]: `%${id_document}%` } } : null;
  View_documents.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving View_documents."
      });
    });
};

// Find a single View_documents with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_documents.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find View_documents with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving View_documents with id=" + id
      });
    });
};
