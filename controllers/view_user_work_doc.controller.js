const db = require("../models");
const View_user_work_doc = db.view_user_work_doc;
const Op = db.Sequelize.Op;

// Retrieve all View_user_work_doc from the database.
exports.findAll = (req, res) => {
  const id_work_document = req.query.id_work_document;
  var condition = id_work_document ? { id_work_document: { [Op.iLike]: `%${id_work_document}%` } } : null;
  View_user_work_doc.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving View_user_work_doc."
      });
    });
};

// Find a single View_user_work_doc with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_user_work_doc.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find View_user_work_doc with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving View_user_work_doc with id=" + id
      });
    });
};
