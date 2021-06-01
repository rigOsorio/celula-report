import Celula from '../models/celula-model.js'

export default function celulaController() {
  // Create and Save a new Customer
  const create = async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    
    // Create a Customer
    const celula = new Celula({
      name: req.body.name,
      leader: req.body.leader,
      host: req.body.host
    });

    // Save Customer in the database
    Celula.create(celula, (err, data) => {
      
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.status(201).send(data);
    });
  };
  // Retrieve all Customers from the database.
  const findAll = async (req, res) => {
    Celula.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.status(200).send(data);
    });
  };
  // Find a single Customer with a customerId
  const findOne = async (req, res) => {
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
      } else res.status(200).send(data);
    });
  };
  // Update a Customer identified by the customerId in the request
  const update = async (req, res) => {
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
        } else res.status(201).send(data);
      }
    );
  };
  // Delete a Customer with the specified customerId in the request
  const remove = async (req, res) => {
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
      } else res.status(201).send({ message: `Customer was deleted successfully!` });
    });
  };
  // Delete all Customers from the database.
  const deleteAll = async (req, res) => {
    Celula.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.status(201).send({ message: `All Customers were deleted successfully!` });
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
