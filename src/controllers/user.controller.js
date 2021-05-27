import User from '../models/user.model.js'

export default function userController() {
  // Create and Save a new Customer
  const create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Customer
    const user = new User({
      name: req.body.name,
      rol: req.body.rol,
      password: req.body.password
    });
    // Save Customer in the database
    User.create(user, (err, data) => {
      console.log('user', user.body);
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  // Retrieve all Customers from the database.
  const findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  // Find a single Customer with a customerId
  const findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.userId
          });
        }
      } else res.send(data);
    });
  };
  const findRoleOne = (req, res) => {
    User.findByNameAndPassword(req.body, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.body}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.body
          });
        }
      } else res.send(data);
    });
  };

  // Update a Customer identified by the customerId in the request
  const update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    User.updateById(
      req.params.userId,
      new User(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.userId
            });
          }
        } else res.send(data);
      }
    );
  };

  // Delete a Customer with the specified customerId in the request
  const remove = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.userId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };

  // Delete all Customers from the database.
  const deleteAll = (req, res) => {
    User.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };
  return {
    create,
    findAll,
    findOne,
    findRoleOne,
    update,
    remove,
    deleteAll

  }
}


