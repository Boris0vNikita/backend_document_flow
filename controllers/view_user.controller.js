const db = require("../models");
const View_user = db.view_user;
const Op = db.Sequelize.Op;

// Retrieve all View_user from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  View_user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving View_user."
      });
    });
};

// Find a single View_user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  View_user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find View_user with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving View_user with id=" + id
      });
    });
};
