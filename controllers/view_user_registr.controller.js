const db = require("../models");
const View_user_registr = db.view_user_registr;
const Op = db.Sequelize.Op;

// Retrieve all View_user from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  View_user_registr.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving View_user_registr."
      });
    });
};

// Find a single View_user_registr with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_user_registr.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find View_user_registr with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving View_user_registr with id=" + id
      });
    });
};
