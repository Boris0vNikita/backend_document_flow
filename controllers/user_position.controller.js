const db = require("../models");
const User_position = db.user_position;
const Op = db.Sequelize.Op;
// Create and Save a new User_position
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_user_position) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a User_position
  const user_position = {
    id_user_position: req.body.id_user_position,
    id_user: req.body.id_user,
    id_position: req.body.id_position
  };
  // Save User_position in the database
  User_position.create(user_position)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User_position."
      });
    });
};

// Retrieve all User_positions from the database.
exports.findAll = (req, res) => {
  const id_user_position = req.query.id_user_position;
  var condition = id_user_position ? { id_user_position: { [Op.iLike]: `%${id_user_position}%` } } : null;
  User_position.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user_positions."
      });
    });
};
// Find a single User_position with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  User_position.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User_position with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User_position with id=" + id
      });
    });
};
// Update a User_position by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  User_position.update(req.body, {
    where: { id_user_position: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User_position was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User_position with id=${id}. Maybe User_position was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User_position with id=" + id
      });
    });
};
// Delete a User_position with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  User_position.destroy({
    where: { id_user_position: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User_position was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User_position with id=${id}. Maybe User_position was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User_position with id=" + id
      });
    });
};
// Delete all User_position from the database.
exports.deleteAll = (req, res) => {
  User_position.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} User_positions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all User_positions."
      });
    });
};