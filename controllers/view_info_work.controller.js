const db = require("../models");
const View_info_work = db.view_info_work;
const Op = db.Sequelize.Op;

// Retrieve all View_info_work from the database.
exports.findAll = (req, res) => {
  const id_work_document = req.query.id_work_document;
  var condition = id_work_document ? { id_work_document: { [Op.iLike]: `%${id_work_document}%` } } : null;
  View_info_work.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving View_info_work."
      });
    });
};

// Find a single View_info_work with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_info_work.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find View_info_work with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving View_info_work with id=" + id
      });
    });
};
