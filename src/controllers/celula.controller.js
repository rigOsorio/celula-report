import Celula from '../models/celula.model.js'

export default function celulaController() {
  // Create and Save a new Customer
  const create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log('create cellula', req.body);

    // Create a Customer
    const celula = new Celula({
      name: req.body.name,
      leader: req.body.leader,
      host: req.body.host
    });
    console.log('Celula 2 ', celula.body);
    // Save Customer in the database
    Celula.create(celula, (err, data) => {
      console.log('celula', celula.body);
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
    Celula.getAll((err, data) => {
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
    Celula.findById(req.params.celulaId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.celulaId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.celulaId
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

    Celula.updateById(
      req.params.celulaId,
      new Celula(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.celulaId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.celulaId
            });
          }
        } else res.send(data);
      }
    );
  };

  // Delete a Customer with the specified customerId in the request
  const remove = (req, res) => {
    Celula.remove(req.params.celulaId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.celulaId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.celulaId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };

  // Delete all Customers from the database.
  const deleteAll = (req, res) => {
    Celula.removeAll((err, data) => {
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
    update,
    remove,
    deleteAll
  }
}
